<script lang="ts">
	import type { Company } from '$types/companies';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';

	import DescriptionSection from './DescriptionSection.svelte';

	export let loading: boolean, error: { status: number; message: string }, result: Company;
</script>

<div class="main">
	<h2>About Us</h2>

	{#if !loading && error.status === 200}
		{#if result?.presentations?.length > 0}
			{#each result.presentations as presentation}
				<DescriptionSection inverse={presentation.inverse}>
					<svelte:fragment slot="text">
						<h3>{presentation.name}</h3>
						<p>
							{presentation.description}
						</p>
					</svelte:fragment>
					<svelte:fragment slot="image">
						<img src={presentation.image} alt="img" width="550px" />
					</svelte:fragment>
				</DescriptionSection>
			{/each}
		{/if}
	{:else if loading && error.status === 200}
		<Circle color="#258cf4" size={30} style="margin: auto;" />
	{:else if !loading && error.status !== 200}
		{error.message}
	{/if}
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.main {
		text-align: center;

		h2 {
			color: $font-color-full;
			font-size: 2rem;
			margin-bottom: 2em;
		}

		h3 {
			font-size: 2rem;
		}

		p {
			font-size: 1.5rem;
		}

		img {
			border-radius: 20px;
		}
	}
</style>
