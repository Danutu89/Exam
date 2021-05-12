<script lang="ts">
	import type { Category } from '$types/companies';

	import { MultipleSelect } from '$vendor/mase';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';

	export let loading: boolean,
		error: { status: number; message: string },
		results: Array<Category>,
		style: string = '',
		defaultValue: Array<any> = [];

	export let value: Array<any> = [];
</script>

{#if !loading && error.status === 200}
	<MultipleSelect
		options={results.map((item) => ({ value: item.id, text: item.name }))}
		bind:value
		{defaultValue}
		placeholder="Categories"
		{style}
	/>
{:else if loading && error.status === 200}
	<Circle color="#258cf4" size={30} style="margin:auto;" />
{:else if !loading && error.status !== 200}
	{error.message}
{/if}
