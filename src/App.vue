<template>
<header class="h-16 md:h-20 sticky top-0 flex items-center w-screen px-5 bg-gradient-to-t from-[#D6D6D6] xl:fixed xl:top-0 to-true-gray-25 z-40">
    <div class="flex w-full justify-between items-center">
        <MenuAlt1Icon class="h-8 w-8 absolute xl:hidden" @click="MenuOpen=!MenuOpen" v-if="!MenuOpen"/>
        <XIcon class="h-8 w-8 absolute z-50 xl:hidden" @click="MenuOpen=!MenuOpen" v-if="MenuOpen"/>
        <logoPhone class="w-11 h-11 mx-auto md:hidden"/>
        <LogoTablette class="h-16 w-16 mx-auto hidden md:block xl:hidden"/>
        <LogoDesktop class="hidden xl:block h-16 w-32"/>
        <div class="hidden xl:flex items-center gap-4">
            <RouterLink to="/Login" class="flex"><SolidBtn class="flex"><UserCircleIcon class="h-5 w-5 mr-2"/> {{name}}</SolidBtn> </RouterLink>
            <ul v-if="isAdmin">
                <li class="relative px-4 py-2 bg-slate-500 rounded-sm flex items-center text-white administration">
                    administration <ChevronDownIcon class="ml-1 w-3 h-3"/>
                    <ul class="absolute">
                        <li><RouterLink to="/GestionTicket">gestion tickets</RouterLink></li>
                        <li><RouterLink to="/GestionArtiste">gestion artistes</RouterLink></li>
                        <li><RouterLink to="/GestionContact">gestion contacts</RouterLink></li>
                        <li><RouterLink to="/GestionLatest">gestion latests</RouterLink></li>
                    </ul>
                </li>                
            </ul>
        </div>
    </div>
    <nav class="h-screen absolute w-screen bg-true-gray-350 left-0 top-0 bottom-0 right-0 xl:top-20 -translate-x-full opacity-0 xl:h-[calc(100vh-80px)] xl:fixed xl:w-60 xl:translate-x-0 xl:opacity-100" :class="MenuOpen && 'translate-x-0 opacity-100'">
        
        <ul class="h-full flex flex-col gap-14 justify-center items-center font-poppins font-semibold xl:items-start xl:p-6 xl:justify-start">
            <li>
                <RouterLink to="/" @click="MenuOpen=!MenuOpen" class="flex"><HomeIcon class="h-5 w-5 mr-2"/> Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/Latest" @click="MenuOpen=!MenuOpen" class="flex"><NewspaperIcon class="h-5 w-5 mr-2"/> Latest update</RouterLink>
            </li>
            <li>
                <RouterLink to="/Tickets" @click="MenuOpen=!MenuOpen" class="flex"><TicketIcon class="h-5 w-5 mr-2"/> Tickets</RouterLink>
            </li>
            <li>
                <RouterLink to="/Artistes" @click="MenuOpen=!MenuOpen" class="flex"><UsersIcon class="h-5 w-5 mr-2"/> Line-up</RouterLink>
            </li>
            <li>
                <RouterLink to="/Contact" @click="MenuOpen=!MenuOpen" class="flex"><MailIcon class="h-5 w-5 mr-2"/> Contact</RouterLink>
            </li>
            <li class="xl:hidden">
                <RouterLink to="/Login" @click="MenuOpen=!MenuOpen" class="flex"><SolidBtn class="flex"><UserCircleIcon class="h-5 w-5 mr-2"/> {{name}}</SolidBtn> </RouterLink>
            </li>
            <li v-if="isAdmin" class="xl:hidden">
                <ul>
                    <li class="relative px-4 py-2 bg-slate-500 rounded-sm flex items-center text-white administration">
                        administration <ChevronDownIcon class="ml-1 w-3 h-3"/>
                        <ul class="absolute">
                            <li><RouterLink to="/GestionTicket">gestion tickets</RouterLink></li>
                            <li><RouterLink to="/GestionArtiste">gestion artistes</RouterLink></li>
                            <li><RouterLink to="/GestionContact">gestion contacts</RouterLink></li>
                            <li><RouterLink to="/GestionLatest">gestion latests</RouterLink></li>
                        </ul>
                    </li>                
                </ul>
            </li>
        </ul>
    </nav>
