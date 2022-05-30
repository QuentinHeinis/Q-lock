<template>
  <div class="mt-12 px-5 flex flex-col gap-20">
    <h1 class="font-smythe text-2xl">Upcomming events</h1>
    <Container class="flex flex-col gap-3">
      <h2 class="font-smythe text-xl">Tickets</h2>
      <LinkCards :date="'Thursday'"></LinkCards>
      <LinkCards :date="'Friday'"></LinkCards>
      <LinkCards :date="'Saturday'"></LinkCards>
      <LinkCards :date="'Sunday'"></LinkCards>
      <LinkCards :date="'Week-end'"></LinkCards>
      <LinkCards :date="'Premium'"></LinkCards>
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container.vue';
import LinkCards from '../components/cards/LinkCards.vue';
export default {
    components: { Container, LinkCards }
}
</script>

<style>

</style>