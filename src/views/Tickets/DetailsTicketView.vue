<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Thursday</h1>
    <Container class="flex flex-col gap-3">
      <img src="/src/assets/Ticket.png" alt="" class="max-w-sm w-2/3 mx-auto">
      <p>{{description}}</p>
    </Container>
    <div class="flex justify-evenly w-full">
        <SolidBtn><RouterLink to="/">Acheter</RouterLink></SolidBtn>
        <OutlineBtn><RouterLink to="/Tickets">Retour</RouterLink></OutlineBtn>
    </div>
  </div>
</template>

<script>
import Container from '../../components/Container.vue';
import OutlineBtn from '../../components/buttons/outlineBtn.vue';
import SolidBtn from '../../components/buttons/solidBtn.vue';
export default {
    components: { Container, OutlineBtn, SolidBtn },
    props:{
      description:{ type:String,
      default:"Fresh Friday is Defqon.1’s latest addition. A full-on festival day that rivals the magnitude of the Saturday with all stages, including the RED, opened all day!"
      },
    }
}
</script>

<style>

</style>