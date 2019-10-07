<template>
  <div id="app">
    <Header />
    <AddTodoDesktop v-if="$mq === 'desktop'" v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    <button class="button is-primary plus-btn" v-if="$mq === 'tablet'" @click="openModal"><font-awesome-icon icon="plus" /></button>
    <AddTodo v-model="modalOpen" v-on:add-todo="addTodo"/>
    
    
    
    
   
  </div>
</template>

<script>

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { db } from './firebaseconfig';
import AddTodoDesktop from './components/AddTodoDesktop';



// @ is an alias to /src

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo,
    AddTodoDesktop
  },
  data() {

    return {
      todos: [],
      modalOpen: false
    }
  },
  methods: {

    openModal() {
            this.modalOpen = !this.modalOpen;
        },
    async deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
      
    await db.collection('todos').doc(id).delete()

    this.$notify({
      group: 'foo',
      title: 'This is title',
      text: 'This is content'
    });
  
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },

    async getTask() {
    let data = []

    await db.collection('todos').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => data.push({
        id: doc.id,
        ...doc.data()
      }))
    })

    this.todos = data
    
  }

  
    
  },

  created() {
  db.collection('todos').onSnapshot(doc => {
    const changes = doc.docChanges()

    changes.forEach(change => {
      if(change.type === 'added'){
        this.todos.push ({
        id: change.doc.id,
        ...change.doc.data()
        })
      }

      if(change.type === 'removed'){
        const doc = this.todos.indexOf(changes.doc.id)
        this.todos.splice(doc, 1)
      }
    })
  })
}

}

</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}



.plus-btn{
  float: right;
}


</style>
