<div class="landing">
	<div class="info">
		<h1>New Era</h1>
		<span class="description"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius suscipit
			recusandae. Pariatur, assumenda necessitatibus quas alias nemo, consectetur ipsam nobis
			reiciendis aliquid deleniti voluptatem ducimus neque quis beatae nostrum.</span
		>
	</div>
	<div class="image">
		<img
			src="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/Saudi-G20-coronavirus-large.jpg"
			alt="lanfing"
			width="600px"
		/>
	</div>
</div>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';
	.landing {
		display: flex;
		flex-flow: row;
		padding: 4rem 8rem;
		background: linear-gradient(
			111deg,
			darken($color: $secondary-color, $amount: 20) 0%,
			darken($color: $secondary-color, $amount: 0) 100%
		);

		.image {
			margin-inline-start: auto;
			img {
				border-radius: 10px;
			}
		}

		.info {
			margin: auto 0;
			max-width: 600px;
			color: $font-color-on-color;
			margin-right: 2rem;

			h1 {
				font-size: 3rem;
			}

			.description {
				font-size: 1.7rem;
			}
		}
	}
</style>
