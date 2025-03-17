<script lang="ts">
	import { base } from '$app/paths';
	import 'simpledotcss';
</script>

<header>
	<nav>
		<a href="{base}/">Home</a>
		<a href="{base}/workshops">Workshops</a>
		<a href="{base}/projects">Projects</a>
		<a href="{base}/contact">Contact</a>
	</nav>
</header>

<main>
	<slot></slot>
</main>

<style global>
	header > nav {
		padding: 1rem 0 0 0;
		margin: 0;
	}
	header {
		padding: 0 0.5rem 0.5rem 0.5rem;
	}
	main {
		padding-top: 1rem;
	}
</style>
