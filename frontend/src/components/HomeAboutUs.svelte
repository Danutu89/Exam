<script>
	import DescriptionSection from './DescriptionSection.svelte';
</script>

<div class="main">
	<h2>About Us</h2>
	<DescriptionSection>
		<svelte:fragment slot="text">
			<h3>Title</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex impedit maiores et ratione
				dolore fuga dignissimos quia quidem ab. Quaerat debitis commodi doloremque sunt eum eaque
				quae nostrum in.
			</p>
		</svelte:fragment>
		<svelte:fragment slot="image">
			<img
				src="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/Saudi-G20-coronavirus-large.jpg"
				alt="img"
				width="550px"
			/>
		</svelte:fragment>
	</DescriptionSection>
	<DescriptionSection inverse>
		<svelte:fragment slot="text">
			<h3>Title</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex impedit maiores et ratione
				dolore fuga dignissimos quia quidem ab. Quaerat debitis commodi doloremque sunt eum eaque
				quae nostrum in.
			</p>
		</svelte:fragment>
		<svelte:fragment slot="image">
			<img
				src="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/Saudi-G20-coronavirus-large.jpg"
				alt="img"
				width="550px"
			/>
		</svelte:fragment>
	</DescriptionSection>
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
