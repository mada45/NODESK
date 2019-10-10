<template>
  <div id="app">
    <preloader/>
    <Header />
    <AddTodoDesktop v-if="$mq === 'desktop'"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    <button class="plus-btn" v-if="$mq === 'tablet'" @click="openModal"><font-awesome-icon class="icon-size" icon="plus" size="2x" /></button>
    <AddTodo v-model="modalOpen"/>
  </div>
</template>

<script>
import Preloader from './components/Preloader';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { db } from './firebaseconfig';
import AddTodoDesktop from './components/AddTodoDesktop';



// @ is an alias to /src

export default {
  name: 'app',
  components: {
    Preloader,
    Header,
    Todos,
    AddTodo,
    AddTodoDesktop
  },
  data() {

    return {
      todos: [],
      //mobile popup
      modalOpen: false
    }
  },
    
  
  methods: {

    openModal() {
            this.modalOpen = !this.modalOpen;
        },
    //Method loops through the items and deletes one we do not want
    async deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
      
    await db.collection('todos').doc(id).delete()
    },

    //adding new todo
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },

//getting the items from firebase
    async getTask() {
    let data = []


     await db.collection('todos').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => data.push({
        id: doc.id,
        ...doc.data()
      }))
    })
    
    this.todos = data;
  }
},

//displays firebase items on page load
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
  font-family: 'Times New Roman', Times, serif;
  line-height: 1.4;
}



.plus-btn{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 5em;
  height: 5em;
  color: white;
  background: #5ccdb3;
  border: none;
  border-radius: 50%;
  margin: 0 1em 1em 0;
}




</style>
