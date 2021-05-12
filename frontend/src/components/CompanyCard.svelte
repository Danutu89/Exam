<script lang="ts">
	import type { Company } from '$types/companies';

	export let company: Company;
</script>

<card>
	<div class="info">
		<div class="header">
			<a href="/company/{company.id}" class="title">{company.name}</a>
		</div>
		<div class="location">
			icon <span class="name">Iasi, Romania</span>
		</div>
		<div class="description">
			{company.description}
		</div>
	</div>
	{#if company.logo}
		<img src={company.logo} alt={company.name} width="30px" height="30px" />
	{/if}
</card>

<style lang="scss">
	@import '../src/vendor/mase/globals.scss';

	card {
		display: flex;
		flex-flow: row;
		background: $background-secondary;
		border-radius: 10px;
		box-shadow: 4px 4px 4px 0px rgb(0 0 0 / 20%);
		padding: 0.8rem;
		width: calc(100% - 1.6rem);

		.info {
			width: calc(100% - 5rem);
			.header {
				display: flex;
				flex-flow: row;
				align-items: center;
				margin: 0.4rem 0;

				img {
					border-radius: 40px;
				}

				.title {
					font-size: 16px;
					font-weight: 700;
					color: $font-color-full;
				}
			}

			.location {
				color: $font-color;
				margin: 0.4rem 0;
			}

			.description {
				color: $font-color;
				overflow-wrap: break-word;
				margin: 0.4rem 0;
			}
		}

		img {
			width: 50px;
			height: 50px;
			border-radius: 10px;
			margin-inline-start: auto;
		}
	}
</style>
