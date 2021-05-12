<script lang="ts">
	import { getCategory, getCompanies } from '$actions/companies';
	import { page } from '$app/stores';
	import CategoriesMain from '$components/CategoriesMain.svelte';
	import { companiesStore } from '$stores/companies';

	import { dispatch } from '$vendor/sedux';

	import { onMount } from 'svelte';

	onMount(() => {
		dispatch(() => getCompanies(1, $page.params.category, 'companies'));
		dispatch(() => getCategory($page.params.category, 'companies'));
	});
</script>

<CategoriesMain companies={$companiesStore.companies} category={$companiesStore.category} />
