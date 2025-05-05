<script setup>
    import Bookmark from '../icons/bookmark.vue'
    import Card from '../timelines/card.vue'
    import Card2 from'../timelines/card2.vue'
    import { RouterLink,useRoute } from 'vue-router'
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
            if (entry.isIntersecting && entry.target.id=="last_bookmark") {
                console.log("Reached last node")
                document.getElementById("my_modal1").showModal();
            }

            if (entry.intersectionRatio>0.5) {
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
    const lastElement = document.querySelector('#last_bookmark');
    observer.observe(lastElement);
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
                    <Bookmark class="bookmark" style="color:#00cdb8;" />
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
                <Card date="01/01/2022" title="Lil' Kiss Under the Mistletoe" msg="I can't lie, leading up to this point I was so nervous about kissing you. It was honestly the best kiss I have ever had <3 ALSO, I love how we are representing shorts gang here :D" imgName="undertree.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="14/01/2022" title="My Jaw Touched the ground" msg="Do I even need to say anything..." imgName="mirror-selfie1.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="14/01/2022" title="Sleepover :D:D" msg="At this point in time so much was going wrong for me. I was in such a dark spot and really struggled with being happy but you made it so much easier and i'm forever grateful." imgName="mirror-selfie2.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="21/01/2022" title="Ermmm" msg="I think you remember what we did here but also I think Ate for sure knew too HAHAHA" imgName="sofa-selfie.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="13/03/2022" title="Skiing, kind of" msg="To this day I cannot believe that we went all the way to grous to do one lap and then nap HAHA. Still, would never change a thing about it." imgName="grous.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="02/04/2022" title="Seattle road nap HEHE" msg="So classic of us" imgName="seattleNap.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="08/04/2022" title="Most awkward yet cutest moment" msg="I never thought about this but it was 3 am when we took this... Why were we awake LOL. I can't believe how far we've gotten from this stage in our relationship." movName="3am.mov" isMovie="true"/>
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="31/10/2022" title="SPOOKY SZN" msg="It was so fun to dress up with you for the first time." imgName="halloween2022.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <div class="timeline-start mb-14">
                    <div class="card glass w-196">
                    </div>
                </div>
                <div class="initial-wrap" style="margin:30px;">
                    <Bookmark id="last_bookmark" class="bookmark" style="margin:0;" />
                </div>
            </li>
        </ul>
        <dialog id="my_modal1" class="modal">
            <div class="modal-box">
                <h3 class="text-lg font-bold" style="display:flex;justify-content: center;">You've reached the end this year.</h3>
                <div class="button-wrap" style="display:flex; justify-content: center;margin-top:5px;">
                    <div class="btn btn-error" onclick="my_modal1.close();" style="margin-right:10px;">
                        Go back to timeline
                    </div>
                    <RouterLink class="btn btn-accent" to="/year2">Go to the next year</RouterLink>
                </div>
            </div>
        </dialog>
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
    background: #00cdb8;
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
    100% { color:#00cdb8; }
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