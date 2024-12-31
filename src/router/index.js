import Home from '@/pages/Home.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Reviews from '@/pages/Reviews.vue'
import Services from '@/pages/Services.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/services',
		name: 'Services',
		component: Services,
	},
	{
		path: '/reviews',
		name: 'Reviews',
		component: Reviews,
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: Portfolio,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes,
})

export default router
