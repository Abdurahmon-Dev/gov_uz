import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MoreInfo from "./views/more_info.vue"
import maincards from "./views/maincards.vue"


const routes = [
    { path: '/MoreInfo', component: MoreInfo, props: true},
    { path: '/home', component: maincards, props: true},
]

const router = new VueRouter({
    routes,
    mode: 'history'
     // short for `routes: routes`

})

export default router;