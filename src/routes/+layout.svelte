<script lang="ts">
	import { base } from '$app/paths';
	//import simple css
	import 'simpledotcss';
</script>

<header>
	<nav>
		<a href="{base}/">Home</a>
		<a href="{base}/articles">Articles</a>
		<a href="{base}/tools">Tools</a>
		<!-- <a href="{base}/projects">Projects</a> -->
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
