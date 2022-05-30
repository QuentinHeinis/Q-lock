<template>
  <div class="mt-12 px-5 flex flex-col gap-20">
    <NewsCards/>
    <ReleasesCards/>
    <NewsCards/>
    <ReleasesCards/>
  </div>
</template>

<script>
import NewsCards from '../components/cards/NewsCards.vue'
import ReleasesCards from '../components/cards/ReleasesCards.vue'
export default {
  components:{ NewsCards, ReleasesCards }
}
</script>

<style>

</style>