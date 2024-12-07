<script setup>
import HeartIcon from '../components/icons/IconHeart.vue'
</script>
<template>
    <div class="content">
    <div class="artboard phone-5">
      
      <div>
        <ul class="timeline timeline-vertical">
          <li>
            <div class="timeline-start">23/12/2021</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div class="collapse-title text-m font-medium">Damn princess carry on day 1?</div>
              <div class="collapse-content">
                <img src="../assets/princesscarry-1.jpg">
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">29/12/2021</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div class="collapse-title text-m font-medium">My First Favourite Photo of Us</div>
              <div class="collapse-content">
                <img src="../assets/sunpeaks.jpg">
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">01/01/2022</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div class="collapse-title text-m font-medium">Lil' Kiss Under the Mistletoe</div>
              <div class="collapse-content">
                <img src="../assets/undertree.jpg">
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">14/01/2022</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div class="collapse-title text-m font-medium">My Jaw Touched the ground</div>
              <div class="collapse-content">
                <img src="../assets/mirror-selfie1.jpg">
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">31/10/2022</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div class="collapse-title text-m font-medium">SPOOKY SZN</div>
              <div class="collapse-content">
                <img src="../assets/halloween2022.jpg">
              </div>
            </div>
          </li>
        </ul>

        <div class="collapse bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">There were too many moments to put in here</div>
          <div class="collapse-content">
            <p>Enjoy our first year <3</p>
          </div>
        </div>
      </div>

      <div class="nav-bar" style="display:flex; justify-content: space-between;">
        <div class="btn btn-accent">
          <RouterLink to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</RouterLink>
        </div>
        <div class="btn btn-accent">
          <RouterLink to="/year2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</RouterLink>
        </div>
      </div>
      

    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-content: center;
  
}

.artboard {
  color:white;
  background-color: rgb(40, 43, 43);
  border-radius: 25px;
  padding:10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.collapse-content{
  display: flex;
  justify-content: center;
  align-content: center;
  overflow:visible;
}

.button.holder {
  justify-content: flex-end;
  display:flex;
}

img {
    transition:transform 0.25s ease;
}

img:hover {
    -webkit-transform:scale(3);
    transform:scale(3);
    
}
</style>