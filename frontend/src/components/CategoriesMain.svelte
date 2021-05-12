<script lang="ts">
	import CompaniesList from './CompaniesList.svelte';
	import CategoriesMiniLanding from './CategoriesMiniLanding.svelte';
	import type { State } from '$types/companies';

	export let companies: State['companies'], category: State['category'] | null;
</script>

<div class="main">
	<CategoriesMiniLanding {category} />
	<CompaniesList {...companies} />
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-flow: column;
		width: 100%;
	}
</style>
