<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Korsakoff</h1>
    <Container class="flex flex-col gap-3">
      <img src="/src/assets/image1.png" alt="">
      <p>{{description}}</p>
    </Container>

    <OutlineBtn class="w-fit mx-auto"><RouterLink to="/Artistes">Retour</RouterLink></OutlineBtn>
  </div>
</template>

<script>
import Container from '../../components/Container.vue';
import OutlineBtn from '../../components/buttons/outlineBtn.vue';
export default {
    components: { Container, OutlineBtn },
    props:{
      description:{ type:String,
        default:"Korsakoff, de son vrai nom Lindsay van der Eng, née le 25 juillet 1983, est une productrice et disc jockey de techno hardcore et gabber néerlandaise. Elle est l'une des productrices les plus reconnues de la scène gabber mixant dans les soirées les plus prestigieuses, en particulier Masters of Hardcore1. La plupart de ses titres et albums ont atteint les classements internationaux. "
      },
    }
}
</script>

<style>

</style>