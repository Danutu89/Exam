<script lang="ts">
	import { analyticsInterceptor } from '$interceptors/analytics';
	import { analyticsReducer } from '$reducers/analytics';
	import { analyticsStore } from '$stores/analytics';
	import { initAnalytics } from '$utils/analytics';

	import { createSlicer } from '$vendor/sedux';

	import type { Slicer } from '$vendor/sedux/types/action';

	import { onMount } from 'svelte';

	let slicer: Slicer;

	onMount(() => {
		slicer = createSlicer(analyticsInterceptor, analyticsReducer, 'analytics', analyticsStore);

		initAnalytics();
	});
</script>

<slot />
