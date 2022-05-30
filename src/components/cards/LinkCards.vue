<template>
  <div class="h-[96px] w-full color rounded-default flex overflow-hidden font-source-sans-pro">
    <div class="flex-none w-[40%] max-w-[150px]">
        <img src="/src/assets/Ticket.png" alt="" class="object-cover w-full h-full">
    </div>
    <div class="flex w-full justify-between items-center mb-3 px-3">
        <p class="text-black font-smythe text-lg">{{date}}</p>
        <ArrowCircleRightIcon class="w-5 h-5 stroke-black"/>
    </div>
      
  </div>

</template>

<script>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
export default {
    components:{ArrowCircleRightIcon},
    props:{
        date:{
            type:String,
            default:'Thurday'
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