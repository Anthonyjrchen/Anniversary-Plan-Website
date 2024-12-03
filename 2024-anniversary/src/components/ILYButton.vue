<script setup>
import { ref} from 'vue'
const count = ref(0)
const button_text = ref(["Click to say 'I love you!'","Click to say 'I love you most!'","Click to say 'I love you mostest!'","Mhmmm"])
// const responses = ref(["I love you more","I love you more than most"])
const show = ref(0)

// function checkCount() {
//     if (count.value==1) {
//         document.getElementById("lovebutton").className = "btn btn-accent btn-disabled"
        
//     }
// }
</script>

<template>
    <div class="container flex flex-col items-center">
        <Transition>
            <button v-if="count<3" id="lovebutton" class="center btn btn-accent" @click="if(count<=2)count++; ">{{ button_text[count] }}</button>
        </Transition>
        <Transition>
            <h1 v-if="count==1" class="green">I love you more</h1>
        </Transition>
        <Transition>
            <h1 v-if="count==2" class="green">I love you more than most</h1>
        </Transition>        
        <Transition>
            <button class="btn btn-accent" v-if="count==3">
                <RouterLink to="/year1">Let's review our years </RouterLink>
            </button>            
        </Transition>
        <Transition>
            <h1 v-if="count==3" class="green">Sorry but I love you more than mostest hehe</h1>
        </Transition>
        <RouterView />
    </div>
</template>

<style>
    .container.flex.flex-col.items-center{
        color: white;
    }

    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>