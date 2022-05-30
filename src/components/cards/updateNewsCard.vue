<template>
  <div class="min-h-[96px] w-full color rounded-default flex overflow-hidden font-source-sans-pro">
      <div class="flex-none w-[40%] max-w-[150px]">
          <img src="/src/assets/image1.png" alt="" class="object-cover w-full h-full">
      </div>
      <div class="px-3">
          <div class="flex w-full justify-between items-center mb-3">
              <div class="px-3 bg-slate-600 rounded-xl uppercase ">
                  <p class="text-[10px]">News</p>
              </div>
              <ArrowCircleRightIcon class="w-5 h-5 stroke-black"/>
          </div>
          <h4 class="text-black text-[20px]">Check out Relianze’s solo Acceleration’ EP on Rapture Records</h4>
      </div>
  </div>

</template>

<script>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
export default {
    components:{ArrowCircleRightIcon}
}
</script>

<style>
.color{
    background:radial-gradient(139.77% 702.04% at 130% 115.91%, #CCFF00 0%,
     rgba(255, 199, 0, 0) 100%)
    , #F2325C;
}
</style>