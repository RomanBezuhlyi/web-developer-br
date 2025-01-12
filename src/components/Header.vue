<template>
	<header class="header-wrap">
		<div class="container">
			<div class="header">
				<nav class="header__nav">
					<router-link to="/" exact-active-class="active">{{
						$t('main')
					}}</router-link>
					<router-link to="/services" exact-active-class="active">{{
						$t('services')
					}}</router-link>
					<router-link to="/reviews" exact-active-class="active">{{
						$t('reviews')
					}}</router-link>
					<router-link to="/portfolio" exact-active-class="active">{{
						$t('portfolio')
					}}</router-link>
				</nav>
				<div class="header__control">
					<SwitchTheme />
					<SwitchLang />
					<button class="header__btn">
						<span>{{ $t('contacts') }}</span>
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import SwitchLang from '@/components/SwitchLang'
import SwitchTheme from '@/components/SwitchTheme'

export default {
	name: 'Header',
	components: {
		SwitchTheme,
		SwitchLang,
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
			font-weight: 600;
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
		position: relative;
		color: white;
		width: 159px;
		height: 39px;
		border-radius: 15px;
		background: rgb(13, 130, 89);
		span {
			position: relative;
			z-index: 2;
			text-transform: uppercase;
		}
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			height: 50%;
			width: 0;
			background-color: transparent;
			border-radius: 14px 14px 0 0;
			@include transition;
		}
		&::before {
			content: '';
			position: absolute;
			right: 0;
			bottom: 0;
			height: 50%;
			width: 0;
			background-color: transparent;
			border-radius: 0 0 14px 14px;
			@include transition;
		}
		&:hover {
			&::after {
				width: 100%;
				background-color: $accent;
			}
			&::before {
				width: 100%;
				background-color: $accent;
			}
		}
	}
}
</style>
