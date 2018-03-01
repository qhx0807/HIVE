import XLSX from 'xlsx'

const s2ab = s => {
  var buf = new ArrayBuffer(s.length)
  var view = new Uint8Array(buf)
  for (var i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xff
  }
  return buf
}

const getCharCol = n => {
  let s = ''
  let m = 0
  while (n > 0) {
    m = n % 26 + 1
    s = String.fromCharCode(m + 64) + s
    n = (n - m) / 26
  }
  return s
}

const fixdata = data => {
  let o = ''
  let l = 0
  let w = 10240
  for (; l < data.byteLength / w; ++l) {
    o += String.fromCharCode.apply(
      null,
      new Uint8Array(data.slice(l * w, l * w + w))
    )
  }
  o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
  return o
}

const downloadExl = (json, downName, type) => {
  let keyMap = []
  for (let k in json[0]) {
    keyMap.push(k)
  }
  let tmpdata = []
  json
    .map((v, i) =>
      keyMap.map((k, j) =>
        Object.assign(
          {},
          {
            v: v[k],
            position:
              (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
          }
        )
      )
    )
    .reduce((prev, next) => prev.concat(next))
    .forEach(function (v) {
      tmpdata[v.position] = {
        v: v.v
      }
    })
  let outputPos = Object.keys(tmpdata)
  let tmpWB = {
    SheetNames: ['mySheet'],
    Sheets: {
      mySheet: Object.assign({}, tmpdata, {
        '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1]
      })
    }
  }
  let tmpDown = new Blob(
    [
      s2ab(
        XLSX.write(tmpWB, {
          bookType: type === undefined ? 'xlsx' : type,
          bookSST: false,
          type: 'binary'
        })
      )
    ],
    {
      type: ''
    }
  )
  let href = URL.createObjectURL(tmpDown)
  let link = document.createElement('a')
  link.href = href
  link.download = downName + '.xlsx'
  link.click()

  setTimeout(function () {
    URL.revokeObjectURL(tmpDown)
  }, 100)
}

const exportExcel = (json, fileName) => {
  if (!json[0]) return false
  let data = [{}]
  for (let k in json[0]) {
    data[0][k] = k
  }
  data = data.concat(json)
  downloadExl(data, fileName)
}

const importExcel = file => {
  var wb
  var rABS = false
  let reader = new FileReader()
  if (rABS) {
    reader.readAsArrayBuffer(file)
  } else {
    reader.readAsBinaryString(file)
  }
  return new Promise(function (resolve, reject) {
    reader.onload = function (e) {
      let data = e.target.result
      if (rABS) {
        wb = XLSX.read(btoa(fixdata(data)), {
          type: 'base64'
        })
      } else {
        wb = XLSX.read(data, {
          type: 'binary'
        })
      }
      let json = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
      resolve(json)
    }
    reader.onerror = reject
  })
}

export { exportExcel, importExcel }
