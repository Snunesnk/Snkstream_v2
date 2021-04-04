<template>
  <v-app>
    <div class="d-flex justify-center"><h1 id="addTodo">Add ToDo</h1></div>
    <div class="d-flex justify-center">
      <v-col cols="6" style="margin: 0px auto">
        <v-text-field v-model="newTodo" label="Add Todo" solo></v-text-field>
      </v-col>
    </div>
    <div class="d-flex justify-center">
      <v-btn @click="addToDo()" color="primary">Add ToDo</v-btn>
    </div>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    newToDo: "test",
  }),
  methods: {
    addToDo() {
      axios
        .post("/api/todo/add", { todo: this.newTodo })
        .then((response) => {
          alert(response.data);
        });
    },
  },
};
</script>
