<script lang="ts">
	import { getCompanies } from '$actions/companies';
	import CategoriesMain from '$components/CategoriesMain.svelte';
	import { companiesStore } from '$stores/companies';

	import { dispatch } from '$vendor/sedux';

	import { onMount } from 'svelte';

	onMount(() => {
		dispatch(() => getCompanies(1, '', 'companies'));
	});
</script>

<CategoriesMain companies={$companiesStore.companies} />
