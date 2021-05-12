<script lang="ts">
	export let inverse = false;
</script>

<section>
	{#if inverse}
		<div class="first text"><slot name="text" /></div>
		<div class="second"><slot name="image" /></div>
	{:else}
		<div class="first"><slot name="image" /></div>
		<div class="second text"><slot name="text" /></div>
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-flow: row;
		width: calc(100% - 16rem);
		padding: 4rem 8rem;

		.first {
			max-width: 50%;
			text-align: center;

			&.text {
				margin-top: auto;
				margin-bottom: auto;
			}
		}

		.second {
			margin-inline-start: auto;
			justify-content: end;
			text-align: end;
			text-align: center;
			max-width: 50%;

			&.text {
				margin-top: auto;
				margin-bottom: auto;
			}
		}
	}
</style>
