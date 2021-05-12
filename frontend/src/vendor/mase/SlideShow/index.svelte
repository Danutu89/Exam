<script lang="ts">
	import { onMount } from 'svelte';

	import Slide from './Slide.svelte';
	import type { SlideProps } from './types/slide';

	export let data: Array<SlideProps>;
	export let rotation: boolean = false;
	export let auto: boolean = false;
	export let interval: number = 5000;

	let current = 0;
	let slideInterval;

	const setSlideAutomation = (): void => {
		if (auto) {
			clearInterval(slideInterval);
			slideInterval = setInterval(nextHandler, interval);
		}
	};

	let buffer = data;
	buffer[current].selected = true;

	const next = (): void => {
		nextHandler();
		setSlideAutomation();
	};

	const nextHandler = (): void => {
		buffer[current].selected = false;
		if (current < buffer.length - 1) {
			current++;
		} else if (rotation) {
			current = 0;
		}
		buffer[current].selected = true;
		console.log('next exit', rotation, current);
	};

	const prev = (): void => {
		prevHandler();
		setSlideAutomation();
	};

	const prevHandler = (): void => {
		buffer[current].selected = false;
		if (current > 0) {
			current--;
		} else if (rotation) {
			current = buffer.length - 1;
		}
		buffer[current].selected = true;
		console.log('prev exit', rotation, current);
	};

	onMount(() => {
		setSlideAutomation();
	});
</script>

<div class="slider">
	{#each buffer as slide}
		<Slide {slide} />
	{/each}
</div>
<div class="buttons">
	<button id="prev" on:click={prev} />
	<button id="next" on:click={next} />
</div>

<style>
	.slider {
		position: relative;
		overflow: hidden;
		height: 100vh;
		width: 100vw;
		top: -7px;
		left: -7px;
	}

	.buttons button#next {
		position: absolute;
		top: 50%;
		right: 15px;
	}

	.buttons button#next:before {
		content: '>';
		font-size: 1.7rem;
		padding: 1rem 0.6rem;
	}

	.buttons button#prev {
		position: absolute;
		top: 50%;
		left: 15px;
	}

	.buttons button#prev:before {
		content: '<';
		font-size: 1.7rem;
		padding: 1rem 0.6rem;
	}

	.buttons button {
		border: 2px solid #ddd;
		background-color: transparent;
		color: #ddd;
		cursor: pointer;
		padding: 13px 15px;
		border-radius: 50%;
		outline: none;
	}

	.buttons button:hover {
		border: 2px solid #fff;
		background-color: #fff;
		color: #333;
	}
</style>
