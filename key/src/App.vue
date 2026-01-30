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
      fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({text: todo}),
          }); 
    },
      get_data() {    
        const data = fetch('http://localhost:3000/', {
          method: 'GET'
        })
        .then(response => response.json());
        return data;
      }  
    },
    data() {
      return {
        ToDoItems: [
        ]
      };
    },
    computed: {
      list_message() {
        const total = this.ToDoItems.length;
        if (total == 1) return '1 item';
        return "" + total + " items";
      }
    },
    mounted() {
      const table = this.get_data().then(data => {
        for(let key of data){
          this.ToDoItems.push({
            label: key.text
          });
        }
      });
    }
};
</script>