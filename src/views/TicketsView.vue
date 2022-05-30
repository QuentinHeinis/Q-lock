<template>
  <div class="mt-12 px-5 flex flex-col gap-20">
    <h1 class="font-smythe text-2xl">Upcomming events</h1>
    <Container class="flex flex-col gap-3">
      <h2 class="font-smythe text-xl">Tickets</h2>
      <LinkCards :text="'Thursday'" :image="'/src/assets/Ticket.png'"></LinkCards>
      <LinkCards :text="'Friday'" :image="'/src/assets/Ticket.png'"></LinkCards>
      <LinkCards :text="'Saturday'" :image="'/src/assets/Ticket.png'"></LinkCards>
      <LinkCards :text="'Sunday'" :image="'/src/assets/Ticket.png'"></LinkCards>
      <LinkCards :text="'Week-end'" :image="'/src/assets/Ticket.png'"></LinkCards>
      <LinkCards :text="'Premium'" :image="'/src/assets/Ticket.png'"></LinkCards>
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