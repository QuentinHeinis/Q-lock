import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import MentionsView from '../views/MentionsView.vue'
import ContactView from '../views/ContactView.vue'

import LoginView from '../views/LoginView.vue'

import LatestView from '../views/LatestView.vue'

import TicketsView from '../views/Tickets/TicketsView.vue'
import DetailsTicketView from '../views/Tickets/DetailsTicketView.vue'



import GestionTicket from '../views/Gestion/GestionTicket.vue'
import GestionContact from '../views/Gestion/Contact/GestionContact.vue'
import GestionArtiste from '../views/Gestion/Artiste/GestionArtiste.vue'

import UpdateArtiste from '../views/Gestion/Artiste/UpdateArtiste.vue'
import CreateArtiste from '../views/Gestion/Artiste/CreateArtiste.vue'
import DeleteArtiste from '../views/Gestion/Artiste/DeleteArtiste.vue'

import UpdateContact from '../views/Gestion/Contact/UpdateContact.vue'
import CreateContact from '../views/Gestion/Contact/CreateContact.vue'
import DeleteContact from '../views/Gestion/Contact/DeleteContact.vue'

import NotFoundComponent from '../views/404.vue'


import ListeArtistesView from '../views/Artistes/ListeArtistesView.vue'
import ArtisteView from '../views/Artistes/ArtisteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/Mentions', name: 'MentionsView', component: MentionsView },
    { path: '/Contact', name: 'ContactView', component: ContactView },

    { path: '/Login', name: 'LoginView', component: LoginView },

    { path: '/Latest', name: 'LatestView', component: LatestView },

    { path: '/Tickets', name: 'TicketsView', component: TicketsView },
    { path: '/DetailsTicket', name: 'DetailsTicketView', component: DetailsTicketView },


    { path: '/GestionTicket', name: 'GestionTicket', component: GestionTicket },
    { path: '/GestionArtiste', name: 'GestionArtiste', component: GestionArtiste },
    { path: '/GestionContact', name: 'GestionContact', component: GestionContact },

    { path: '/UpdateArtiste/:id', name: 'UpdateArtiste', component: UpdateArtiste },
    { path: '/CreateArtiste', name: 'CreateArtiste', component: CreateArtiste },
    { path: '/DeleteArtiste/:id', name: 'DeleteArtiste', component: DeleteArtiste },

    { path: '/UpdateContact/:id', name: 'UpdateContact', component: UpdateContact },
    { path: '/CreateContact', name: 'CreateContact', component: CreateContact },
    { path: '/DeleteContact/:id', name: 'DeleteContact', component: DeleteContact },


    { path: '/Artistes', name: 'ListeArtistesView', component: ListeArtistesView },
    { path: '/Artiste/:id', name: 'Artiste', component: ArtisteView },


    { path: '/:pathMatch(.*)', component: NotFoundComponent }

  ]
})

export default router


