<script lang="ts">
	import { getViews } from '$actions/analytics';
	import { analyticsStore } from '$stores/analytics';

	import Segment from '$vendor/mase/Segment.svelte';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';
	import { dispatch } from '$vendor/sedux';
	import { onMount } from 'svelte';
	import Chart from 'svelte-frappe-charts';
	import AccountAnalyticsViews from './AccountAnalyticsViews.svelte';

	$: data = {
		labels: $analyticsStore.views.results?.map((item) => item.day) || [],
		datasets: [
			{
				values: $analyticsStore.views.results?.map((item) => item.count) || []
			}
		]
	};

	let chartRef;

	onMount(() => {
		dispatch(() => getViews('analytics'));
	});
</script>

<Segment style="margin: 2rem;width: 100%;display: block;">
	<AccountAnalyticsViews />

	{#if !$analyticsStore.views.loading && $analyticsStore.views.error.status === 200}
		<Chart
			{data}
			type="line"
			bind:this={chartRef}
			height={600}
			colors={['#0a66c2']}
			lineOptions={{
				regionFill: 1,
				xIsSeries: true,
				spline: 1,
				hideDots: 1
			}}
		/>
	{:else if $analyticsStore.views.loading && $analyticsStore.views.error.status === 200}
		<Circle color="#258cf4" size={30} />
	{:else if !$analyticsStore.views.loading && $analyticsStore.views.error.status !== 200}
		{$analyticsStore.views.error.message}
	{/if}
</Segment>
