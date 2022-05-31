<template>
<header class="h-16 md:h-20 sticky flex items-center w-screen px-5 bg-gradient-to-t from-[#D6D6D6] xl:fixed xl:top-0 to-true-gray-25 z-40">
    <div class="flex w-full justify-between items-center">
        <MenuAlt1Icon class="h-8 w-8 xl:hidden" @click="MenuOpen=!MenuOpen" v-if="!MenuOpen"/>
        <XIcon class="h-8 w-8 absolute z-50 xl:hidden" @click="MenuOpen=!MenuOpen" v-if="MenuOpen"/>
        <logoPhone class="w-11 h-11 md:hidden"/>
        <LogoTablette class="h-16 w-16 hidden md:block xl:hidden"/>
        <LogoDesktop class="hidden xl:block h-16 w-32"/>
        <SearchIcon class="h-8 w-8"/>
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
        </ul>
    </nav>
</header>
<main class="-mt-16 pt-16 md:-mt-20 md:pt-20 xl:pt-40 pb-28 bg-true-gray-900 min-h-screen text-white relative -z-0 xl:w-[calc(100vw-15rem)] xl:left-60 xl:top">
    <RouterView/>
</main>

<footer class="bg-true-gray-900 flex flex-col w-full font-source-sans-pro relative xl:w-[calc(100vw-15rem)] xl:left-60 xl:top">
    <span class="w-10/12 h-[1px] bg-[#FAFAFA] mx-auto flex-none"></span>
    <div class="w-full flex justify-between px-7 py-5">
        <div class="flex flex-col">
            <p class="text-white font-semibold">Legal</p>
            <RouterLink to="/Mentions" class="text-true-gray-350 text-[10px]">Terms & conditions Privacy & cookie statement</RouterLink>
        </div>
        <div class="flex flex-col">
            <p class="text-white font-semibold">Social</p>
            <a href="" class="text-true-gray-350 text-[10px]">Youtube</a>
            <a href="" class="text-true-gray-350 text-[10px]">Twitter</a>
            <a href="" class="text-true-gray-350 text-[10px]">Facebook</a>
            <a href="" class="text-true-gray-350 text-[10px]">Instagram</a>
        </div>
        <div class="flex flex-col">
            <p class="text-white font-semibold">About</p>
            <a href="" class="text-true-gray-350 text-[10px]">Jobs</a>
            <a href="" class="text-true-gray-350 text-[10px]">Hardcore</a>
        </div>
    </div>
</footer>
</template>

<script>
import router from "./router"
import {MenuAlt1Icon, XIcon, SearchIcon, HomeIcon, NewspaperIcon, TicketIcon, UsersIcon, MailIcon} from "@heroicons/vue/outline"
import logoPhone from "./components/logo/logoPhone.vue"
import LogoTablette from "./components/logo/logoTablette.vue"
import LogoDesktop from "./components/logo/logoDesktop.vue"

export default {
    data(){
        return{
            MenuOpen:false,
        }
    },
    components:{ MenuAlt1Icon, XIcon, logoPhone, SearchIcon, LogoTablette, LogoDesktop, HomeIcon, NewspaperIcon, TicketIcon, UsersIcon, MailIcon},
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
</style>