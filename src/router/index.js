import { createRouter, createWebHistory } from 'vue-router'

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

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


    { path: '/GestionTicket', name: 'GestionTicket', component: GestionTicket, beforeEnter: guard },
    { path: '/GestionArtiste', name: 'GestionArtiste', component: GestionArtiste, beforeEnter: guard },
    { path: '/GestionContact', name: 'GestionContact', component: GestionContact, beforeEnter: guard },

    { path: '/UpdateArtiste/:id', name: 'UpdateArtiste', component: UpdateArtiste, beforeEnter: guard },
    { path: '/CreateArtiste', name: 'CreateArtiste', component: CreateArtiste, beforeEnter: guard },
    { path: '/DeleteArtiste/:id', name: 'DeleteArtiste', component: DeleteArtiste, beforeEnter: guard },

    { path: '/UpdateContact/:id', name: 'UpdateContact', component: UpdateContact, beforeEnter: guard },
    { path: '/CreateContact', name: 'CreateContact', component: CreateContact, beforeEnter: guard },
    { path: '/DeleteContact/:id', name: 'DeleteContact', component: DeleteContact, beforeEnter: guard },


    { path: '/Artistes', name: 'ListeArtistesView', component: ListeArtistesView },
    { path: '/Artiste/:id', name: 'Artiste', component: ArtisteView },


    { path: '/:pathMatch(.*)', component: NotFoundComponent }

  ]
})

function guard(to, from, next) {
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('router OK => user ', user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          next(to.params.name);
          return;
        } else {
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "HomeView" });
          return;
        }
      })
    } else {
      console.log('router NOK => user ', user);
      next({ name: "HomeView" });
    }
  });
}

export default router


