<template>
    <transition name="fade">
        <div v-if="show" class="preloader">
            <img class="logo" src="../assets/logo_transparent.png" alt="NODESK logo">
            <div class="circles">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </div>
    </transition>
</template>

<script> 
export default {
    name: 'preloader',
    data(){
        return{
            show:true
        }
    },
    mounted(){
        this.showToggle()
    },
    // method that shut down the preloader after 1000 miliseconds
    methods: {
        showToggle(){
            setTimeout(() => {
                this.show = false
            },500);
        }
    }
}
</script>

<style>
    .preloader{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(92,205,179);
        background: linear-gradient(90deg, rgba(92,205,179,1) 0%, rgba(74,218,122,1) 95%);
        z-index: 9999;
    }

    .preloader .logo{
        width: 15.5rem;
        height: 15.5rem;
       
    }

    .preloader .circles{
        display: flex;
        margin-top: 1rem;
    }

     .preloader .circles .circle{
        width: 1.5rem;
        height: 1.5rem;
        margin: 1.5rem;
        background-color: white;
        border-radius: 50%;
        animation-name: scaleIn;
        animation-duration: 1s;
        transform: scale(0);  
    }

     .preloader .circles .circle:nth-child(1){
          animation-delay: 0s;
    }

    .preloader .circles .circle:nth-child(2){
          animation-delay: .05s;
    }

    .preloader .circles .circle:nth-child(3){
          animation-delay: .1s;
    }

    .preloader .circles .circle:nth-child(4){
          animation-delay: .15s;
    }

    .preloader .circles .circle:nth-child(5){
          animation-delay: .2s;
    }


    .fade-enter-active, .fade-leave-active{
        transition: opacity 1s;
    }

    .fade-enter-active, .fade-leave-active .logo{
        animation-name: scaleOut;
        animation-duration: 2s;
    }

    .fade-enter-active, .fade-leave-active p{
        animation-name: scaleIn;
        animation-duration: 2s;
        transform: scale(0);
    }


    .fade-enter, .fade-leave-to{
        opacity: 0;

    }

    @keyframes scaleOut{
        0% {transform:scale(1);}
        100% {transform:scale(0);}
    }

    @keyframes scaleIn{
        0% {transform:scale(0);}
        100% {transform:scale(1);}

    }
</style>
