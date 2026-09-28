<template>
  <div>
    <input type="checkbox" id="to-do-box" v-bind:checked="done"/>
    <slot name="to-do-text">{{ label }}</slot>
  </div>
</template>

<script>
  export default {
    props: {
      label: { required: true, type: String },
      done: { default: false, type: Boolean}
    }
  };
</script>

<style scoped>
input {
  margin: 1vw;
}
</style>