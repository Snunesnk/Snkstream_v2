import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/Movies',
        name: 'Movies'
            // component: Movies
    },
    {
        path: '/Series',
        name: 'Series'
            // component: Series
    }
]

const router = new VueRouter({
    routes
})

export default router