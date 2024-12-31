<template>
	<div class="home-wrap">
		<div class="home-wrap__bg"></div>
		<div class="container">
			<div class="home">
				<div class="home__info">
					<p>Привіт! Мене звати Роман, і я</p>
					<h1>Web Developer</h1>
					<p>
						Створюю сучасні, стильні та функціональні рішення для вебу. Моя мета
						— не просто кодити, а реалізовувати ідеї, які приносять реальну
						користь.
					</p>
					<button>
						Зв'язатись зі мною
						<svg
							width="19.126343"
							height="17.764862"
							viewBox="0 0 19.1263 17.7649"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<path
								id="Vector"
								d="M15.49 0.9L19.09 13.96C19.16 14.21 19.12 14.44 18.99 14.62C18.86 14.79 18.64 14.9 18.38 14.9C18.13 14.9 17.86 14.81 17.63 14.64C17.4 14.47 17.24 14.24 17.17 13.99L14.19 3.16L3.46 17.48C3.32 17.65 3.11 17.76 2.85 17.76C2.6 17.76 2.33 17.67 2.1 17.5C1.88 17.33 1.71 17.1 1.64 16.85C1.57 16.61 1.61 16.37 1.74 16.19L12.47 1.88L1.24 2.05C0.99 2.06 0.72 1.96 0.49 1.79C0.26 1.62 0.1 1.39 0.03 1.14C-0.04 0.9 0 0.66 0.13 0.48C0.26 0.31 0.48 0.21 0.73 0.2L14.27 0C14.4 -0.01 14.53 0.01 14.66 0.06C14.79 0.1 14.91 0.17 15.03 0.26C15.14 0.34 15.24 0.44 15.32 0.55C15.4 0.66 15.45 0.78 15.49 0.9Z"
								fill-opacity="1.000000"
								fill-rule="nonzero"
							/>
						</svg>
					</button>
				</div>
				<img src="../assets/images/main.png" alt="" />
			</div>
			<div class="skills">
				<span class="skills__title">Навички:</span>
				<ul class="skills__list">
					<li class="skills__list-item">
						<img src="../assets/images/skills/skill-1.svg" alt="html" />
					</li>
					<li class="skills__list-item">
						<img src="../assets/images/skills/skill-2.svg" alt="css" />
					</li>
					<li class="skills__list-item">
						<img src="../assets/images/skills/skill-3.png" alt="js" />
					</li>
					<li class="skills__list-item">
						<img src="../assets/images/skills/skill-4.svg" alt="vue" />
					</li>
					<li class="skills__list-item">
						<img src="../assets/images/skills/skill-5.svg" alt="nuxt" />
					</li>
					<li class="skills__list-item">
						<img src="../assets/images/skills/skill-6.svg" alt="wordpress" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
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
		background: rgb(72, 193, 151);
	}
}
.home {
	position: relative;
	z-index: 2;
	@include flex(row, center, center);
	gap: 30px;
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
			svg {
				fill: #ffffff;
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
		font-weight: 400;
		margin-bottom: 25px;
	}
	&__list {
		@include flex(row, flex-start, center);
		gap: 25px;
	}
}
</style>
