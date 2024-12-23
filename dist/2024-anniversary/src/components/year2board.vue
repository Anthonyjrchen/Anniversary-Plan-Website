<script setup>
import HeartIcon from '../components/icons/IconHeart.vue'
</script>
<template>
  <div class="content">
    <div class="artboard phone-5">
      
      <div>
        <ul class="timeline timeline-vertical">
          <li>
            <div class="timeline-start">23/12/2022</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div class="collapse-title text-m font-medium">Christmas Market</div>
              <div class="collapse-content">
                <img src="../assets/christmasmarket.jpg">
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">27/12/2022</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-m font-medium">Our First HK Flight</div>
              <div class="collapse-content">
                <img src="../assets/hkflight2023.jpg">
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">14/02/2023</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-m font-medium">C-Prime Baby</div>
              <div class="collapse-content">
                <img src="../assets/c-prime.jpg">
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">22/02/2023</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-m font-medium">Goose Chase</div>
              <div class="collapse-content">
                <video width="500" controls>
                    <source src="../assets/goosechase.mov">
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">01/04/2023</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-m font-medium">BOAT PRTY</div>
              <div class="collapse-content">
                <img src="../assets/boatparty.jpg">
              </div>
            </div>
          </li>
          <li>
            <hr />
            <div class="timeline-start">23/05/2023</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-m font-medium">Cheung Chau</div>
              <div class="collapse-content">
                <img src="../assets/cheungchauwater.jpg">
              </div>
            </div>
          </li>
          <li>
            <hr />
            <div class="timeline-start">26/05/2023</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-m font-medium">SLINGSHOT</div>
              <div class="collapse-content">
                <img src="../assets/disneyslingdog.jpg">
              </div>
            </div>
          </li>
          <li>
            <hr />
            <div class="timeline-start">25/09/2023</div>
            <div class="timeline-middle">
              <HeartIcon />
            </div>
            <div class="timeline-end collapse bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-m font-medium">Tunnel Bluffs</div>
              <div class="collapse-content">
                <img src="../assets/tunnelbluffs.jpg">
              </div>
            </div>
          </li>
        </ul>

      </div>

      <div class="nav-bar" style="display:flex; justify-content: space-between;">
        <div class="btn btn-accent">
          <RouterLink to="/year1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</RouterLink>
        </div>
        <div class="btn btn-accent">
          <RouterLink to="/year3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
  /* opacity: 0.7; */
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
