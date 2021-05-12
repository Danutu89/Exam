<script lang="ts">
	import type { Category } from '$types/companies';

	import { Sidebar } from '$vendor/mase';
	import Item from '$vendor/mase/Sidebar/Item.svelte';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';
	import { createEventDispatcher } from 'svelte';

	export let desktopMode,
		loading: boolean,
		error: { status: number; message: string },
		results: Array<Category>;

	const dispatch = createEventDispatcher();

	const handleCategorySelect = (id: string): void => {
		dispatch('select', id);
	};
</script>

<Sidebar opened={desktopMode} width={300} title="Categories">
	{#if !loading && error.status === 200}
		<div class="inner">
			{#if results.length > 0}
				{#each results as category}
					<Item on:click={() => handleCategorySelect(category.id)}>{category.name}</Item>
				{/each}
			{:else}
				No Categories
			{/if}
		</div>
	{:else if loading && error.status === 200}
		<Circle color="#258cf4" size={30} style="margin:auto;" />
	{:else if !loading && error.status !== 200}
		{error.message}
	{/if}
</Sidebar>
