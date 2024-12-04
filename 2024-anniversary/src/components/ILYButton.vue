<script setup>
import { ref, Transition} from 'vue'
import Chat from '../components/chat.vue'

const button_text = ref(["Click to say 'I love you!'","Click to say 'I love you most!'","Click to say 'I love you mostest!'","Mhmmm"])
const show = ref(false)
var IsChatDone = ref(false)

function receiveEmit(){
    IsChatDone=true
    console.log("ischatdone? = " + IsChatDone) 
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
        <Transition>
            <button class="btn btn-accent" v-if="IsChatDone==true">
                <RouterLink to="/year1">Let's review our years </RouterLink>
            </button>            
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


<!-- <Transition>
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
        <RouterView /> -->