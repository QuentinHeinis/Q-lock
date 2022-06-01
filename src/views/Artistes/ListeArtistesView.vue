<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Line-up</h1>
    <ul class="flex justify-between font-smythe text-xl  underline-offset-4">
      <li><button @click="Thursday = true, Friday = false, Saturday = false, Sunday = false, query='Thursday'" :class="Thursday && 'underline'">Thursday</button></li>
      <li><button @click="Thursday = false, Friday = true, Saturday = false, Sunday = false, query='Friday'" :class="Friday && 'underline'">Friday</button></li>
      <li><button @click="Thursday = false, Friday = false, Saturday = true, Sunday = false, query='Satursday'" :class="Saturday && 'underline'">Saturday</button></li>
      <li><button @click="Thursday = false, Friday = false, Saturday = false, Sunday = true, query='Sunday'" :class="Sunday && 'underline'">Sunday</button></li>
    </ul>



    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" v-if="Thursday">
      <LinkCards v-for="art in searchByDay" :key="art.id" class="h-16" :image="art.img" :text="art.nom" :chemin="{name: 'Artiste', params:{id:art.id}}" :alt="art.nom"></LinkCards>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" v-if="Friday">
      <LinkCards v-for="art in searchByDay" :key="art.id" class="h-16" :image="art.img" :text="art.nom" :chemin="{name: 'Artiste', params:{id:art.id}}" :alt="art.nom"></LinkCards>    
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" v-if="Saturday">
      <LinkCards v-for="art in searchByDay" :key="art.id" class="h-16" :image="art.img" :text="art.nom" :chemin="{name: 'Artiste', params:{id:art.id}}" :alt="art.nom"></LinkCards>    
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" v-if="Sunday">
      <LinkCards v-for="art in searchByDay" :key="art.id" class="h-16" :image="art.img" :text="art.nom" :chemin="{name: 'Artiste', params:{id:art.id}}" :alt="art.nom"></LinkCards>    
    </div>
    
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

import LinkCards from '../../components/cards/LinkCards.vue';
import Background from '../../components/background.vue';
import { ArrowCircleRightIcon } from '@heroicons/vue/outline';
export default {
    components: { LinkCards, Background, ArrowCircleRightIcon },
    data(){
      return{
        ListeArtiste:[],
        Thursday:true,
        Friday:false,
        Saturday:false,
        Sunday:false,
        query:'Thursday',
      }
    },
    mounted(){
      this.getArtiste();
    },
    methods:{
      async getArtiste(){
        const firestore = getFirestore();
          const dbArt = collection(firestore, "artistes");
          const q = query(dbArt, orderBy('nom', 'asc'));
          await onSnapshot(q, (snapshot) =>{
              this.ListeArtiste = snapshot.docs.map(doc =>({
                  id:doc.id, ...doc.data()
              }))
          this.ListeArtiste.forEach(function(personne){
              const storage = getStorage();
              const spaceRef = ref(storage, 'artiste/'+personne.img);
              getDownloadURL(spaceRef)
              .then((url) =>{
                  personne.img = url;
              })
              .catch((error) =>{
                  console.log('erreur download url', error);
              })
          })
          })
      }
    },
    computed:{
      searchByDay(){
        let query = this.query;
          return this.ListeArtiste.filter(function(art){
              return art.jour.includes(query);
        })    
      }

      
    },
    
}
</script>

<style>

</style>