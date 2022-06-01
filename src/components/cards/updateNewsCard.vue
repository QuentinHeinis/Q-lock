<template>
  <div class="min-h-[96px] w-full color rounded-default flex overflow-hidden font-source-sans-pro">
      <div class="flex-none w-[40%] max-w-[150px]">
          <img :src="img" alt="" class="object-cover w-full h-full">
      </div>
      <div class="px-3 w-full">
          <div class="flex w-full justify-between items-center mb-3">
              <p class="text-[10px] px-3 bg-slate-600 rounded-xl uppercase">{{type}}</p>
              <RouterLink to="/Latest"><ArrowCircleRightIcon class="w-5 h-5 stroke-black"/></RouterLink>
          </div>
          <h4 class="text-black text-[20px]">{{Title}}</h4>
      </div>
  </div>

</template>

<script>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
export default {
    components:{ArrowCircleRightIcon},
    props:{
        type:{
            type:String,
            default:'News'
        },
        img:{
            type:String,
        },
        Title:{
            type:String,
            default:"This is the latest news/releases"
        }
    }
}
</script>

<style>
.color{
    background:radial-gradient(139.77% 702.04% at 130% 115.91%, #CCFF00 0%,
     rgba(255, 199, 0, 0) 100%)
    , #F2325C;
}
</style>