<template>
    <div class="mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex flex-col gap-8">
            <h1 class="font-smythe text-2xl">Delete Artiste</h1>
            <p class="w-full text-center py-3 bg-yellow-50 text-black rounded-sm">Attention vous allez supprimer ce participant, cette action est irréversible !!</p>
        </div>
        <form @submit.prevent="deleteArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="photoActuelle" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full" type="text" placeholder="Nom de l'artiste" v-model="artiste.nom" disabled>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Date</div>
                        <select class="w-full bg-white" id="date" v-model="artiste.jour" disabled>
                        <option selected disabled>Sélectionner un Jour</option>
                            <option v-for="date in listeDate" :key="date">{{date}}</option>
                        </select>
                    </div>
                    <div class="flex h-64 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Description</div>
                        <textarea class="w-full h-full" type="text" placeholder="Description de l'artiste" v-model="artiste.desc" disabled></textarea>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3" type="submit">Supprimer</button>
                <button class="w-fit px-6 py-3" type="button"><RouterLink to="/GestionArtiste">Annuler</RouterLink></button>
            </div>
        </form>
    </div>
</template>

<script>
import { 
    getFirestore,
    doc, 
    getDoc,
    deleteDoc
    } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    deleteObject} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js'
export default {
    data(){
        return{
            listeDate:["Thursday", "Friday", "Satursday", "Sunday"],     
            artiste:{   
                nom:null,   
                desc:null,
                jour:null,
                img:null, 
            },

            refArtiste:null,      
            photoActuelle:null 
        }
    },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{

      async getArtiste(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artistes", id);
          this.refArtiste = await getDoc(docRef);
          if(this.refArtiste.exists()){
              this.artiste = this.refArtiste.data();
              this.photoActuelle = this.artiste.img;
          }else{
              //this.console.log("artiste inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'artiste/'+this.artiste.img);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.photoActuelle = url;
            })
            .catch((error) => {
                //console.log('erreur downloadurl', error);
            })
      },

      async deleteArtiste(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'artiste/'+this.artiste.img);
            deleteObject(docRef);
            this.$router.push('/GestionArtiste');       
        }
    }

}
</script>

<style>

</style>