<template>

<!--on submit we add the item to the list-->
    <form class="popup modal" @submit="addTodo" v-show="value">

        <!--bg for the mobile popup, which closes the popup-->
        <div  @click.prevent="close" class="modal-background"></div>

        <!--popup-->
        <div class="modal-content">
            <div class="popup-bg">
                <label class="label label-clr" for="item">Add your shopping item:</label>
                <input class="input" type="text" v-model="title" name="title"> <br> <br>
                <label class="label label-clr" for="item">Add the amount of your item:</label>
                <input class="input" type="number" v-model="amount" name="amount"> <br> <br>
                <input type="submit" value="Add" @click="close" class="button is-white">
                <button class="button cancel-btn" @click.prevent="close">Cancel</button>
            </div>
        </div>
        
    </form>
</template>

<script>
//this plugin makes a new id every time its triggered
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
        background: rgb(92,205,179);
        background: linear-gradient(90deg, rgba(92,205,179,1) 0%, rgba(74,218,122,1) 95%);
        border-radius: 1em;
        margin: 0 1em 0 1em;
    }

    .label-clr{
        color: #fff;
    }

    .cancel-btn{
        float: right;
        background: #ff0000;
        color: white;
        border: none;
    }


</style>

