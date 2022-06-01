<template>
    <div class="mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex justify-between items-end">
            <h1 class="font-smythe text-2xl">Modifier Latest</h1>
        </div>
        <form @submit.prevent="updateLatest">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="imageData" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Titre</div>
                        <input class="w-full" type="text" placeholder="Titre du latest" v-model="latest.titre" required>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Date</div>
                        <input class="w-full" type="date" placeholder="Date du Latest" v-model="latest.date" required>
                        
                        
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Type</div>
                        <input class="w-full" type="text" placeholder="Type du Latest" v-model="latest.type" required>
                    </div>
                    <div class="flex h-40 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Contenu</div>
                        <textarea class="w-full" type="text" placeholder="Contenu du Latest" v-model="latest.content" required></textarea>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Photo</div>
                        <div class="relative w-full">
                            <input type="file" class="w-full relative" ref="file" id="file" @change="previewImage">
                            <label class="absolute w-full left-0 top-0 bottom-0 bg-white flex justify-center items-center" for="file">Sélectionner l'image</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3" type="submit">Modifier</button>
                <button class="w-fit px-6 py-3" type="button"><RouterLink to="/GestionContact">Annuler</RouterLink></button>
            </div>
        </form>
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
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    deleteObject} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js'
export default {
    data(){
        return{
            imageData:null,    
            latest:{   
                date:null,   
                content:null,
                titre:null,
                type:null,
                img:null 
            },

            refLatest:null,     
            imgModifiee:false,       
            photoActuelle:null 
        }
    },
    mounted(){
        this.getLatest(this.$route.params.id);
    },
    methods:{
        previewImage: function(event){
          this.file = this.$refs.file.files[0];
          this.latest.img = this.file.name;
          this.imgModifiee = true;
          var input = event.target;
          if(input.files && input.files[0]){
              var reader = new FileReader();
              reader.onload = (e) => {
                  this.imageData = e.target.result;
              }
              reader.readAsDataURL(input.files[0]);
          }
      },

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
                this.imageData = url;
            })
            .catch((error) => {
                //console.log('erreur downloadurl', error);
            })
      },

      async updateLatest(){
          if(this.imgModifiee){
              const storage = getStorage();
              let docRef = ref(storage, 'latest/'+this.photoActuelle);
              deleteObject(docRef);
              docRef = ref(storage, 'latest/'+this.latest.img);
              await uploadString(docRef, this.imageData, 'data_url').then((snapshot) =>{
                  //console.log('Uploaded a base64 string', this.latest.img);
              });
          }
          const firestore = getFirestore();
          await updateDoc(doc(firestore, "latests", this.$route.params.id), this.latest);
          this.$router.push('/GestionLatest');
      }
    }

}
</script>

<style>

</style>