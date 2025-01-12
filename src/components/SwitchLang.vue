<template>
	<div class="language-switcher">
		<button
			:class="{ active: currentLanguage == 'ua' }"
			@click="switchLanguage('ua')"
		>
			{{ 'UA' }}
		</button>
		<span>|</span>
		<button
			:class="{ active: currentLanguage == 'en' }"
			@click="switchLanguage('en')"
		>
			{{ 'EN' }}
		</button>
	</div>
</template>

<script>
export default {
	name: 'LanguageSwitcher',
	data() {
		return {
			currentLanguage: 'ua',
			availableLanguages: ['ua', 'en'],
		}
	},
	methods: {
		switchLanguage(lang) {
			this.$i18n.locale = lang
			this.currentLanguage = lang
			window.localStorage.setItem('lang', lang)
		},
	},
}
</script>

<style lang="scss" scoped>
.language-switcher {
	display: flex;
	gap: 5px;
	span {
		display: block;
	}

	button.active {
		color: rgb(13, 130, 89);
	}
	button:hover {
		color: rgb(13, 130, 89);
	}
}
</style>
