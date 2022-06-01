<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">{{artiste.nom  }}</h1>
    <Container class="flex flex-col gap-3">
      <img :src="artiste.img" alt="" class="max-w-sm w-2/3 mx-auto">
      <p>{{artiste.desc}}</p>
    </Container>

    <OutlineBtn class="w-fit mx-auto"><RouterLink to="/Artistes">Retour</RouterLink></OutlineBtn>
  </div>
</template>

<script>
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    getDoc,
    
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'


// Cloud Storage : import des fonctions
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    deleteObject,
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js'
import Container from '../../components/Container.vue';
import OutlineBtn from '../../components/buttons/outlineBtn.vue';
export default {
    data(){
      return{
        artiste:{
            nom:null,
            desc:null,
            img:null,
        },
        refArtist:null,
      }
    },
    components: { Container, OutlineBtn },
    props:{
      description:{ type:String,
        default:"Korsakoff, de son vrai nom Lindsay van der Eng, née le 25 juillet 1983, est une productrice et disc jockey de techno hardcore et gabber néerlandaise. Elle est l'une des productrices les plus reconnues de la scène gabber mixant dans les soirées les plus prestigieuses, en particulier Masters of Hardcore1. La plupart de ses titres et albums ont atteint les classements internationaux. "
      },
    },
    mounted(){
      this.getArtiste(this.$route.params.id);
    },
    methods:{
      async getArtiste(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artistes", id);
          this.refArtist = await getDoc(docRef);
          if(this.refArtist.exists()){
              this.artiste = this.refArtist.data();
              this.photoActuelle = this.artiste.img;
          }else{
              this.console.log("artiste inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'artiste/'+this.artiste.img);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.artiste.img = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },
    }
}
</script>

<style>

</style>