<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Latest updates</h1>
    <NewsCards/>
    <ReleasesCards/>
    <NewsCards/>
    <ReleasesCards/>
    <Background></Background>
  </div>
</template>

<script>
import NewsCards from '../components/cards/NewsCards.vue'
import ReleasesCards from '../components/cards/ReleasesCards.vue'
import Background from '../components/background.vue'
export default {
  components:{ NewsCards, ReleasesCards, Background }
}
</script>

<style>

</style>