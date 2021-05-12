<script lang="ts">
	export let selected: boolean = false;
</script>

<div class="item" class:selected on:click>
	<slot />
</div>

<style lang="scss">
	@import '../globals.scss';

	.item {
		padding: 0.8rem 0.4rem;
		background: lighten($color: $background, $amount: 2);
		border: 1px solid lighten($color: $background, $amount: 20);
		border-radius: 6px;
		width: calc(100% - 0.9rem);
		transition: all 0.3s linear;
		cursor: pointer;

		&.selected {
			background: darken($color: $background, $amount: 2);
		}

		&:hover {
			background: darken($color: $background, $amount: 2);
		}

		&:active {
			transition: none;
			background: darken($color: $background, $amount: 5);
		}
	}
</style>
