<script setup>
  import ToDoItem from "./components/ToDoItem.vue";
  import ToDoForm from "./components/ToDoForm.vue";
</script>

<template>
  <div id="app">
    <h1>To-Do List</h1>
    <span>
      <to-do-form v-on:submitted="add_to_do"></to-do-form>
    </span>
    <span> {{ list_message }}</span>
    <span v-for="item in ToDoItems">
      <to-do-item :label="item.label"></to-do-item>
    </span>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    ToDoItem,
    ToDoForm
  },
  methods: {
    add_to_do(todo) {
      this.ToDoItems.push({
        label: todo
      });
    }
    },
    data() {
      return {
        ToDoItems: [
        ]
      };
    }
};
</script>


<style scoped>
#app {
  width: 20vw;
  height: 80vh;
  margin-left: 37vw;
  display: block;
}
h1 {
  height: 5vw;
  text-align: center;
  margin: auto;
}
</style>