<template>
	<div class="modal-overlay" @click="closeModal" v-motion-fade-visible>
		<div class="modal" @click.stop>
			<i class="fa-solid fa-xmark modal__close" @click="closeModal"></i>
			<h2>{{ $t('contacts') }}</h2>
			<ul class="modal__list">
				<li class="modal__list-item">
					<a href="#">
						<img src="../assets/images/telegram.svg" alt="" />
						<span>Telegram</span>
					</a>
				</li>
				<li class="modal__list-item">
					<a href="#">
						<img src="../assets/images/gmail.svg" alt="" />
						<span>Gmail</span>
					</a>
				</li>
				<li class="modal__list-item">
					<a href="#">
						<img src="../assets/images/hunt.svg" alt="" />
						<span>Freelancehunt</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$emit('close-modal')
		},
	},
}
</script>

<style lang="scss" scoped>
.modal-overlay {
	position: absolute;
	z-index: 3;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
}
.modal {
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 678px;
	height: 498px;
	padding: 50px;
	@include flex(column, center, flex-start);
	border: 1px solid rgb(72, 193, 151);
	background: var(--color-bg);
	&__close {
		position: absolute;
		right: 41px;
		top: 37px;
		font-size: 24px;
		cursor: pointer;
		@include transition;
		&:hover {
			color: $accent;
		}
	}
	h2 {
		margin-top: 26px;
		font-size: 48px;
		font-weight: 600;
		line-height: 59px;
		letter-spacing: 5%;
		text-align: left;
		margin-bottom: 20px;
	}
	&__list {
		@include flex(row, center, flex-end);
		gap: 100px;
		padding-bottom: 60px;
		border-bottom: 1px solid rgb(255, 255, 255);
		margin: auto;
	}
	&__list-item a {
		@include flex(column, center, center);
		gap: 30px;
		span {
			font-size: 20px;
			font-weight: 600;
			line-height: 24px;
			letter-spacing: 5%;
			@include transition;
		}
		&:hover {
			color: $accent;
		}
	}
}
</style>
