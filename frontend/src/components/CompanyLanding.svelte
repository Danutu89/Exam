<script lang="ts">
	import type { Company } from '$types/companies';

	import { SlideShow } from '$vendor/mase';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';

	export let loading: boolean, error: { status: number; message: string }, result: Company;
</script>

<div class="landing" class:loading>
	{#if !loading && error.status === 200}
		{#if result?.images?.length > 0}
			<SlideShow
				data={result?.images?.map((item) => ({
					title: item.name,
					selected: false,
					image: item.image
				}))}
			/>
		{/if}
		<div class="main">
			<div class="image">
				<img src={result.logo} alt="lanfing" width="150px" />
			</div>
			<div class="info">
				<h1>{result.name}</h1>
				<span class="description">{result.description}</span>
			</div>
		</div>
	{:else if loading && error.status === 200}
		<Circle color="#258cf4" size={30} style="margin: auto;" />
	{:else if !loading && error.status !== 200}
		{error.message}
	{/if}
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.landing {
		position: relative;
		overflow: hidden;

		&.loading {
			height: 500px;
			display: flex;
		}

		.main {
			z-index: 2;
			height: 100%;
			width: 100%;
			top: 0;
			display: flex;
			flex-flow: row;
			padding: 8em 8rem;
			position: absolute;
			pointer-events: none;
			.image {
				img {
					border-radius: 10px;
				}
			}

			.info {
				max-width: 600px;
				color: $font-color-on-color;
				margin-left: 2rem;

				h1 {
					font-size: 3rem;
					margin-top: 0;
				}

				.description {
					font-size: 1.7rem;
				}
			}
		}
	}
</style>
