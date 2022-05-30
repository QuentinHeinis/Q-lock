<template>
  <div class="h-32 w-full color rounded-default flex overflow-hidden font-source-sans-pro">
    <div class="flex-none w-[40%] max-w-[150px]">
        <img :src="image" alt="" class="object-cover w-full h-full">
    </div>
    <div class="flex w-full flex-col justify-between items-center mb-3 px-3 text-black font-smythe text-lg">
        <p>{{Nom}} - {{Place}}</p>
        <p>{{num}}</p>
        <p>{{mail}}</p>
    </div>
      
  </div>
</template>

<script>
export default {
    props:{
        Nom:{type:String,
        default:"Bruce Wayne"},
        
        Place:{type:String,
        default:"Creator"},
        num:{type:String,
        default:"00.00.00.00.00"},
        mail:{type:String,
        default:"fake@mail.fr"},

        image:{
            type:String
        }
    }
}
</script>

<style>

</style>