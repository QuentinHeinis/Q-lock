<template>
    <div class="mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex justify-between items-end">
            <h1 class="font-smythe text-2xl">Update Artiste</h1>
        </div>
        <form @submit.prevent="updateArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="imageData" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full" type="text" placeholder="Nom de l'artiste" v-model="artiste.nom" required>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Date</div>
                        <select class="w-full bg-white" id="date" v-model="artiste.jour" required>
                        <option selected disabled>Sélectionner un Jour</option>
                            <option v-for="date in listeDate" :key="date">{{date}}</option>
                        </select>
                        
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Photo</div>
                        <div class="relative w-full">
                            <input type="file" class="w-full relative" ref="file" id="file" @change="previewImage">
                            <label class="absolute w-full left-0 top-0 bottom-0 bg-white flex justify-center items-center" for="file">Sélectionner l'image</label>
                        </div>
                    </div>
                    <div class="flex h-64 text-black rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Description</div>
                        <textarea class="w-full h-full" type="text" placeholder="Description de l'artiste" v-model="artiste.desc" required></textarea>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3" type="submit">Modifier</button>
                <button class="w-fit px-6 py-3" type="button"><RouterLink to="/GestionArtiste">Annuler</RouterLink></button>
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
            listeDate:["Thursday", "Friday", "Satursday", "Sunday"],     
            artiste:{   
                nom:null,   
                desc:null,
                jour:null,
                img:null, 
            },

            refArtiste:null,     
            imgModifiee:false,       
            photoActuelle:null 
        }
    },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{
        previewImage: function(event){
          this.file = this.$refs.file.files[0];
          this.artiste.img = this.file.name;
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

      async getArtiste(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artistes", id);
          this.refArtiste = await getDoc(docRef);
          if(this.refArtiste.exists()){
              this.artiste = this.refArtiste.data();
              this.photoActuelle = this.artiste.img;
          }else{
              this.console.log("artiste inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'artiste/'+this.artiste.img);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.imageData = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },

      async updateArtiste(){
          if(this.imgModifiee){
              const storage = getStorage();
              let docRef = ref(storage, 'artiste/'+this.photoActuelle);
              deleteObject(docRef);
              docRef = ref(storage, 'artiste/'+this.artiste.img);
              await uploadString(docRef, this.imageData, 'data_url').then((snapshot) =>{
                  console.log('Uploaded a base64 string', this.artiste.img);
              });
          }
          const firestore = getFirestore();
          await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.artiste);
          this.$router.push('/GestionArtiste');
      }
    }

}
</script>

<style>

</style>