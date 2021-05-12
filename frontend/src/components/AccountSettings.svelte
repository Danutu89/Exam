<script lang="ts">
	import { getCategories, getUpdateCompany } from '$actions/companies';
	import { companiesStore } from '$stores/companies';
	import { MultipleSelect } from '$vendor/mase';
	import Button from '$vendor/mase/Button.svelte';

	import Input from '$vendor/mase/Input.svelte';
	import ModifyImage from '$vendor/mase/ModifyImage.svelte';

	import Segment from '$vendor/mase/Segment.svelte';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';
	import TextArea from '$vendor/mase/TextArea.svelte';
	import { dispatch } from '$vendor/sedux';
	import { onMount } from 'svelte';
	import CategoriesSelect from './CategoriesSelect.svelte';
	import DescriptionSection from './DescriptionSection.svelte';

	onMount(() => {
		dispatch(() => getUpdateCompany('companies'));
		dispatch(() => getCategories('companies'));
	});

	const handleAddPresentation = () => {
		$companiesStore.update.result.presentations = [
			...$companiesStore.update.result.presentations,
			{ description: '', image: '', name: '', inverse: false, id: '' }
		];
	};
</script>

<div class="main">
	{#if !$companiesStore.update.loading && $companiesStore.update.error.status === 200}
		<Segment style="width: 100%;height: min-content; margin: 2rem;flex-flow: column;">
			<div class="inner">
				<div class="principal">
					<ModifyImage
						bind:avatar={$companiesStore.update.result.logo}
						width="120px"
						height="120px"
						style="border-radius: 20px;"
					/>
					<div class="data">
						<Input
							name="name"
							placeholder="Name"
							bind:value={$companiesStore.update.result.name}
							style="padding: 0.3rem;margin-bottom: 0.5rem;"
						/>
						<Input
							name="link"
							placeholder="Link"
							bind:value={$companiesStore.update.result.link}
							style="padding: 0.3rem;margin-bottom: 0.5rem;"
						/>
						<CategoriesSelect
							{...$companiesStore.categories}
							style="padding: 0.3rem;margin-bottom: 0.5rem;"
							bind:value={$companiesStore.update.result.categories}
							defaultValue={$companiesStore.update.result.categories}
						/>
					</div>
				</div>
				<div class="secondary">
					<TextArea
						style="width: 100%;"
						bind:value={$companiesStore.update.result.description}
						placeholder="Description"
						rows={10}
					/>
				</div>
			</div>
		</Segment>

		{#if $companiesStore.update.result?.presentations?.length > 0}
			{#each $companiesStore.update.result.presentations as presentation}
				<Segment
					style="width: 100%;height: min-content; margin: 2rem;flex-flow: column;padding: 0;"
				>
					<DescriptionSection inverse={presentation.inverse}>
						<svelte:fragment slot="image">
							<ModifyImage
								bind:avatar={presentation.image}
								width="500px"
								style="border-radius: 20px;"
							/>
						</svelte:fragment>
						<svelte:fragment slot="text">
							<TextArea
								style="width: 600px;"
								placeholder="Description"
								rows={5}
								bind:value={presentation.description}
							/>
							<input type="checkbox" name="inverse" bind:checked={presentation.inverse} />
							<label for="inverse">Reverse</label>
						</svelte:fragment>
					</DescriptionSection>
				</Segment>
			{/each}
		{/if}
		<Button
			on:click={handleAddPresentation}
			fluid
			color="secondary"
			trasparent
			styles="margin: 1rem auto;padding: 0.65rem 1.3rem;">Add Presentation</Button
		>
	{:else if $companiesStore.update.loading && $companiesStore.update.error.status === 200}
		<Circle color="#258cf4" size={30} style="margin: auto;" />
	{:else if !$companiesStore.update.loading && $companiesStore.update.error.status !== 200}
		{$companiesStore.update.error.message}
	{/if}
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-flow: column;
		width: calc(100% - 400px);

		.principal {
			display: flex;
			flex-flow: row;
			width: calc(100% - 2rem);

			.data {
				margin-left: 2rem;
			}
		}

		.secondary {
			margin-top: 2rem;
			width: calc(100% - 2rem);
		}
	}
</style>
