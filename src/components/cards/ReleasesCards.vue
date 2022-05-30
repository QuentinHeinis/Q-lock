<template>
    <Container class="specialcontainer">
        <div class="min-h-[96px] w-full color rounded-t-default flex overflow-hidden font-source-sans-pro">
            <div class="flex-none w-[40%] max-w-[150px]">
                <img src="/src/assets/Image2.png" alt="" class="object-cover w-full h-full">
            </div>
            <div class="px-3">
                <p class="text-[10px] px-3 w-fit mx-auto mt-1 bg-slate-600 rounded-xl uppercase">Releases</p>
                <h4 class="text-black text-[20px]">Furyan & Hysta – son qui défonce</h4>
            </div>
        </div>
       <div class="py-10 px-6 flex justify-between">
           <img src="/src/assets/social/spotify.png" alt="">
           <img src="/src/assets/social/soundcloud.png" alt="">
           <img src="/src/assets/social/deezer.png" alt="">
           <img src="/src/assets/social/itunes.png" alt="">
       </div>
    </Container>
</template>

<script>
import Container from '../Container.vue';
export default {
    components: { Container }
}
</script>

<style>
.specialcontainer{
    @apply p-0 !important;
}

</style>