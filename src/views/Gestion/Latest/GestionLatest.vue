<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
      <div class="flex justify-between items-end">
        <h1 class="font-smythe text-2xl">Liste contact</h1>
        <RouterLink to="/CreateLatest"><PlusCircleIcon class="w-8 h-8 cursor-pointer"/></RouterLink>
      </div>
      <div class="block overflow-x-auto w-full">
          <div class="relative float-right w-1/3">
              <input type="search" class="w-full rounded-sm h-10 text-black px-4" placeholder="Recherche [par type]" v-model="query">
              <SearchIcon class="w-5 h-full stroke-black top-0 right-4 absolute"/>
          </div>
          <table class="w-full">
            <thead>
                <tr class="border-b-2">
                    <th class="w-64 p-3">Image</th>
                    <th class="w">Date</th>
                    <th class="w">Titre</th>
                    <th class="">Type</th>
                    <th class="">Contenu</th>
                    <th class="w-1/12">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="content in searchByName" :key="content.id" class="mt-2">
                    <td class=""><img :src="content.img" :alt="content.titre" class="w-full h-auto"></td>
                    <td class="text-center px-2">{{content.date}}</td>
                    <td class="text-center px-2">{{content.titre}}</td>
                    <td class="text-center px-2">{{content.type}}</td>
                    <td class="text-center px-2">{{content.content}}</td>
                    <td class="text-center px-2">
                    <RouterLink :to="{ name:'DeleteLatest', params: { id: content.id }}"><XIcon class="w-6 h-6 inline-block cursor-pointer"/></RouterLink>
                    <RouterLink :to="{ name:'UpdateLatest', params: { id: content.id }}"><PencilAltIcon class="w-6 h-6 inline-block cursor-pointer"/></RouterLink>
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
                  console.log('erreur download url', error);
              })
          })
          
          })
      },
    },
    computed:{
        searchByName(){
            let query = this.query;
                return this.ListeLatest.filter(function(content){
                    return content.type.includes(query);
            })    
        },
    }
}
</script>

<style>

</style>