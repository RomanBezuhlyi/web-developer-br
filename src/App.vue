<template>
	<div v-motion-fade-visible>
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from '@/components/Header'

export default {
	name: 'App',
	components: {
		Header,
	},
}
</script>
