<template>
	<div class="home">
		<HomeDetail />
	</div>
</template>

<script setup lang="ts">
import HomeDetail from '@/components/home/HomeDetail.vue'
</script>
<style scoped lang="scss">
.home {
	min-height: 100vh;
	display: grid;
	place-items: center;
	background-color: var(--color-dark);
	color: var(--color-light);
}
</style>
