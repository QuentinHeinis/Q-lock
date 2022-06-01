<template>
    <div class="mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex flex-col gap-8">
            <h1 class="font-smythe text-2xl">Delete Contact</h1>
            <p class="w-full text-center py-3 bg-yellow-50 text-black rounded-sm">Attention vous allez supprimer ce contact, cette action est irréversible !!</p>
        </div>
        <form @submit.prevent="deleteContact">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="photoActuelle" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full" type="text" placeholder="Nom du contact" v-model="contact.nom" disabled>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Poste</div>
                        <input class="w-full" type="text" placeholder="Poste du contact" v-model="contact.poste" disabled>
                        
                        
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Mail</div>
                        <input class="w-full" type="text" placeholder="Mail du contact" v-model="contact.mail" disabled>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Numéro</div>
                        <input class="w-full" type="text" placeholder="Numéro du Contact" v-model="contact.num" disabled>
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
            contact:{   
                nom:null,   
                poste:null,
                mail:null,
                num:null,
                img:null 
            },
            refContact:null,      
            photoActuelle:null 
        }
    },
    mounted(){
        this.getContact(this.$route.params.id);
    },
    methods:{

      async getContact(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "team", id);
          this.refContact = await getDoc(docRef);
          if(this.refContact.exists()){
              this.contact = this.refContact.data();
              this.photoActuelle = this.contact.img;
          }else{
              //this.console.log("contact inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'team/'+this.contact.img);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.photoActuelle = url;
            })
            .catch((error) => {
                //console.log('erreur downloadurl', error);
            })
      },

      async deleteContact(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "team", this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'team/'+this.contact.img);
            deleteObject(docRef);
            this.$router.push('/GestionContact');       
        }
    }

}
</script>

<style>

</style>