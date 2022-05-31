<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Line-up</h1>
    <ul class="flex justify-between font-smythe text-xl  underline-offset-4">
      <li><button @click="Thursday = true, Friday = false, Saturday = false, Sunday = false" :class="Thursday && 'underline'">Thursday</button></li>
      <li><button @click="Thursday = false, Friday = true, Saturday = false, Sunday = false" :class="Friday && 'underline'">Friday</button></li>
      <li><button @click="Thursday = false, Friday = false, Saturday = true, Sunday = false" :class="Saturday && 'underline'">Saturday</button></li>
      <li><button @click="Thursday = false, Friday = false, Saturday = false, Sunday = true" :class="Sunday && 'underline'">Sunday</button></li>
    </ul>

    <div class="flex flex-col gap-3" v-if="Thursday">
      <LinkCards v-for="nom in ListeArtiste" :key="nom" class="h-16" :image="'/src/assets/Image2.png'" :text="nom"></LinkCards>
    </div>
    <div class="flex flex-col gap-3" v-if="Friday">
      <LinkCards v-for="nom in ListeArtiste" :key="nom" class="h-16" :image="'/src/assets/image1.png'" :text="nom"></LinkCards>
    </div>
    <div class="flex flex-col gap-3" v-if="Saturday">
      <LinkCards v-for="nom in ListeArtiste" :key="nom" class="h-16" :image="'/src/assets/Ticket.png'" :text="nom"></LinkCards>
    </div>
    <div class="flex flex-col gap-3" v-if="Sunday">
      <LinkCards v-for="nom in ListeArtiste" :key="nom" class="h-16" :image="'/src/assets/maxresdefault.png'" :text="nom"></LinkCards>
    </div>
    <Background></Background>
  </div>
</template>

<script>
import LinkCards from '../../components/cards/LinkCards.vue';
import Background from '../../components/background.vue';
export default {
    components: { LinkCards, Background },
    data(){
      return{
        ListeArtiste:['AVI8','Hollow Point', 'Jones', 'Lost Identity'],
        Thursday:true,
        Friday:false,
        Saturday:false,
        Sunday:false
      }
    }
}
</script>

<style>

</style>