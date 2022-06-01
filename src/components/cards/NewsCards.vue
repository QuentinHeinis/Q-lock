<template>
    <Container class="specialcontainer">
        <div class="min-h-[96px] w-full color rounded-t-default flex overflow-hidden font-source-sans-pro">
            <div class="flex-none w-[40%] max-w-[150px]">
                <img :src="img" :alt="titre" class="object-cover w-full h-full">
            </div>
            <div class="px-3 w-full">
                <p class="text-[10px] px-3 w-fit mx-auto mt-1 bg-slate-600 rounded-xl uppercase">{{type}}</p>
                <h4 class="text-black text-[20px]">{{titre}}</h4>
            </div>
        </div>
       <div class="py-10 px-6 font-source-sans-pro text-sm font-normal">
            <p>{{content}}</p>
       </div>
    </Container>
</template>

<script>
import Container from '../Container.vue';
export default {
    components: { Container },
    props:{
        content:{type:String,default:'Contenu de la news'},
        titre:{type:String,default:'Titre de la news'},
        type:{type:String,default:'News'},
        img:{type:String},
    },
}
</script>

<style>
.specialcontainer{
    @apply p-0 !important;
}

</style>