</header>
<main class="-mt-16 pt-16 md:-mt-20 md:pt-20 xl:pt-40 pb-28 bg-true-gray-900 min-h-screen text-white relative -z-0 xl:w-[calc(100vw-15rem)] xl:left-60 xl:top">
    <RouterView/>
</main>

<footer class="bg-true-gray-900 flex flex-col w-full font-source-sans-pro relative xl:w-[calc(100vw-15rem)] xl:left-60 xl:top">
    <span class="w-10/12 h-[1px] bg-[#FAFAFA] mx-auto flex-none"></span>
    <div class="w-full flex justify-between px-7 py-5 lg:justify-around">
        <div class="flex flex-col">
            <p class="text-white font-semibold">Legal</p>
            <RouterLink to="/Mentions" class="text-true-gray-350 text-sm">Terms & conditions Privacy & cookie statement</RouterLink>
        </div>
        <div class="flex flex-col">
            <p class="text-white font-semibold">Social</p>
            <a href="" class="text-true-gray-350 text-sm">Youtube</a>
            <a href="" class="text-true-gray-350 text-sm">Twitter</a>
            <a href="" class="text-true-gray-350 text-sm">Facebook</a>
            <a href="" class="text-true-gray-350 text-sm">Instagram</a>
        </div>
        <div class="flex flex-col">
            <p class="text-white font-semibold">About</p>
            <a href="" class="text-true-gray-350 text-sm">Jobs</a>
            <a href="" class="text-true-gray-350 text-sm">Hardcore</a>
        </div>
    </div>
</footer>
</template>

<script>
import router from "./router"
import {MenuAlt1Icon, XIcon, SearchIcon, HomeIcon, NewspaperIcon, TicketIcon, UsersIcon, MailIcon, UserCircleIcon, ChevronDownIcon} from "@heroicons/vue/outline"
import logoPhone from "./components/logo/logoPhone.vue"
import LogoTablette from "./components/logo/logoTablette.vue"
import LogoDesktop from "./components/logo/logoDesktop.vue"
import SolidBtn from "./components/buttons/solidBtn.vue"

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
import {
  getStorage,
  ref,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js'
import {
  getAuth,
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
import { emitter } from './main.js'

export default {
    data(){
        return{
            MenuOpen:false,
            user:{
                email:null,
                password:null
            },
            userInfo:null,
            name:"Account",
            avatar:null,
            isAdmin:false
        }
    },
    components:{ MenuAlt1Icon, XIcon, logoPhone, SearchIcon, LogoTablette, LogoDesktop, HomeIcon, NewspaperIcon, TicketIcon, UsersIcon, MailIcon, SolidBtn, UserCircleIcon, ChevronDownIcon },
    mounted(){
        this.getUserConnect();
    },
    methods:{
        async getUserConnect(){
        await getAuth().onAuthStateChanged(function(user){
            if(user){
            this.user = user;
            this.getUserInfo(this.user);
            }
        }.bind(this));


        emitter.on('connectUser', e =>{
        this.user = e.user;
        console.log('App => Reception user connecté', this.user);
        this.getUserInfo(this.user);
        })


        emitter.on('deConnectUser', e =>{
        this.user = e.user;
        console.log('App => Reception user deconnecté', this.user);
        this.userInfo = null,
        this.name = 'Account',
        this.avatar = null,
        this.isAdmin = false
        })
    },
    async getUserInfo(user){
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot)=>{
        this.userInfo = snapshot.docs.map(doc=>({
          id:doc.id, ...doc.data()
        }));
        console.log("userInfo", this.userInfo);
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
      });
    },
    },
}
</script>

<style>
@media (min-width : 1280px) {
    nav a.router-link-exact-active{
        color: black;
    }
    nav a.router-link-exact-active::after{
        content: "";
        height: 20px;
        width: 5px;
        background: red;
        position: absolute;
        left: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        box-shadow: 0px 0px 7px #FF0000;
    }
    nav a{
        color: #666666;
    }
}

.administration ul{
    display: none;
}
.administration li{
    background: gray;
    width: 100%;
    padding-top: 0.5rem;
    text-align: center;
    padding-bottom: 0.5rem;
}
.administration li:hover{
    background: rgb(107, 107, 107);
}
.administration:hover ul{
    display: flex;
    flex-direction: column;
    width: 100%;
    left: 0;
    top: 100%;
}

</style>