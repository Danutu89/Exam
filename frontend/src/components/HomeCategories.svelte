<script>
	import { getCategories } from '$actions/companies';
	import { companiesStore } from '$stores/companies';

	import { dispatch } from '$vendor/sedux';

	import { onMount } from 'svelte';

	import CategoryList from './CategoryList.svelte';

	onMount(() => {
		dispatch(() => getCategories('companies'));
	});
</script>

<div class="main">
	<h2>Categories</h2>
	<CategoryList {...$companiesStore.categories} />
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.main {
		padding: 2rem 8rem;
		text-align: center;

		h2 {
			color: $font-color-full;
			font-size: 2rem;
			margin-bottom: 2em;
		}
	}
</style>
