<script>
	import { sendView } from '$actions/analytics';

	import { getCompany } from '$actions/companies';

	import { navigating, page } from '$app/stores';
	import CompanyAboutUs from '$components/CompanyAboutUs.svelte';
	import CompanyLanding from '$components/CompanyLanding.svelte';
	import { appStore } from '$stores/app';
	import { companiesStore } from '$stores/companies';
	import { getCookie } from '$utils/cookie';
	import PageLoader from '$vendor/mase/Spinners/PageLoader.svelte';
	import { dispatch, timedDispatch } from '$vendor/sedux';
	import { onMount } from 'svelte';

	onMount(() => {
		dispatch(() => getCompany($page.params.id, 'companies'));

		if (!$appStore.user.loggedIn)
			timedDispatch(
				() =>
					sendView({ session: getCookie('session'), route: window.location.pathname }, 'analytics'),
				10 / 60
			);
	});
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
		<CompanyLanding {...$companiesStore.company} />
		<CompanyAboutUs {...$companiesStore.company} />
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
