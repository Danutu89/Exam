<script lang="ts">
	import type { State } from '$types/companies';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';

	export let selected = 'default',
		category: State['category'] | null;

	let defaultCategory = {
		name: 'Select Category',
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aivanet.com%2Fwp-content%2Fuploads%2F2018%2F01%2F1516991559_8880580838770.jpg&f=1&nofb=1',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aperiam accusamus excepturi error, quod laboriosam velit, doloremque fuga quisquam deserunt ab enim odio sed, assumenda explicabo eligendi dignissimos autem. Nostrum.'
	};

	$: selectedCategory = category || {
		loading: false,
		error: { status: 200, message: '' },
		result: defaultCategory
	};
</script>

<div class="landing">
	{#if !selectedCategory.loading}
		<div class="info">
			<h1 class="title">{selectedCategory.result.name}</h1>
			<span class="description">{selectedCategory.result.description}</span>
		</div>
		<img src={selectedCategory.result.image} alt={selectedCategory.result.name} />
	{:else}
		<Circle size={30} style="margin: auto;" />
	{/if}
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	.landing {
		display: flex;
		flex-flow: row;
		padding: 2rem;
		border-radius: 15px;
		width: calc(100% - 6rem);
		margin: 1rem;
		background: linear-gradient(
			111deg,
			darken($color: $secondary-color, $amount: 20) 0%,
			darken($color: $secondary-color, $amount: 0) 100%
		);
		height: min-content;
		color: $font-color-on-color;
		height: 300px;

		img {
			height: min-content;
			border-radius: 6px;
			margin-inline-start: auto;
			max-height: 100%;
		}

		.info {
			color: inherit;

			.description {
				max-width: 500px;
				padding-right: 1rem;
				font-size: 1.3rem;
				display: block;
				white-space: pre-wrap;
			}
		}

		@media screen and (max-width: 500px) {
			flex-flow: column-reverse;

			img {
				margin-inline-start: 0;
			}
		}
	}
</style>
