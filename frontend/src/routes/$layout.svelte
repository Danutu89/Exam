<script lang="ts">
	import { navigating } from '$app/stores';
	import { companiesInterceptor } from '$interceptors/companies';
	import { companiesReducer } from '$reducers/companies';
	import { companiesStore } from '$stores/companies';
	import PageLoader from '$vendor/mase/Spinners/PageLoader.svelte';
	import { createSlicer } from '$vendor/sedux';
	import type { Slicer } from '$vendor/sedux/types/action';
	import { onDestroy, onMount } from 'svelte';
	import App from '../App.svelte';

	let slicer: Slicer;

	onMount(() => {
		slicer = createSlicer(companiesInterceptor, companiesReducer, 'companies', companiesStore);
	});

	onDestroy(() => {
		slicer?.destroy();
	});
</script>

<App>
	{#if $navigating && $slicer?.companies}
		<PageLoader />
	{:else}
		<slot />
	{/if}
</App>
