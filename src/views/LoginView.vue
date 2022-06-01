<template>
    <div class="mt-12 px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 relative ">
        <div>
            <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1" @submit.prevent="onCnx">
            <fieldset class="contents">
              <legend class="my-1 border-b-2 col-span-full">Se connecter</legend>
              <label for="code-postal">Email :</label>
              <input type="email" class="rounded-sm border-2 text-black" name="email" id="email" v-model="user.email" required>
              <label for="ville">Password : </label>
              <input class="rounded-sm border-2 text-black" name="password" id="password" type="password" v-model="user.password" required/>
              
                  <button type="submit">Se Connecter</button>
                  <button type="button" @click="onDcnx()">Se Déconnecter</button>
              
              
            </fieldset>
          </form>
          <p class="w-full text-center py-3 bg-yellow-100 rounded-sm mt-5 text-black">{{message}}</p>
        </div>
        <div>
            <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1">
                <fieldset class="contents">
                    <legend class="my-1 border-b-2 col-span-full">Créer un compte</legend>
                    <label for="code-postal">Login :</label>
                    <input type="text" class="rounded-sm border-2 text-black" name="login" id="login">
                    <label for="code-postal">Email :</label>
                    <input type="email" class="rounded-sm border-2 text-black" name="email" id="email">
                    <label for="ville">Password : </label>
                    <input class="rounded-sm border-2 text-black" name="password" id="password" type="password" />
                    <button type="button" >Créer</button>     
                </fieldset>
            </form>
            
        </div>
    </div>
</template>

<script>
import {emitter} from '../main.js'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
export default {
    data(){
        return{
            user:{
                email:'',
                password:''
            },
            message:'bonjour',
            type:'password'
        }
    },
    mounted(){
        this.message = "User non connecté";
    },
    methods:{
        onCnx(){
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response) =>{
                this.user = response.user;
                console.log("user", this.user);
                emitter.emit('connectUser', {user: this.user});
                this.message = "user connecté : " + this.user.email;
            })
            .catch((error)=>{
                console.log('erreur connexion', error);
                this.message = "erreur d'authentification";
            })
        },
        onDcnx(){
            signOut(getAuth())
            .then(response =>{
                this.message = "User non connecté";
                this.user = {
                    email:null,
                    password:null
                };
                emitter.emit('deConnectUser', {user:this.user});
            })
            .catch(error=>{
                console.log('erreur deconnexion', error);
            })
        },
    },
}
</script>

<style>

</style>