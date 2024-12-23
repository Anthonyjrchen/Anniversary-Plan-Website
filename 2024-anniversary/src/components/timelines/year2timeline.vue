<script setup>
    import Bookmark from '../icons/bookmark.vue'
    import Card from '../timelines/card.vue'
    import Card2 from'../timelines/card2.vue'
    import { RouterLink,useRoute } from 'vue-router'
    let observer

    console.log(useRoute().fullPath)
    if (useRoute().fullPath=="/year2"){
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
                <Card date="27/12/2022" title="Lounge Gang" msg="My spidy senses tingled and saved us from missing our flight :) Still no one else i'd rather almost miss my flight with." imgName="27_12_2022.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="color:#00cdb8;" />
                </div>
            </li>
            <li>
                <Card2 date="06/01/2023" title="SHO PRETTY" msg="I had to slide this in beceause I couldn't get over how pretty you are even when you're not trying" imgName="06_01_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="10/01/2023" title="Back from Toronto..." msg="I still remember this so clearly. This was the period of time when we got back from Toronto and my skin was being awful all over again and I was in so much pain. You stuck by my side as usual and helped get me through it <3" imgName="10_01_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="14/02/2023" title="C-PRIME BABY" msg="Low-key you're the best dish in the resteraunt" imgName="14_02_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="18/02/2023" title="Granville Walk" msg="Two years together and a walk that long still flies by instantly." imgName="18_02_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="22/02/2023" title="GOOSE CHASE" msg="Still the most Canadian thing I've ever done HAHAH" movName="goosechase.mov" isMovie="true" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="02/03/2023" title="My cutie" msg="You have no idea how many of these photos I found while scrolling through my album love..." imgName="02_03_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="18/03/2023" title="Escape Room Carry" msg="I might just be the god of escape rooms... cough cough.." imgName="18_03_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="01/04/2023" title="Boat Party (1)" msg="You were the most stunning girl on that boat I promise <3" imgName="boatparty.jpg"/>
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="01/04/2023" title="Boat Party (2)" msg="I actually was really self-conscious about dancing on the dance floor. But I just remembered that song and looked into your eyes and all my worries and fears disappeared." imgName="01_04_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="07/05/2023" title="MORNING ICECREAM" msg="I swear this was pretty much right before we got covid :(" imgName="07_05_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="18/05/2023" title="Dana Einstein" msg="Even those goggles can't save your myopia D:" imgName="18_05_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="21/05/2023" title="HOLY PEAK" msg="I love how this was supposed to be candid but you just starting dead into the camera HAHA" imgName="21_05_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="23/05/2023" title="Cheung Chau" msg="Let's just say that this was the only time we went Cheung Chau that summer.. cough..." imgName="cheungchauwater.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="05/09/2023" title="On Top of the World" msg="That hike was a memory I will never forget.. We should go on more love!" imgName="tunnelbluffs.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="06/09/2023" title="Supra" msg="Can't wait for the day that you're my passenger princess in my supra" imgName="06_09_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="10/09/2023" title="Universal Studios" msg="You are still the best part of the LA trip." imgName="10_09_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="10/11/2023" title="CELEBRITIES" msg="Many a group were bumped into that day LOLLL" imgName="10_11_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li><li>
                <Card date="01/12/2023" title="Whistla" msg="Ski? No... Work? No... Gym and swim :)" imgName="01_12_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="21/12/2023" title="Happy Two Year Anniversary" msg="Two years of matching my freak <3" imgName="21_12_2023.jpg" />
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
                <h3 class="text-lg font-bold" style="display:flex;justify-content: center;">You've reached the end of this year.</h3>
                <div class="button-wrap" style="display:flex; justify-content: center;margin-top:5px;">
                    <div class="btn btn-error" onclick="my_modal1.close()" style="margin-right:10px;">
                        Go back to timeline
                    </div>
                    <RouterLink class="btn btn-accent" to="/year3">Go to the next year</RouterLink>
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