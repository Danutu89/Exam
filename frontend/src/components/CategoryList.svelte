<script lang="ts">
	import type { Category } from '$types/companies';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';

	import CategoryMiniCard from './CategoryMiniCard.svelte';

	export let loading: boolean, error: { status: number; message: string }, results: Array<Category>;
</script>

<div class="list">
	<div class="inner">
		{#if !loading && error.status === 200}
			<div class="inner">
				{#if results.length > 0}
					{#each results as category}
						<CategoryMiniCard {category} />
					{/each}
				{:else}
					No Companies
				{/if}
			</div>
		{:else if loading && error.status === 200}
			<Circle color="#258cf4" size={30} style="margin: auto;" />
		{:else if !loading && error.status !== 200}
			{error.message}
		{/if}
	</div>
</div>

<style lang="scss">
	.list {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 1fr repeat(1, minmax(300px, 100%)) 1fr;

		@media screen and (max-width: 860px) {
			margin: 2rem auto;
			width: calc(100% - 2rem);
			gap: 0;
		}

		.inner {
			grid-column: 2;
			display: grid;
			gap: 1rem 2rem;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}

		&.error,
		&.loading {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
