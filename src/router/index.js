import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import LatestView from '../views/LatestView.vue'

import LoginView from '../views/LoginView.vue'

import TicketsView from '../views/Tickets/TicketsView.vue'
import DetailsTicketView from '../views/Tickets/DetailsTicketView.vue'


import ContactView from '../views/ContactView.vue'
import MentionsView from '../views/MentionsView.vue'


import ListeArtistesView from '../views/Artistes/ListeArtistesView.vue'
import ArtisteView from '../views/Artistes/ArtisteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/Latest', name: 'LatestView', component: LatestView },

    { path: '/Login', name: 'LoginView', component: LoginView },

    { path: '/Tickets', name: 'TicketsView', component: TicketsView },
    { path: '/DetailsTicket', name: 'DetailsTicketView', component: DetailsTicketView },

    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/Mentions', name: 'MentionsView', component: MentionsView },

    { path: '/Artistes', name: 'ListeArtistesView', component: ListeArtistesView },
    { path: '/Artiste', name: 'ArtisteView', component: ArtisteView },

  ]
})

export default router


