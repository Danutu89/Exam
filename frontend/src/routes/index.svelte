<script context="module">
	export const prerender = true;
	export const router = true;
	export const ssr = true;
</script>

<script>
	import { navigating } from '$app/stores';
	import PageLoader from '$vendor/mase/Spinners/PageLoader.svelte';
	import HomeLanding from '$components/HomeLanding.svelte';
	import HomeCategories from '$components/HomeCategories.svelte';
	import HomeAboutUs from '$components/HomeAboutUs.svelte';
</script>

<svelte:head>
	<title>New Era</title>
	<meta name="description" content="Planner the next gen todo app powered by SvelteKit." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://planner.new-app.dev/" />
	<meta property="og:site_name" content="Planner" />
	<meta
		property="og:image"
		itemprop="image primaryImageOfPage"
		content="https://planner.new-app.dev/pwa/android/android-launchericon-192-192.png"
	/>
	<meta property="og:description" content="Planner the next gen todo app powered by SvelteKit." />
	<meta name="twitter:title" content="Planner" />
	<meta name="twitter:description" content="Planner the next gen todo app powered by SvelteKit." />
	<meta
		name="twitter:image:src"
		content="https://planner.new-app.dev/pwa/android/android-launchericon-192-192.png"
	/>
</svelte:head>

{#if !$navigating}
	<div class="main">
		<HomeLanding />
		<HomeCategories />
		<HomeAboutUs />
	</div>
{:else}
	<PageLoader />
{/if}

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.main {
		height: 100%;
	}

	@keyframes animateZ {
		from {
			transform: translateZ(0px);
		}
		to {
			transform: translateZ(1px);
		}
	}
</style>
