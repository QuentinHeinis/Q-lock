<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Upcomming events</h1>
    <Container class="flex flex-col gap-3">
      <h2 class="font-smythe text-xl">Tickets</h2>
      <LinkCards v-for="offer in ListeOffer" :key="offer" :text="offer" :image="'/src/assets/Ticket.png'" :chemin="'/DetailsTicket'"></LinkCards>
    </Container>
    <Background></Background>
  </div>
</template>

<script>
import Container from '../../components/Container.vue';
import LinkCards from '../../components/cards/LinkCards.vue';
import Background from '../../components/background.vue';
export default {
    components: { Container, LinkCards, Background },
    data(){
      return{
        ListeOffer:['Thursday', 'Friday', 'Saturday', 'Sunday', 'Week-end', 'Premium' ]
      }
    }
}
</script>

<style>

</style>