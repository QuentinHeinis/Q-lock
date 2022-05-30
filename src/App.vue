<template>
<header class="h-16 sticky flex items-center w-screen px-5 bg-gradient-to-t from-[#DEDEDE09] to-true-gray-25 z-40">
    <div class="flex w-full justify-between">
        <MenuAlt1Icon class="h-8 w-8" @click="MenuOpen=!MenuOpen" v-if="!MenuOpen"/>
        <XIcon class="h-8 w-8 absolute z-50" @click="MenuOpen=!MenuOpen" v-if="MenuOpen"/>
        <MenuAlt1Icon class="h-8 w-8 stroke-white"/>
        <MenuAlt1Icon class="h-8 w-8 stroke-white"/>
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
                <RouterLink to="/Artistes" @click="MenuOpen=!MenuOpen">Artistes</RouterLink>
            </li>
            <li>
                <RouterLink to="/Contact" @click="MenuOpen=!MenuOpen">Contact</RouterLink>
            </li>
        </ul>
    </nav>
</header>
<main class="-mt-16 pt-16 bg-true-gray-900 min-h-screen text-white relative -z-0">
    <RouterView/>
</main>
</template>

<script>
import router from "./router"
import {MenuAlt1Icon, XIcon} from "@heroicons/vue/outline"

export default {
    data(){
        return{
            MenuOpen:false,
        }
    },
    components:{MenuAlt1Icon, XIcon},
}

</script>
