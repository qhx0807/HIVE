<template>
  <dl>
    <dt>{{label}}</dt>
    <slot></slot>
  </dl>
</template>

<script>
export default {
  name: 'OptionGroup',
  props:{
    label:{
      type:[String,Number],
      default:''
    }
  }
}
</script>

