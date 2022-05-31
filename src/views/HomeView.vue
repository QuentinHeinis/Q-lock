<template>
  <div class="relative h-[660px] -z-10">
    <div class="absolute top-0 left-0 right-0 bottom-0 imgGradient">
      <img src="../assets/maxresdefault.png" alt="" class="object-cover w-full h-full">
    </div>
  </div>
  <div class="-mt-72 px-6 mb-6">
    <h1 class="font-smythe text-2xl mb-5">Q-lock 2022</h1>
    <RouterLink to="/Tickets" class="mr-3"><solidBtn>Tickets</solidBtn></RouterLink>
    <RouterLink to="/Tickets"><outlineBtn>Line-up</outlineBtn></RouterLink>
  </div>
  <Container class="gap-[10px] flex flex-col">
    <h2 class="font-smythe text-xl">Latest spdates</h2>
    <UpdateNewsCard v-for="i in 5" :key="i" :img="'/src/assets/image1.png'" :type="'News'"></UpdateNewsCard>
  </Container>
  
</template>

<script>
import solidBtn from '../components/buttons/solidBtn.vue'
import outlineBtn from '../components/buttons/outlineBtn.vue'
import Container from '../components/Container.vue'
import UpdateNewsCard from '../components/cards/updateNewsCard.vue'
export default {
  components:{ solidBtn, outlineBtn, Container, UpdateNewsCard }
}
</script>

<style>

.imgGradient::after{
  content: '';
  background: linear-gradient(180deg, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23, 0.85) 76.87%, #171717 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
}

</style>