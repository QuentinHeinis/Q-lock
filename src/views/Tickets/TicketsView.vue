<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Upcomming events</h1>
    <Container class="flex flex-col gap-3">
      <h2 class="font-smythe text-xl">Tickets</h2>
      <div class="grid md:grid-cols-2 gap-3">
        <LinkCards v-for="tick in ListeOffer" :key="tick.id" :text="tick.jour + ' - ' + tick.prix + ' €' " :image="'https://firebasestorage.googleapis.com/v0/b/sae203-cf3d4.appspot.com/o/Contenu%2FTicket.png?alt=media&token=59e29ea7-2dd7-4e18-92ef-5f491cae0844'" :chemin="{name: 'DetailsTicket', params:{id:tick.id}}" :alt="'Image du ticket'"></LinkCards>
      </div>
    </Container>
    <Background></Background>
  </div>
</template>

<script>
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

import Container from '../../components/Container.vue';
import LinkCards from '../../components/cards/LinkCards.vue';
import Background from '../../components/background.vue';
export default {
    components: { Container, LinkCards, Background },
    data(){
      return{
        ListeOffer:[]
      }
    },
    mounted(){
      this.getTickets();
    },
    methods:{
      async getTickets(){
            const firestore = getFirestore();
            const dbTicket = collection(firestore, "tickets");
            const query = await onSnapshot(dbTicket, (snapshot) =>{
                this.ListeOffer = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
            })
        },
    }
}
</script>

<style>

</style>