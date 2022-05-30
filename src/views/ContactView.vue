<template>
  <div class="mt-12 px-5 flex flex-col gap-20">
    <h1 class="font-smythe text-2xl">Contact</h1>
    <Container class="flex flex-col gap-3">
      <h2 class="font-smythe text-xl">The Team</h2>
      <Teamcards v-for="member in listeTeam" :key="member" :image="member.image" :mail="member.mail" :Nom="member.nom" :num="member.num" :Place="member.place"></Teamcards>
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container.vue';
import Teamcards from '../components/cards/Teamcards.vue';
export default {
    components: { Container, Teamcards },
    data(){
      return{
        listeTeam:[{nom:'Bruce', place:'Creator', num:'00.00.00.00.00', mail:'fake@mail.fr', image:'/src/assets/team/Bruce.png'},
                  {nom:'Cat', place:'Co-reator', num:'11.11.11.11.11', mail:'mail@fake.fr', image:'/src/assets/team/Cat.png'},
                  {nom:'Oswald', place:'Accounting', num:'22.22.22.22.22', mail:'fakebis@mail.fr', image:'/src/assets/team/Oswald.png'}]
      }
    }
}
</script>

<style>

</style>