<template>
    <div class="mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex justify-between items-end">
            <h1 class="font-smythe text-2xl">Modifier Latest</h1>
        </div>
        <form @submit.prevent="deleteLatest">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="photoActuelle" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Titre</div>
                        <input class="w-full" type="text" placeholder="Titre du latest" v-model="latest.titre" disabled>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Date</div>
                        <input class="w-full" type="date" placeholder="Date du Latest" v-model="latest.date" disabled>
                        
                        
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Type</div>
                        <input class="w-full" type="text" placeholder="Type du Latest" v-model="latest.type" disabled>
                    </div>
                    <div class="flex h-40 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Contenu</div>
                        <textarea class="w-full" type="text" placeholder="Contenu du Latest" v-model="latest.content" disabled></textarea>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3" type="submit">Supprimer</button>
                <button class="w-fit px-6 py-3" type="button"><RouterLink to="/GestionContact">Annuler</RouterLink></button>
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
            latest:{   
                date:null,   
                content:null,
                titre:null,
                type:null,
                img:null 
            },
            refContact:null,      
            photoActuelle:null 
        }
    },
    mounted(){
        this.getLatest(this.$route.params.id);
    },
    methods:{

      async getLatest(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "latests", id);
          this.refLatest = await getDoc(docRef);
          if(this.refLatest.exists()){
              this.latest = this.refLatest.data();
              this.photoActuelle = this.latest.img;
          }else{
              //this.console.log("latest inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'latest/'+this.latest.img);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.photoActuelle = url;
            })
            .catch((error) => {
                //console.log('erreur downloadurl', error);
            })
      },

      async deleteLatest(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "latests", this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'latest/'+this.latest.img);
            deleteObject(docRef);
            this.$router.push('/GestionLatest');       
        }
    }

}
</script>

<style>

</style>