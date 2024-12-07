<script setup>
import { ref, Transition} from 'vue'
import Chat from '../components/chat.vue'

const button_text = ref(["Click to say 'I love you!'","Click to say 'I love you most!'","Click to say 'I love you mostest!'","Mhmmm"])
var show = ref(false)
var IsChatDone = ref(false)

function receiveEmit(){
    IsChatDone=true
    console.log("ischatdone? = " + IsChatDone) 
    document.getElementById("review_button").classList.remove("hidden")
}
</script>

<template>
    <div class="container flex flex-col items-center">
        <Transition>
            <button class="btn btn-accent" v-if="!show" @click="show = !show">
                Start Chat
            </button>
        </Transition>

        <Transition>
            <div class="mockup-phone" v-if="show">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1"  style="display: flex; justify-content:end">
                        <Chat @done="receiveEmit"/>
                    </div>
                </div>
            </div>
        </Transition>
        <button id="review_button" class="btn btn-accent hidden">
            <RouterLink to="/year1">Let's review our years </RouterLink>
        </button>         
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