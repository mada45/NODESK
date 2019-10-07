<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">

        <div class="item-space">
           
           <div>
            {{todo.title}}
            </div>

            <div>
            {{todo.amount}}
           </div>
            
            <div>
                <label class="container">
                    <input type="checkbox" v-on:change="markComplete ">
                    <span class="checkmark"></span>
                </label>
            </div>
            <div>
            <button @click="$emit('del-todo', todo.id)" group="foo" class="del"><font-awesome-icon icon="times" /></button>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseconfig';
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete(){
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>


    .todo-item{
        background: #fff;
        padding: 15px 160px 15px 160px;
        border-bottom: 1px #ccc dotted;
        
    }

    .item-space{
        display: grid;
        grid-template-columns: 11fr 6fr 1fr 1fr;
        grid-template-rows: auto;
    }

    .is-complete {
        text-decoration: line-through;
    }

    .del{
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 8px;
        border-radius: 50%;
        cursor: pointer;
        /* float: right; */
        margin-left: 25px;
    }

     /* Customize the label (the container) */
.container {
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
  /*float: right; */
  height: 25px;
  width: 25px;
  background-color: #ddd;
  border-radius: 50%;
  margin-left: 10px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: rgb(33, 243, 156);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

@media only screen and (max-width: 767px) {
   .todo-item{
        padding: 15px;
              
    }
}

</style>