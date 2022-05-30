<template>
<header class="h-16 sticky flex items-center w-screen px-5 bg-gradient-to-t from-[#DEDEDE09] to-true-gray-25 z-40">
    <div class="flex w-full justify-between">
        <MenuAlt1Icon class="h-8 w-8" @click="MenuOpen=!MenuOpen" v-if="!MenuOpen"/>
        <XIcon class="h-8 w-8 absolute z-50" @click="MenuOpen=!MenuOpen" v-if="MenuOpen"/>
        <Logo class="w-11 h-11"/>
        <SearchIcon class="h-8 w-8"/>
    </div>
    <nav class="h-screen absolute w-screen bg-true-gray-350 left-0 top-0 -translate-x-full opacity-0" :class="MenuOpen && 'translate-x-0 opacity-100'">
        
        <ul class="h-full flex flex-col gap-14 justify-center items-center">
            <li>
                <RouterLink to="/" @click="MenuOpen=!MenuOpen">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/Latest" @click="MenuOpen=!MenuOpen">Latest update</RouterLink>
            </li>
            <li>
                <RouterLink to="/Tickets" @click="MenuOpen=!MenuOpen">Tickets</RouterLink>
            </li>
            <li>
                <RouterLink to="/Artistes" @click="MenuOpen=!MenuOpen">Line-up</RouterLink>
            </li>
            <li>
                <RouterLink to="/Contact" @click="MenuOpen=!MenuOpen">Contact</RouterLink>
            </li>
        </ul>
    </nav>
</header>
<main class="-mt-16 pb-28 pt-16 bg-true-gray-900 min-h-screen text-white relative -z-0">
    <RouterView/>
</main>

<footer class="bg-true-gray-900 flex flex-col w-full font-source-sans-pro">
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
import {MenuAlt1Icon, XIcon, SearchIcon} from "@heroicons/vue/outline"
import Logo from "./components/logo.vue"

export default {
    data(){
        return{
            MenuOpen:false,
        }
    },
    components:{ MenuAlt1Icon, XIcon, Logo, SearchIcon },
}

</script>
