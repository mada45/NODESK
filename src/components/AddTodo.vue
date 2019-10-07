<template>
    <form class="popup modal" @submit="addTodo" v-show="value">
        <div  @click.prevent="close"
 class="modal-background"></div>
        <div class="modal-content">
            <div class="popup-bg">
                <label class="label label-clr" for="item">Add your shopping item:</label>
                <input class="input" type="text" v-model="title" name="title"> <br> <br>
                <label class="label label-clr" for="item">Add the amount of your item:</label>
                <input class="input" type="number" v-model="amount" name="amount"> <br> <br>
                <input type="submit" value="Add" @click="close" class="button is-white">
                <button class="button is-danger cancel-btn" @click.prevent="close">Cancel</button>
            </div>
        </div>
        
    </form>
</template>

<script>
import uuid from 'uuid';
import {
        db
    } from '../firebaseconfig'

export default {
    name: "AddTodo",
    props: {
                value: {
                    required: true
                }
    },
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
            //send up to parent
            this.$emit('add-todo', newTodo);

            
                
            
            
                this.loading = true

                await db.collection('todos').add({
                    title: this.title,
                    amount: this.amount
                })


                

                this.$notify({
                    group: 'item-changed',
                    type: 'success',
                    title: 'Band Created',
                    text: 'You have created a band successfully, well done!'
                });

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

<style lang="css" scoped>
    form{
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }

    .popup {
          background-color: rgba(0, 0, 0, 0.7);
      }

    .popup-bg{
        padding: 2em;
        display: block;
        background: #5ccdb3;
        border-radius: 1em;
        margin: 0 1em 0 1em;
    }

    .label-clr{
        color: #fff;
    }

    .cancel-btn{
        float: right;
    }


</style>

