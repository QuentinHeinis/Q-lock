<template>
  <h1 class="mt-4 bg-yellow-500 text-center text-2xl text-white">Style guide</h1>
  <p class="mx-5 mt-2 text-base text-black">Main color</p>
  <div class="flex gap-2 px-10 items-center">
    <MainColor class="Color-Extra"></MainColor>
    <MainColor class="bg-true-gray-25"></MainColor>
    <MainColor class="bg-true-gray-350"></MainColor>
    <MainColor class="bg-true-gray-550"></MainColor>
    <MainColor class="bg-true-gray-900"></MainColor>
  </div>


  <p class="my-5 bg-yellow-400 text-center text-base text-white">Styles</p>

  <div class="Police px-5">
    <div class="my-2 flex items-center justify-between">
      <div class="font-smythe">
        <p class="font-bold text-2xl">H1 / Headline 1</p>
        <p class="font-light">Smythe</p>
        <p class="font-light">36px font size</p>
      </div>
      <div class="w-3/5">
        <p class="text-right font-smythe text-2xl">Q-lock</p>
      </div>
    </div>

    <div class="my-2 flex items-center justify-between">
      <div class="font-smythe">
        <p class="font-bold text-xl">H2 / Headline 2</p>
        <p class="font-light">Smythe</p>
        <p class="font-light">28px font size</p>
      </div>
      <div class="w-3/5">
        <p class="text-right font-smythe text-xl">Artistes</p>
      </div>
    </div>

    <div class="my-2 flex items-center justify-between">
      <div class="font-source-sans-pro w-1/5">
        <p class="font-medium">Body</p>
        <p class="font-light">Source sans pro</p>
        <p class="font-light">16px font size</p>
      </div>
      <div class="w-3/5">
        <p class="font-source-sans-pro text-right font-normal">
          Irradiate enters the next chapter of his career with full force! His first official release as a signed Masters of Hardcore artist “Endless Sacrifice” brings you his signature style with a summer festival twist. Featuring MC Livid on the vocals, this refreshing hardcore banger brightens your mood with the invigorating melody and pure rush of energy.</p>
      </div>
    </div>
    <div class="my-2 flex items-center justify-between">
      <div class="font-poppins w-1/5">
        <p class="font-semibold">Nav</p>
        <p class="font-light">Poppins semibold</p>
        <p class="font-light">16px font size</p>
      </div>
      <div class="w-3/5">
        <p class="font-poppins text-right font-semibold">
          Home
        </p>
      </div>
    </div>
  </div>
  <h3 class="my-5 bg-yellow-400 text-center text-base text-white">Icons</h3>
  <div class="flex w-full justify-around"><MenuAlt1Icon class="h-10 w-10"></MenuAlt1Icon
    ><XIcon class="h-10 w-10"></XIcon>
    <PencilAltIcon class="h-10 w-10"/>
    <SaveIcon class="h-10 w-10"/>
    <ArrowCircleRightIcon class="h-10 w-10"/>
  </div>

  <h3 class="my-5 bg-yellow-400 text-center text-base text-white">Composants</h3>
  <div class="grid grid-cols-2 gap-8 p-10">
      <solidBtn>Bouton</solidBtn>
      <outlineBtn>Bouton</outlineBtn>
      <LinkCards :image="'/public/maxresdefault.png'" :alt="'image test'" :chemin="'/Style-guide'"></LinkCards>
      <NewsCards :img="'/public/maxresdefault.png'"></NewsCards>
      <Teamcards :image="'/public/maxresdefault.png'"></Teamcards>
      <UpdateNewsCard :img="'/public/maxresdefault.png'"></UpdateNewsCard>

  </div>
</template>
<script >
import MainColor from "../components/MainColor.vue";
import { MenuAlt1Icon, XIcon, PencilAltIcon, SaveIcon, ArrowCircleRightIcon } from "@heroicons/vue/outline";
import outlineBtn from "../components/buttons/outlineBtn.vue"
import solidBtn from "../components/buttons/solidBtn.vue"
import LinkCards from "../components/cards/LinkCards.vue";
import NewsCards from "../components/cards/NewsCards.vue";
import Teamcards from "../components/cards/Teamcards.vue";
import UpdateNewsCard from "../components/cards/updateNewsCard.vue";


export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: {
    MainColor,
    MenuAlt1Icon,
    XIcon,
    PencilAltIcon,
    SaveIcon,
    ArrowCircleRightIcon,
    outlineBtn,
    solidBtn,
    LinkCards,
    NewsCards,
    Teamcards,
    UpdateNewsCard
},
};
</script>
<style>
.Color-Extra{
    background:radial-gradient(139.77% 702.04% at 130% 115.91%, #CCFF00 0%,
     rgba(255, 199, 0, 0) 100%)
    , #F2325C;
}
</style>
