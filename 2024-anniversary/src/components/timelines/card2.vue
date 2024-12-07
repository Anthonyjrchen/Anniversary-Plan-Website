<script setup>
    const props = defineProps({
        date: {type:String,required:true},
        title: {type:String,required:true},
        msg: {type:String,required:true},
        imgName: {type:String,required:true},
    })

    function getImageUrl() {
        return new URL(`../../assets/${props.imgName}`, import.meta.url)
    }
</script>


<template>
    <div class="timeline-end mb-14">
        <div class="card glass w-196">
            <div class="card content">
                <time class="text-lg font-mono italic">{{ date }}</time>
                <div class="text-xl font-black">{{ title }}</div>
                <div class="text-lg">{{ msg }} + {{ imgName }}</div>
            </div>
        </div>
    </div>
    <div class="timeline-start mb-14 md:text-end">
        <img :src="getImageUrl()" class="rounded-3xl h-100 w-80" style="margin-top:40px;">
    </div>
    
</template>