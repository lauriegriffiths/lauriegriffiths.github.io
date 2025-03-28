<script lang="ts">
	import { base, resolveRoute } from '$app/paths';
	// import 'simpledotcss';
	import '@exampledev/new.css';

	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	const links = ['projects', 'workshops', 'contact'];

	const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

	const routeMatchesLink = (route: string | null, link: string) => {
		if (route === null) return false;
		//get the first part of the route
		// routes look like /workshops/other/route
		// we only want to check the first part
		const routeParts = route.split('/');
		const routePart = routeParts[1];
		return routePart === link;
	};
</script>

<header>
	<div class="home">
		<a href="{base}/">Home</a>
	</div>
	<nav>
		{#each links as link}
			{#if routeMatchesLink(data.route, link)}
				<p>
					{capitalize(link)}
				</p>
			{:else}
				<a href="{base}/{link}">{capitalize(link)}</a>
			{/if}
		{/each}
	</nav>
</header>

<main>
	<slot></slot>
</main>

<style global>
	:global(img) {
		max-width: 100%;
		height: auto;
		border-radius: var(--standard-border-radius);
	}
	.home {
		min-width: fit-content;
	}
	header {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}
	header > nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
	header {
		padding-inline: 2rem;
	}
</style>
