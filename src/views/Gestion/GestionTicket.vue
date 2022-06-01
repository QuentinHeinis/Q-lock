<template>
  <div class="mt-12 px-5 flex flex-col gap-10 relative">
      <h1 class="font-smythe text-2xl">Liste tickets</h1>
    <div class="grid grid-cols-1 gap-2">
        <h2 class="w-4/5 m-auto text-base font-source-sans-pro">Créer tickets</h2>
        <div class="grid grid-cols-2 mx-auto w-4/5">
            <div class="flex h-10 text-black rounded-l-sm overflow-hidden">
                <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Nom</div>
                <input class="w-full" type="text" placeholder="Nom du ticket" v-model="jour"  required>
            </div>
            <div class="flex w-1/2 h-10 text-black rounded-r-sm overflow-hidden">
                <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Prix</div>
                <input class="w-full" type="number" placeholder="Prix du ticket" v-model="prix"  required>
                <div class="flex w-fit bg-white px-3 gap-3">
                    <button type="button" @click.prevent="createTick()"><SaveIcon class="w-7"/></button>
                </div>
            </div>
        </div>
        <h3 class="w-4/5 m-auto text-base font-source-sans-pro">Liste des tickets</h3>
        <div class="grid grid-cols-2 mx-auto w-4/5" v-for="ticket in listeTicket" :key="ticket">
            <div class="flex h-10 text-black rounded-l-sm overflow-hidden">
                <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Nom</div>
                <input class="w-full" type="text" placeholder="Nom du ticket" v-model="ticket.jour"  required>
            </div>
            <div class="flex w-1/2 h-10 text-black rounded-r-sm overflow-hidden">
                <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Prix</div>
                <input class="w-full" type="number" placeholder="Prix du ticket" v-model="ticket.prix"  required>
                <div class="flex w-fit bg-white px-3 gap-3">
                    <button type="button" @click.prevent="updateTick(ticket)"><SaveIcon class="w-7"/></button>
                    <button type="button" @click.prevent="deleteTick(ticket)"><XIcon class="w-7" /></button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

import { SaveIcon, XIcon } from '@heroicons/vue/outline';
export default {
    data(){
        return{
            listeTicket:[],
            jour:null,
            prix:0
        }
    },
    components:{SaveIcon, XIcon},
    mounted(){
        this.getTickets();
    },
    methods:{
        async getTickets(){
            const firestore = getFirestore();
            const dbTicket = collection(firestore, "tickets");
            const query = await onSnapshot(dbTicket, (snapshot) =>{
                this.listeTicket = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
            })
        },
        async createTick(){
            const firestore = getFirestore();
            const dbTick = collection(firestore, "tickets");
            const docRef = await addDoc(dbTick,{
                jour: this.jour,
                prix: this.prix
            })
            //console.log('document créé avec le id : ', docRef.id);
        },
        async updateTick(tick){
            const firestore = getFirestore();
            const docRef = doc(firestore, "tickets", tick.id);
            await updateDoc(docRef, {
                jour: tick.jour,
                prix: tick.prix
            })
        },
        async deleteTick(tick){
            const firestore = getFirestore();
            const docRef = doc(firestore, "tickets", tick.id);
            await deleteDoc(docRef);
        },
    }
}
</script>

<style>

</style>