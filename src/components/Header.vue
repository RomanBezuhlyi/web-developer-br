<template>
	<header class="header-wrap">
		<div class="container">
			<div class="header">
				<nav class="header__nav">
					<router-link to="/" exact-active-class="active">Головна</router-link>
					<router-link to="/services" exact-active-class="active"
						>Послуги</router-link
					>
					<router-link to="/reviews" exact-active-class="active"
						>Відгуки</router-link
					>
					<router-link to="/portfolio" exact-active-class="active"
						>Портфоліо</router-link
					>
				</nav>
				<div class="header__control">
					<SwitchTheme />
					<button class="header__btn">Контакти</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import SwitchTheme from '@/components/SwitchTheme'

export default {
	name: 'Header',
	components: {
		SwitchTheme,
	},
}
</script>

<style lang="scss" scoped>
.header-wrap {
	width: 100%;
	height: 77px;
	@include flex(row, flex-start, center);
}
.header {
	width: 100%;
	@include flex(row, space-between, center);
	&__nav {
		@include flex(row, flex-start, center);
		gap: 68px;
		a {
			font-weight: 300;
			@include transition;
			border-bottom: 1px solid transparent;
		}
		a.active {
			border-bottom: 1px solid currentColor;
		}
		a:hover {
			border-bottom: 1px solid currentColor;
		}
	}
	&__control {
		@include flex(row, flex-start, center);
		gap: 42px;
	}
	&__btn {
		color: white;
		width: 159px;
		height: 39px;
		border-radius: 15px;
		background: rgb(13, 130, 89);
		&:hover {
			background-color: $accent;
		}
	}
}
</style>
