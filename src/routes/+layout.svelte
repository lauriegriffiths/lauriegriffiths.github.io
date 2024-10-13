<script lang="ts">
	import { base } from '$app/paths';
	//import simple css
	import 'simpledotcss';
</script>

<header>
	<nav>
		<a href="{base}/">Home</a>
		<a href="{base}/articles">Articles</a>
		<a href="{base}/projects">Projects</a>
	</nav>
</header>

<main>
	<slot></slot>
</main>

<style>
</style>
