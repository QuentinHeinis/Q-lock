<template>
    <Container class="specialcontainer">
        <div class="min-h-[96px] w-full color rounded-t-default flex overflow-hidden font-source-sans-pro">
            <div class="flex-none w-[40%] max-w-[150px]">
                <img src="/src/assets/image1.png" alt="" class="object-cover w-full h-full">
            </div>
            <div class="px-3">
                <p class="text-[10px] px-3 w-fit mx-auto mt-1 bg-slate-600 rounded-xl uppercase">News</p>
                <h4 class="text-black text-[20px]">Check out Relianze’s solo Acceleration’ EP on Rapture Records</h4>
            </div>
        </div>
       <div class="py-10 px-6 font-source-sans-pro text-sm font-normal">
            <p>
                Put the pedal to the metal and launch straight into the deepest realms of euphoria with Relianze’s exhilarating new “Acceleration” EP. This promising new name flaunts his talent with two new Frenchcore bangers that will jump-start your day with an abundance of power and uplifting energy! 🚀
            </p>
            <br/>
            <p>
                The first track ‘Acceleration’ opens the EP with a memorable melody and galvanizing atmosphere to bring you to higher states of consciousness. Continuing the journey with ‘Turn The Levels Up’, Relianze gives another striking tune to lift your spirits!
            </p>
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