<template>
    <div>
        <!-- V-for is Looping through Todos array, v-bind:key is giving unique id to every single to do item-->
        <div v-for="todo in todos" v-bind:key="todo.id">
           <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["todos"]
    
}

</script>

<style scoped>

</style>


