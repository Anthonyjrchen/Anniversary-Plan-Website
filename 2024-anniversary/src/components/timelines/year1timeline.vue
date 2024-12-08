<script setup>
    import Bookmark from '../icons/bookmark.vue'
    import Bookmark2 from '../icons/bookmark2.vue'
    import Card from '../timelines/card.vue'
    import Card2 from'../timelines/card2.vue'
    import { watch } from 'vue'
    import { useRoute } from 'vue-router'
    let observer

    console.log(useRoute().fullPath)
    if (useRoute().fullPath=="/year1"){
        setTimeout(init_observer,500)
    }
    // window.addEventListener("DOMContentLoaded",(event)=>{init_observer();},false);

    function init_observer() {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
        observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry.intersectionRatio)
            if (entry.intersectionRatio>0.5) {
                console.log("intersecting");
                entry.target.classList.add('in-view');
                try {
                    entry.target.parentElement.parentElement.parentElement.nextSibling.lastChild.lastChild.classList.add('in-view')
                } catch (error) {
                    console.log("Reached last node")
                }
                
                return;
            }
        })
    },options);
    const allAnimatedElements = document.querySelectorAll('.scroll-animate.animate');
    allAnimatedElements.forEach((element) => observer.observe(element));
    console.log("initialized observer")
    };

</script>
<template>
    <div class="timelineWrap">
        <ul class="timeline timeline-snap-icon timeline-vertical"> 
            <li>
                <Card date="23/12/2021" title="My Princess" msg="No way you really made me carry you on the FIRST day HAHAHAH" imgName="princesscarry-1.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="color:#003cff;" />
                </div>
            </li>
            <li>
                <Card2 date="29/12/2021" title="My First Favourite Photo of Us" msg="You have no idea how nervous I was to hug you like this :3" imgName="sunpeaks.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                
                <Card2 date="29/12/2021" title="My First Favourite Photo of Us" msg="You have no idea how nervous I was to hug you like this :3" imgName="sunpeaks.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="23/12/2021" title="My Princess" msg="No way you really made me carry you on the FIRST day HAHAHAH" imgName="princesscarry-1.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            
            <li>
                <Card date="23/12/2021" title="My Princess" msg="No way you really made me carry you on the FIRST day HAHAHAH" imgName="princesscarry-1.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="29/12/2021" title="My First Favourite Photo of Us" msg="You have no idea how nervous I was to hug you like this :3" imgName="sunpeaks.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
        </ul>
    </div>
    
</template>
<style scoped>

#scroll-wrap {
    position:absolute;
    /* bottom:50%; */
    top:3%;
    display:flex;
    height:100%;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
}

.bookmark {
    color: #ffffff;
    position:absolute;
    left:19.5px;
}

.scroll-base {
    position:absolute;
    width:6px;
    top:3%;
    height:100%;
    background-color:rgb(180, 177, 177);
    transform-origin: 50% 0;
}

.scroll-animate {
    background: #003cff;
    transform-origin: 50% 0;
    opacity: 0;
    position: absolute;
    top:3%;
    bottom: 0px;
    width: 6px;
    height: 100%;
    transform-origin: 50% 0%;
}

@keyframes selected {
    0% { color: white; }
    100% { color:#003cff; }
}

@keyframes grow-progress {
  from { transform: scaleY(0); opacity: 1; }
  to { transform:scaleY(1); opacity: 1;}
}

@keyframes appear {
    from { opacity:0; }
    to { opacity:1; }
}

.scroll-animate.in-view {
    animation: grow-progress 1s;
    animation-fill-mode: forwards;
}

.bookmark.in-view {
    animation: selected 0.35s;
    animation-delay: 0.75s;
    animation-fill-mode: forwards;
}

.timelineWrap {
    animation:appear 1s;
    animation-fill-mode: forwards;
}
</style>