<template>
    <header class="header">
        <img class="logo" src="../../assets/logo_transparent.png" alt="NODESK logo">
    </header>
</template>

<script>

export default {
    name: "Header"
   
    
}
</script>

<style scoped>
.header {
    background: rgb(92,205,179);
    background: linear-gradient(90deg, rgba(92,205,179,1) 0%, rgba(74,218,122,1) 95%);
    color: #fff;
    text-align: center;
    padding: 10px;
    height: 22vh;
}

.header a {
    color: #fff;
    padding-right: 5px;
}

.logo{
    height: 22vh;
}
</style>


