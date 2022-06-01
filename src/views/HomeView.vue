<template>
  <div class="relative h-[660px] -z-10">
    <div class="absolute top-0 left-0 right-0 bottom-0 imgGradient">
      <img src="../assets/maxresdefault.png" alt="" class="object-cover w-full h-full">
    </div>
  </div>
  <div class="xl:flex xl:pr-[3%] xl:justify-between xl: w-full">
    <div class="-mt-72 px-6 mb-6 xl:w-[30%] xl:-mt-72">
      <h1 class="font-smythe text-2xl mb-5">Q-lock 2022</h1>
      <RouterLink to="/Tickets" class="mr-3"><solidBtn>Tickets</solidBtn></RouterLink>
      <RouterLink to="/Tickets"><outlineBtn>Line-up</outlineBtn></RouterLink>
    </div>
    <Container class="gap-[10px] flex flex-col xl:max-w-[70%] xl:w-[480px] xl:-mt-[30rem] xl:mx-0">
      <h2 class="font-smythe text-xl">Latest updates</h2>
      <UpdateNewsCard v-for="latest in ListeLatest" :key="latest" :img="latest.img" :type="latest.type" :Title="latest.titre"></UpdateNewsCard>
    </Container>
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
import solidBtn from '../components/buttons/solidBtn.vue'
import outlineBtn from '../components/buttons/outlineBtn.vue'
import Container from '../components/Container.vue'
import UpdateNewsCard from '../components/cards/updateNewsCard.vue'
export default {
  components:{ solidBtn, outlineBtn, Container, UpdateNewsCard },
  data(){
        return{
            ListeLatest:[],
            query:'',
        }
    },
    mounted(){
      this.getLatest();
    },
    methods:{
      async getLatest(){
        const firestore = getFirestore();
          const dbArt = collection(firestore, "latests");
          const q = query(dbArt, orderBy('date', 'desc'));
          await onSnapshot(q, (snapshot) =>{
              this.ListeLatest = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          this.ListeLatest.forEach(function(personne){
              const storage = getStorage();
              const spaceRef = ref(storage, 'latest/'+personne.img);
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
    },
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