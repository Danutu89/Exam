<script lang="ts">
	import { navigate } from '$actions/account';

	import { accountStore } from '$stores/account';

	import { Sidebar } from '$vendor/mase';
	import Item from '$vendor/mase/Sidebar/Item.svelte';
	import { dispatch } from '$vendor/sedux';

	export let desktopMode: boolean;
</script>

<Sidebar opened={desktopMode} width={300} title="Account">
	<Item
		selected={$accountStore.page.location === 'settings'}
		on:click={() => dispatch(() => navigate('settings', 'account'))}>Settings</Item
	>
	<Item
		selected={$accountStore.page.location === 'analytics'}
		on:click={() => dispatch(() => navigate('analytics', 'account'))}>Analytics</Item
	>
</Sidebar>
