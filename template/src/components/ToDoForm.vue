<template>
  <form v-on:submit.prevent="on_submit">
    <input
      type="text"
      placeholder="new to do item"
      v-model="text" />
    <button type="submit"> + </button>
  </form>
</template>

<script>
export default {
    methods: {
        on_submit() {
            // console.log("form submitted: " + this.text);
            if (this.text == "") {
                return;
            }
            this.$emit("submitted", this.text)
            this.text = ""
        },
    },
    data() {
        return {
            text: ""
        }
    }
};
</script>

<style scoped>
input {
    width: 10vw;
    margin: 1vw;
}
</style>