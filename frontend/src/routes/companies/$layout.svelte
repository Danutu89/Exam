<script lang="ts">
	import CategoriesSidebar from '$components/CategoriesSidebar.svelte';

	import MediaQuery from '$vendor/mase/utils/MediaQuery.svelte';
	import { onMount } from 'svelte';
	import { dispatch } from '$vendor/sedux';
	import { companiesStore } from '$stores/companies';
	import { getCategories } from '$actions/companies';
	import { goto } from '$app/navigation';

	const handleCategorySelect = ({ detail }: { detail: string }): void => {
		goto(`/companies/${detail}`);
	};

	onMount(() => {
		dispatch(() => getCategories('companies'));
	});
</script>

<main>
	<MediaQuery query="(min-width: 860px)" let:matches>
		<CategoriesSidebar
			on:select={handleCategorySelect}
			desktopMode={matches}
			{...$companiesStore.categories}
		/>
	</MediaQuery>
	<slot />
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
