<script lang="ts">
	import { getData } from '$actions/analytics';
	import { analyticsStore } from '$stores/analytics';

	import { dispatch } from '$vendor/sedux';

	import { onMount } from 'svelte';
	import AccountAnalyticsViewCard from './AccountAnalyticsViewCard.svelte';

	onMount(() => {
		dispatch(() => getData('analytics'));
	});
</script>

<div class="list">
	<AccountAnalyticsViewCard
		name="New Views"
		value={$analyticsStore.data.views.new}
		loading={$analyticsStore.data.loading}
	/>
	<AccountAnalyticsViewCard
		name="Unique Views"
		value={$analyticsStore.data.views.unique}
		loading={$analyticsStore.data.loading}
	/>
	<AccountAnalyticsViewCard
		name="Total Views"
		value={$analyticsStore.data.views.total}
		loading={$analyticsStore.data.loading}
	/>
</div>

<style lang="scss">
	.list {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 1.5rem;
		margin-bottom: 2em;
	}
</style>
