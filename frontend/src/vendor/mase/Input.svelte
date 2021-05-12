<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value = '',
		name = '',
		placeholder = '',
		defaultValue = '',
		autofocus = false,
		type: 'text' | 'passowrd' | '_number' = 'text',
		maxlength = 100,
		label = '',
		pattern: RegExp | null,
		error: string | boolean = false,
		mirrors: string | null = null,
		disabled = false,
		fluid = false,
		autocomplete = 'off',
		borderless = false,
		size = '16px',
		trasparent = false,
		notEmpty = false,
		style = '',
		strict = false;

	let notEmptyError = false;
	let firstType = false;

	let element: HTMLInputElement, regPattern;

	const dispatcher = createEventDispatcher();

	$: if (type === '_number') {
		pattern = /^[0-9]{0,10}$/;
		defaultValue = defaultValue || '0';
	}
	$: if (element && autofocus) element.focus();
	$: if (element) element.type = type;
	$: if (pattern && value) {
		regPattern = new RegExp(pattern);
		error = !regPattern.test(value);
		notEmptyError = false;
	} else {
		if (notEmpty) {
			notEmptyError = error = !value && notEmpty && firstType;
		} else error = notEmptyError = false;
	}

	$: if (mirrors && value) {
		if (value != mirrors) {
			error = true;
		}
	}

	$: if (defaultValue) {
		value = defaultValue;
	}

	$: if (value != '' && !firstType) firstType = true;

	const handleChangeValue = (e: any) => {
		regPattern = new RegExp(pattern);
		const check = !regPattern.test(value);

		if (strict && !check) return;

		value = e.target.value;

		dispatcher('input', e);
	};

	const incrementNumber = () => {
		value = (parseInt(value, 10) + 1).toString();
	};

	const decrementNumber = () => {
		value = (parseInt(value, 10) - 1).toString();
	};

	const handleKeyPress = (e: any) => {
		if (e.keyCode === 38 && type === '_number') {
			incrementNumber();
		}

		if (e.keyCode === 40 && type === '_number') {
			decrementNumber();
		}
	};
</script>

<div style="width: 100%">
	{#if label}
		<label for={element}>{label}</label>
	{/if}
	{#if notEmptyError}
		<label class="error" for={element}>Field empty.</label>
	{:else if error && pattern}
		<label class="error" for={element}>Respect the format.</label>
	{:else if mirrors && error}
		<label class="error" for={element}>Fields doesn`t match.</label>
	{/if}
	<div
		class="input"
		class:disabled
		class:fluid
		class:trasparent
		class:borderless
		class:error={error || notEmptyError}
		{style}
	>
		<input
			{name}
			{placeholder}
			{value}
			on:change
			on:input={handleChangeValue}
			bind:this={element}
			{maxlength}
			{disabled}
			{autocomplete}
			style="font-size: {size};"
			on:keyup|preventDefault={handleKeyPress}
		/>
		{#if type === '_number'}
			<div class="keys">
				<div class="key" on:click={incrementNumber}>+</div>
				<div class="key" on:click={decrementNumber}>-</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import './globals.scss';
	label {
		color: darken($color: $font-color, $amount: 20);
		font-size: 11px;
		margin-bottom: 0.2rem;

		&.error {
			color: darken($color: red, $amount: 10);
			position: absolute;
			margin-top: -0.9rem;
		}
	}

	.input {
		display: flex;
		flex-flow: row;
		background: lighten($color: $background, $amount: 0);
		border: 1px solid lighten($color: $background, $amount: 5);
		color: $font-color;
		border-radius: 6px;
		padding: 0.1rem 0.2rem;

		.keys {
			display: flex;
			flex-flow: row;

			.key {
				border-radius: 6px;
				background: darken($color: $background, $amount: 6);
				width: 1.5rem;
				text-align: center;
				cursor: pointer;
				margin-left: 0.5rem;
				user-select: none;

				&:hover {
					background: darken($color: $background, $amount: 10);
				}
			}
		}

		input {
			padding: 0;
			margin: 0;
			border-radius: 6px;
			border: none;
			background: none;
			font-size: 15px;
			height: min-content;
			width: 100%;
			margin: auto 0;
			&:focus {
				outline: none;
			}
		}

		&.disabled {
			background: darken($color: $background, $amount: 3);
			color: darken($color: $font-color, $amount: 20);
		}

		&.fluid {
			width: calc(100% - 1rem);
		}

		&.trasparent {
			background: none;
		}

		&.error {
			border: 1px solid darken($color: red, $amount: 10);
		}

		&.borderless {
			border: none;
			padding: 0;
		}
	}
</style>
