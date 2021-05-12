<script lang="ts">
	import { goto } from '$app/navigation';

	import type { Category } from '$types/companies';

	export let category: Category;

	const handleGotoCategory = (): void => {
		goto(`/companies/${category.id}`);
	};
</script>

<div class="card" on:click={handleGotoCategory} style={`--image: url("${category.image}")`}>
	<a href="/companies/{category.id}"><h2>{category.name}</h2></a>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	$card-img: image-url(#{var(--image)}, false, false);

	.card {
		display: block;
		border-radius: 20px;
		text-align: center;
		align-items: center;
		justify-content: center;
		padding: 3rem 6rem;
		margin-right: 0.5rem;
		cursor: pointer;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #{var(--image)};
		background-position: center;
		background-size: 100%;
		background-repeat: none;
		transition: background-size 0.3s ease-in, all 0.3s ease-in;

		a {
			text-decoration: none;
			color: $font-color-on-color;
			h2 {
				color: $font-color-on-color;
				font-weight: 700;
				font-size: 1.2rem;
			}
		}

		&:hover {
			background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), #{var(--image)};
			background-position: center;
			background-size: 110%;
		}
	}
</style>
