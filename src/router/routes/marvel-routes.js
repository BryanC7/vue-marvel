export default [
  // vista HOME
  {
    path: '/',
    name: 'HomeView',
    label: 'Home',
    show_in_nav: true,
    icon: {
      icon: 'house-fill',
      variant: 'ligth'
    },
    component: () => import('@/views/HomeView.vue')
  },
  // Vista Abaut
  {
    path: '/about',
    name: 'AboutView',
    label: 'About',
    show_in_nav: true,
    // icon: {
    //   icon: 'book-fill',
    //   variant: 'ligth'
    // },
    component: () => import('@/views/AboutView.vue')
  },
  // Sección Eventos
  {
    path: '/events',
    name: 'EventsView',
    label: 'Eventos',
    show_in_nav: true,
    icon: {
      icon: 'calendar-event-fill',
      variant: 'ligth'
    },
    component: () => import('@/views/modules/events/EventsView.vue')
  },
  // Sección Personajes
  {
    path: '/characters',
    name: 'CharactersView',
    label: 'Personajes',
    show_in_nav: true,
    icon: {
      icon: 'emoji-expressionless-fill',
      variant: 'ligth'
    },
    component: () => import('@/views/modules/characters/CharactersView.vue')
  },
  {
    path: '/character/:id',
    name: 'CharacterView',
    label: 'Personaje',
    show_in_nav: false,
    component: () => import('@/views/modules/characters/CharacterView.vue')
  },
  // Sección búsqueda global
  {
    path: '/search',
    name: 'SearchView',
    show_in_nav: false,
    component: () => import('@/views/modules/global-search/SearchView.vue')
  },
  // Sección spinner de carga
  {
    path: '/spinner',
    name: 'SpinnerView',
    show_in_nav: false,
    component: () => import('@/views/modules/spinner/SpinnerView.vue')
  }
]