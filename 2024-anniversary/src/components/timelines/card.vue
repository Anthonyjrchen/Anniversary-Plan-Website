<script setup>
    const props = defineProps({
        date: {type:String,required:true},
        title: {type:String,required:true},
        msg: {type:String,required:true},
        imgName: {type:String},
        movName: {type:String},
        isMovie: {default:false,type:Boolean},
    })

    function getImageUrl() {
        return new URL(`../../assets/${props.imgName}`, import.meta.url)
    }

    function getMovieUrl() {
        return new URL(`../../assets/${props.movName}`, import.meta.url)
    }

    import {Transition} from 'vue'
</script>


<template>
        <div class="timeline-start mb-14">
            <div class="card glass w-196">
                <div class="card content" style="padding:10px">
                    <time class="text-lg font-mono italic">{{ date }}</time>
                    <div class="text-xl font-black">{{ title }}</div>
                    <div class="text-lg">{{ msg }}</div>
                </div>
            </div>
        </div>
        <Transition>
            <div class="timeline-end mb-14 md:text-end" v-if="!props.isMovie">
                <img :src="getImageUrl()" class="rounded-3xl h-100 w-80" style="margin-top:40px;">
            </div>
        </Transition>
        <Transition>
            <div class="timeline-end mb-14 md:text-end" v-if="props.isMovie">
                <video class="rounded-3xl h-100 w-80" controls>
                    <source :src="getMovieUrl()">
                    Your browser does not support the video tag.
                </video>
            </div>
        </Transition>
</template>