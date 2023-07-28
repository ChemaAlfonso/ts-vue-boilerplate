<template>
	<div class="home-detail">
		<div class="home-detail__block">
			<div>
				<img class="home-detail__logo" :src="logo" />
			</div>

			<h1 class="home-detail__title">
				{{ getText('Welcome to internationalizable TS-vue-boilerplate') }}
			</h1>
		</div>

		<div class="home-detail__block">
			<h2>{{ getText('Template features') }}</h2>
			<ul>
				<li v-for="appFeature in appFeatures" :key="appFeature.name">
					<a target="_blank" class="home-detail__link" :href="appFeature.url">{{ appFeature.name }}</a>
				</li>
			</ul>
		</div>

		<div class="home-detail__author">
			<p>{{ getText('Created by Chema Alfonso') }}</p>
			<ul>
				<li>
					<a target="_blank" class="home-detail__link" href="https://github.com/ChemaAlfonso">Github</a>
				</li>
				<li>
					<a target="_blank" class="home-detail__link" href="https://krakenlabsweb.com/">KrakenLabsWeb</a>
				</li>
				<li>
					<a target="_blank" class="home-detail__link" href="https://chemaalfonso.com/">Website</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getText } from '@/lang/getText'
import logo from '@/assets/img/logo.png'

import { useHome } from '@/modules/home/useHome'

const { getAppFeatures } = useHome()

const appFeatures = ref(getAppFeatures())
</script>

<style scoped lang="scss">
@use '@/assets/styles/scss/settings/sizes';

.home-detail {
	@include sizes.contained--padded;
	display: grid;
	place-items: center;
	text-align: center;

	&__block {
		margin-block: 2rem;
	}

	&__title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__logo {
		max-width: 200px;
	}

	&__link {
		color: var(--color-light);

		&:hover {
			color: var(--color-info);
		}
	}

	&__author {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1rem;
		position: fixed;
		right: 0;
		bottom: 0;
		padding: 0.5rem;
		width: 100vw;
		background-color: var(--color-dark);

		& ul {
			display: flex;
			align-items: center;
			gap: 6px;
		}
	}
}
</style>
