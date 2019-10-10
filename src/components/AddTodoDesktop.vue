<template>
    <div class="Submit-part">
        <form @submit="addTodo">
            <input class="input" type="text" v-model="title" name="title" placeholder="Add item...">
            <input class="input" type="number" v-model="amount" name="amount" placeholder="Add amount...">
            <input type="submit" value="Add" class="button add-btn">
        </form>
    </div>
</template>

<script>
//this plugin makes a new id every time its triggered
import uuid from 'uuid';
import {
        db
    } from '../firebaseconfig'

export default {
    name: "AddTodoDesktop",
    data(){
        return{
            title: '',
            amount: ''
        }
    },
    methods: {
        async addTodo(e){
            e.preventDefault();
            const newTodo = {
                id: uuid.v4(),
                title: this.title,
                amount: this.amount,
                completed: false
            }
            
                this.loading = true

                await db.collection('todos').add({
                    title: this.title,
                    amount: this.amount
                })


                this.loading = false

                this.title = '',
                this.amount = ''
            
        },

        close() {
                  this.$emit("input", !this.value);
                }
         
        
        
    }
}
</script>

<style scoped>

    .Submit-part{
    background: linear-gradient(90deg, rgba(92,205,179,1) 0%, rgba(74,218,122,1) 95%);
    }

    form{
        display: grid;
       grid-template-columns: 4fr 2fr 1fr;
    grid-template-rows: auto;
    grid-gap: 50px;
    padding: 0px 150px 40px 150px;

    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }

    input[type="number"] {
        flex: 3;
        padding: 5px;
    }

    .add-btn{
        background: white;
        color: #4a4a4a;
    }
    
</style>

