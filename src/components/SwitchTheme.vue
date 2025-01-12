<template>
	<label id="switch" class="switch">
		<input type="checkbox" v-model="isDarkMode" @change="toggleTheme" />
		<span class="slider round"></span>
	</label>
</template>

<script>
export default {
	data() {
		return {
			isDarkMode: localStorage.getItem('theme') === 'theme-dark' ? false : true,
		}
	},
	methods: {
		setTheme(themeName) {
			localStorage.setItem('theme', themeName)
			document.documentElement.className = themeName
		},
		toggleTheme() {
			if (this.isDarkMode) {
				this.setTheme('theme-light')
			} else {
				this.setTheme('theme-dark')
			}
		},
	},
	created() {
		if (localStorage.getItem('theme') === 'theme-dark') {
			this.setTheme('theme-dark')
			this.isDarkMode = false
		} else {
			this.setTheme('theme-light')
			this.isDarkMode = true
		}
	},
}
</script>

<style lang="scss" scoped>
.switch {
	position: relative;
	display: inline-block;
	width: 45px;
	height: 30px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #303030;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: '';
	height: 28px;
	width: 28px;
	left: 0px;
	bottom: 4px;
	top: 0;
	bottom: 0;
	margin: auto 0;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	box-shadow: 0 0px 15px #2020203d;
	background: $accent url('../assets/images/moon.svg');
	background-repeat: no-repeat;
	background-position: center;
}

input:checked + .slider:before {
	-webkit-transform: translateX(18px);
	-ms-transform: translateX(18px);
	transform: translateX(18px);
	background: rgb(13, 130, 89) url('../assets/images/sun.svg');
	background-repeat: no-repeat;
	background-position: center;
}

.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
