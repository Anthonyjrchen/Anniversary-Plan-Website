<script setup>
import {ref} from 'vue'
import DanaPFP from '../components/icons/DanaPFP.vue'
import AntoPFP from '../components/icons/AntoPFP.vue'
var count = ref(0)
var button_text = ["Send Message","Damn Hes Right"]
var button_text_num = ref(0)
function turnOffButton() {
    document.getElementById("chat_button").setAttribute("disabled","true")
    // $emit('updateparent',"ref(true)")
}
function done() {
    this.$emit('IsChatDone')
}

</script>
<template>
    <div style="padding-bottom:10px;">
        <Transition>
            <div class="chat chat-end" v-if="count>0">
                <DanaPFP />
                <div class="chat-bubble">Baby I seriously love you</div>
            </div>
        </Transition>
        
        <Transition>
            <div class="chat chat-start" v-if="count>1">
                <AntoPFP />
                <div class="chat-bubble">I love you more</div>
            </div>
        </Transition>
        <Transition>
            <div class="chat chat-end" v-if="count>2">
                <DanaPFP />
                <div class="chat-bubble">I love you most</div>
            </div>
        </Transition>
        <Transition>
            <div class="chat chat-start" v-if="count>3">
                <AntoPFP />
                <div class="chat-bubble">I love you more than most</div>
            </div>
        </Transition>
        <Transition>
            <div class="chat chat-end" v-if="count>4">
                <DanaPFP />
                <div class="chat-bubble">I love you more than mostest</div>
            </div>
        </Transition>
        <Transition>
            <div class="chat chat-start" v-if="count>5">
                <AntoPFP />
                <div class="chat-bubble">I love you more than you can ever image my love</div>
            </div>
        </Transition>
    </div>
    <div  id="chat_button"  class="btn btn-accent btn-wide" @click="$emit('done')" >{{button_text[button_text_num]}}</div>
</template>
<!-- if(count<5){count++;}else{count++;button_text_num++; turnOffButton();} -->