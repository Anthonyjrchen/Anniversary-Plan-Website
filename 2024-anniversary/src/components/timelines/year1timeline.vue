<script setup>
    import Bookmark from '../icons/bookmark.vue'
    import Bookmark2 from '../icons/bookmark2.vue'
    import Card from '../timelines/card.vue'
    import Card2 from'../timelines/card2.vue'
</script>
<template>
    <div class="timelineWrap">
        <ul class="timeline timeline-snap-icon timeline-vertical"> 
            <div id="progress"></div>
            <li>
                <Bookmark2 />
                <Card date="23/12/2021" title="My Princess" msg="No way you really made me carry you on the FIRST day HAHAHAH" imgName="princesscarry-1.jpg" />
                <!-- <hr /> -->
            </li>
            <li>
                <Bookmark2 />
                <Card2 date="29/12/2021" title="My First Favourite Photo of Us" msg="You have no idea how nervous I was to hug you like this :3" imgName="sunpeaks.jpg" />
                <hr />
            </li>
            <li>
                <Bookmark2 />
                <Card date="23/12/2021" title="My Princess" msg="No way you really made me carry you on the FIRST day HAHAHAH" imgName="princesscarry-1.jpg" />
                <hr />
            </li>
            <li>
                <hr />
                <Bookmark2 />
                <Card2 date="29/12/2021" title="My First Favourite Photo of Us" msg="You have no idea how nervous I was to hug you like this :3" imgName="sunpeaks.jpg" />
                <hr />
            </li>
        </ul>
    </div>
    
</template>
<style scoped>

#progress {
    position:fixed;
    left:50%;
    width: 1em; height: 100%;
    background: #8fffe1;

    transform-origin: 50% 0;
    animation: grow-progress auto linear;
    animation-timeline: scroll();
}

@keyframes grow-progress {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
</style>