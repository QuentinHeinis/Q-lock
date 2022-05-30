import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import TicketsView from '../views/TicketsView.vue'
import LatestView from '../views/LatestView.vue'
import MentionsView from '../views/MentionsView.vue'
import ListeArtistesView from '../views/Artistes/ListeArtistesView.vue'
import ArtisteView from '../views/Artistes/ArtisteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/Tickets', name: 'TicketsView', component: TicketsView },
    { path: '/Latest', name: 'LatestView', component: LatestView },
    { path: '/Mentions', name: 'MentionsView', component: MentionsView },
    { path: '/Artistes', name: 'ListeArtistesView', component: ListeArtistesView },
    { path: '/Artiste', name: 'ArtisteView', component: ArtisteView },

  ]
})

export default router


