<script setup>
    import Bookmark from '../icons/bookmark.vue'
    import Card from '../timelines/card.vue'
    import Card2 from'../timelines/card2.vue'
    import { RouterLink,useRoute } from 'vue-router'
    let observer

    console.log(useRoute().fullPath)
    if (useRoute().fullPath=="/year3"){
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
                <Card date="23/12/2023" title="Festival of Lights" msg="Festival of lights but you still shine the brightest" imgName="23_12_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="color:#00cdb8;" />
                </div>
            </li>
            <li>
                <Card2 date="29/12/2023" title="Me and my Passenger Princess" msg="This gon be us everyday once I get a car I already know <3" imgName="29_12_2023.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="08/01/2024" title="MASTER CHEP" msg="I was lowkey nervous to cook a big meal for my family especially because I hyped it up so much HAHAHA. Thank you so much for being my co-chef; we should really sign up for co-master chef HAHA" imgName="08_01_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="14/01/2024" title="SHANDWITCHU" msg="Mornings like this with you mean the world to me <3" imgName="14_01_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="21/02/2024" title="Quick lil' Selfie" msg="Walking selfie and you look still look this gorgeous?" imgName="21_02_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="27/02/2024 " title="MY FREAK" msg="HAHAHAHAH I fucking love you so much you have no idea. I love your freak" imgName="27_02_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="16/03/2024" title="Matching Fits" msg="We need practice poses I still remember how awkward you and I were when Janice told us to pose HAHA" imgName="16_03_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="07/04/2024" title="Bario Fiesta" msg="I can't even lie we slayed that day. You made my jaw drop everytime I turned my head towards you." imgName="07_04_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="11/04/2024" title="Appreciation" msg="I know youre not in this photo but I seriously cherish the fact that you come to all my games and tournaments. It puts me on top of the world." imgName="11_04_2024.jpg"/>
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="07/05/2024" title="Raybans Promo" msg="Sorry you're telling me that you aren't a Raybans model?!?!" imgName="07_05_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="10/05/2024" title="Aurora" msg="That night at the beach was so magical." imgName="10_05_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="22/06/2024" title="Flower Appreciation" msg="I should get you flowers everyday if you smile at me like that" imgName="22_06_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="06/07/2024" title="My Tochi Queen" msg="I loved Khatsalano. It was such a blast exploring it with you and it genuinely felt timeless even though it was SO hot." imgName="06_07_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="20/07/2024" title="Orca Incident" msg="I ALMOST GOT FUCKING CANCELED HAHAHA" imgName="20_07_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="17/08/2024" title="Moments Like This" msg="These moments make me cherish the time I spend with you. Even if they're silly, short, funny. I love them and they mean the world to me." imgName="17_08_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="23/08/2024" title="CUBAAAA" msg="Dos pina colada por favor" imgName="23_08_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="27/08/2024" title="AAAAAHHHH" msg="The beach looks so amazing with you in it. We shall be back there someday, don't worry <3" imgName="27_08_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="13/09/2024" title="TOCHI V2" msg="BIRTHDAY TOCHI FOR MY BIRTHDAY GIRL HEHE. P.S, you're fucking gorgeous" imgName="13_09_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li><li>
                <Card date="28/09/2024" title="Model Moment" msg="Oh yeah. I'm dating a model btw." imgName="28_09_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="31/10/2024" title="Halloween V2" msg="I loved dressing up with you baby and i wanna do it again every year" imgName="31_10_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card date="25/11/2024" title="ERMMM... ACTUALLY" msg="I can't comprehend how you manage to do the impression so well HAHA. Thanks for getting me through the dark times when my grandpa passed away love." imgName="25_11_2024.jpg" />
                <div class="initial-wrap" style="margin: 30px;">
                    <div class="scroll-wrap">
                        <div class="scroll-base"></div>
                        <div class="scroll-animate animate"></div>
                    </div>
                    <Bookmark class="bookmark" style="margin:0;" />
                </div>
            </li>
            <li>
                <Card2 date="22/12/2024" title="3 years" msg="Thats a wrap of our relationship so far. I can't wait to start the next year together starting tomorrow <3" imgName="22_12_2024.jpg" />
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
                    <RouterLink class="btn btn-accent" to="/end">Suprise</RouterLink>
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