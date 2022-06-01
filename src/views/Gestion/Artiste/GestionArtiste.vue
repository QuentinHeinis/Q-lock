<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
      <div class="flex justify-between items-end">
        <h1 class="font-smythe text-2xl">Liste artiste</h1>
        <RouterLink to="/CreateArtiste"><PlusCircleIcon class="w-8 h-8 cursor-pointer"/></RouterLink>
      </div>
      <div class="block overflow-x-auto w-full">
          <div class="relative float-right w-1/3">
              <input type="search" class="w-full rounded-sm h-10 text-black px-4" placeholder="Recherche [par nom]" v-model="query">
              <SearchIcon class="w-5 h-full stroke-black top-0 right-4 absolute"/>
          </div>
          <div class="relative float-right w-1/3 mr-3">
              <input type="search" class="w-full rounded-sm h-10 text-black px-4" list="jours" placeholder="Recherche [par jour]" v-model="qday">
                <datalist id="jours">
                    <option value="Thursday"></option>
                    <option value="Friday"></option>
                    <option value="Satursday"></option>
                    <option value="Sunday"></option>
                </datalist>
              <SearchIcon class="w-5 h-full stroke-black top-0 right-4 absolute"/>
          </div>
          <table class="w-full">
            <thead>
                <tr class="border-b-2">
                    <th class="w-64 p-3">Image</th>
                    <th class="w-1/5 ">Nom</th>
                    <th class="w-1/12 ">Jour</th>
                    <th class="">Description</th>
                    <th class="w-1/12">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="art in searchByDay" :key="art.id" class="mt-2">
                    <td class=""><img :src="art.img" :alt="art.nom" class="w-full h-auto"></td>
                    <td class="text-center">{{art.nom}}</td>
                    <td class="text-center">{{art.jour}}</td>
                    <td class="">{{art.desc}}</td>
                    <td class="text-center">
                    <RouterLink :to="{ name:'DeleteArtiste', params: { id: art.id }}"><XIcon class="w-6 h-6 inline-block cursor-pointer"/></RouterLink>
                    <RouterLink :to="{ name:'UpdateArtiste', params: { id: art.id }}"><PencilAltIcon class="w-6 h-6 inline-block cursor-pointer"/></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
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

import { XIcon, PencilAltIcon, PlusCircleIcon, SearchIcon } from '@heroicons/vue/outline'
export default {
    components:{XIcon, PencilAltIcon, PlusCircleIcon, SearchIcon},
    data(){
        return{
            ListeArtiste:[],
            query:'',
            qday:'',
        }
    },
    mounted(){
      this.getArtiste();
    },
    updated(){
        
      console.log(this.ListeArtiste);
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
      },
    },
    computed:{
        searchByName(){
            let query = this.query;
                return this.ListeArtiste.filter(function(art){
                    return art.nom.includes(query);
            })    
        },
        searchByDay(){
            let qday = this.qday;
            return this.searchByName.filter(function(art){
                return art.jour.includes(qday);   
            })  
        }
    }
}
</script>

<style>

</style>