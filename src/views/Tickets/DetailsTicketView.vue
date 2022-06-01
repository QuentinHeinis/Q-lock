<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Tickets</h1>
    <Container class="grid grid-cols-1 gap-3">
      <h2 class="font-smythe text-lg text-center">{{ticket.jour}}</h2>
      <div class="grid grid-cols-2">
        <img src="https://firebasestorage.googleapis.com/v0/b/sae203-cf3d4.appspot.com/o/Contenu%2F6a7a1bed8b03132ee272b531fa9b5241.jpg?alt=media&token=791ebf74-cea6-4f33-bf6d-cc2bbd1dfae9" alt="image" class="max-w-sm w-2/3 mx-auto">
        <div class="h-full flex flex-col justify-between">
            <div>
              <p>Ce Ticket vous donne accès :</p>
              <p class="pl-4">- L'attraction principale</p>
              <p class="pl-4">- La consommation( payante )</p>
              <p class="pl-4">- Les toilettes</p>
              <p>pour une personne uniquement et pendant le temps associer a ticket ( voir plus de details sur le ticket )</p>
            </div>
            <p class="font-smythe text-xl text-center">{{ticket.prix}} €</p>
            <SolidBtn><RouterLink to="/">Acheter</RouterLink></SolidBtn>
        </div>
      </div>
    </Container>
        <OutlineBtn class="mx-auto w-fit"><RouterLink to="/Tickets" >Retour</RouterLink></OutlineBtn>
  </div>
</template>

<script>
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
import Container from '../../components/Container.vue';
import OutlineBtn from '../../components/buttons/outlineBtn.vue';
import SolidBtn from '../../components/buttons/solidBtn.vue';
export default {
    components: { Container, OutlineBtn, SolidBtn },
    data(){
        return{
            ticket:{
              jour:null,
              prix:0
            }
        }
    },
    mounted(){
      this.getTickets(this.$route.params.id);
    },
    methods:{
      async getTickets(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "tickets", id);
          this.refTicket = await getDoc(docRef);
          if(this.refTicket.exists()){
              this.ticket = this.refTicket.data();
          }else{
              this.console.log("latest inexistant");
          }
        },
    }
}
</script>

<style>

</style>