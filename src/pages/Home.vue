<template>
	<div class="home-wrap" v-motion-fade-visible>
		<div class="home-wrap__bg"></div>
		<div class="container">
			<div class="home">
				<div class="home__info">
					<p>{{ $t('title_top') }}</p>
					<h1>{{ $t('title_bot') }}</h1>
					<p>
						{{ $t('description') }}
					</p>
					<button @click="openModal = true">
						{{ $t('btn') }}
						<i class="fa-solid fa-arrow-up"></i>
					</button>
				</div>
				<img src="../assets/images/main.png" alt="" />
			</div>
			<div class="skills">
				<span class="skills__title">{{ $t('skills') }}</span>
				<ul class="skills__list">
					<li class="skills__list-item">
						<svg>
							<use
								class="icon"
								href="../assets/images/skills/symbol-defs.svg#icon-skill-1"
							></use>
						</svg>
					</li>
					<li class="skills__list-item">
						<svg>
							<use
								href="../assets/images/skills/symbol-defs.svg#icon-skill-2"
							></use>
						</svg>
					</li>
					<li class="skills__list-item">
						<svg>
							<use
								href="../assets/images/skills/symbol-defs.svg#icon-skill-3"
							></use>
						</svg>
					</li>
					<li class="skills__list-item">
						<svg>
							<use
								href="../assets/images/skills/symbol-defs.svg#icon-skill-4"
							></use>
						</svg>
					</li>
					<li class="skills__list-item">
						<svg>
							<use
								href="../assets/images/skills/symbol-defs.svg#icon-skill-5"
							></use>
						</svg>
					</li>
					<li class="skills__list-item">
						<svg>
							<use
								href="../assets/images/skills/symbol-defs.svg#icon-skill-6"
							></use>
						</svg>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<Modal v-if="openModal" @close-modal="handleCloseModal" />
</template>

<script>
import { MotionDirective as motion } from '@vueuse/motion'
import Modal from '@/components/Modal'

export default {
	name: 'Home',
	data() {
		return {
			openModal: false,
		}
	},
	directives: {
		motion: motion(),
	},
	components: {
		Modal,
	},
	methods: {
		handleCloseModal() {
			this.openModal = false
		},
	},
}
</script>

<style lang="scss" scoped>
.home-wrap {
	position: relative;
	height: calc(100vh - 77px);
	@include flex(row, center, center);
	&__bg {
		position: absolute;
		left: 0;
		bottom: 40%;
		width: 100%;
		height: 47px;
		filter: blur(80px);
		background: var(--color-bg-element);
	}
}
.home {
	position: relative;
	z-index: 2;
	@include flex(row, center, center);
	gap: 30px;
	@media (max-width: 991px) {
	}
	&__info {
		h1 {
			font-size: 77px;
			font-weight: 600;
			line-height: 102px;
			letter-spacing: 5%;
			margin: 12px 0;
		}
		p {
			font-size: 20px;
			font-weight: 600;
			line-height: 24px;
		}
		button {
			margin-top: 70px;
			margin-left: auto;
			color: white;
			font-size: 20px;
			font-weight: 400;
			line-height: 24px;
			@include flex(row, center, center);
			gap: 20px;
			width: 298px;
			height: 57px;
			border-radius: 30px;
			background: black;
			border: 2px solid black;
			i {
				transform: rotate(45deg);
				@include transition;
			}

			&:hover {
				border: 2px solid $accent;
				color: $accent;
				svg {
					fill: $accent;
					transform: scale(1.2);
				}
			}
		}
	}
}

.skills {
	&__title {
		display: block;
		font-weight: 600;
		margin-bottom: 25px;
	}
	&__list {
		@include flex(row, flex-start, center);
	}
	&__list-item {
		svg {
			width: 80px;
			height: 40px;
		}
	}
}
</style>
