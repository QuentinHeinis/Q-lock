<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Contact</h1>
    <Container class="flex flex-col gap-3">
      <h2 class="font-smythe text-xl">The Team</h2>
      <Teamcards v-for="member in listeTeam" :key="member" :image="member.img" :mail="member.mail" :Nom="member.nom" :num="member.num" :Place="member.poste"></Teamcards>
    </Container>
    <Background></Background>
  </div>
</template>

<script>
import {
    getFirestore,
    collection,
    doc,
    query,
    orderBy,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js'
import Container from '../components/Container.vue';
import Teamcards from '../components/cards/Teamcards.vue';
import Background from '../components/background.vue';
export default {
    components: { Container, Teamcards, Background },
    data(){
      return{
        listeTeam:[]
      }
    },
    mounted(){
      this.getTeam();
    },
    methods:{
      async getTeam(){
        const firestore = getFirestore();
          const dbArt = collection(firestore, "team");
          const q = query(dbArt, orderBy('nom', 'asc'));
          await onSnapshot(q, (snapshot) =>{
              this.listeTeam = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          this.listeTeam.forEach(function(personne){
              const storage = getStorage();
              const spaceRef = ref(storage, 'team/'+personne.img);
              getDownloadURL(spaceRef)
              .then((url) =>{
                  personne.img = url;
              })
              .catch((error) =>{
                  //console.log('erreur download url', error);
              })
          })
          
          })
      },
    }
}
</script>

<style>

</style>