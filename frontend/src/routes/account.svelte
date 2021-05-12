<script lang="ts">
	import { goto } from '$app/navigation';
	import AccountAnalytics from '$components/AccountAnalytics.svelte';
	import AccountSettings from '$components/AccountSettings.svelte';
	import AccountSidebar from '$components/AccountSidebar.svelte';
	import { accountReducer } from '$reducers/account';
	import { accountStore } from '$stores/account';

	import { appStore } from '$stores/app';
	import MediaQuery from '$vendor/mase/utils/MediaQuery.svelte';
	import { createSlicer } from '$vendor/sedux';
	import type { Slicer } from '$vendor/sedux/types/action';
	import { onMount } from 'svelte';

	$: if (!$appStore.user.loggedIn) goto('/');

	let slicer: Slicer;

	onMount(() => {
		slicer = createSlicer(null, accountReducer, 'account', accountStore);
	});
</script>

<main>
	<MediaQuery query="(min-width: 860px)" let:matches>
		<AccountSidebar desktopMode={matches} />
	</MediaQuery>
	{#if $accountStore.page.location === 'analytics'}
		<AccountAnalytics />
	{:else if $accountStore.page.location === 'settings'}
		<AccountSettings />
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-flow: row;

		@media screen and (max-width: 860px) {
			flex-flow: column;
			width: calc(100% - 1rem);
		}
	}
</style>
