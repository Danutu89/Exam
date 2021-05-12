<script lang="ts">
	import Segment from '$vendor/mase/Segment.svelte';
	import Circle from '$vendor/mase/Spinners/Circle.svelte';

	export let name: string, value: number, loading: boolean;
</script>

<Segment style="background: linear-gradient(111deg, #0a66c2 0%, #1e81e3 100%)">
	<div class="data" class:loading>
		{#if !loading}
			<span class="header">{name}</span>
			<span class="value">{value}</span>
		{:else}
			<Circle color="#258cf4" size={30} style="margin: auto;" />
		{/if}
	</div>
</Segment>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.data {
		display: flex;
		flex-flow: column;

		&.loading {
			min-width: 100%;
		}

		span {
			color: $font-color-on-color;

			&.header {
				font-weight: 600;
			}

			&.value {
				font-weight: 700;
				font-size: 1.7rem;
			}
		}
	}
</style>
