<script lang="ts">
	import { base } from '$app/paths';
</script>

<nav>
	<ul>
		<li><a href="{base}/">Home</a></li>
		<li><a href="{base}/articles">Articles</a></li>
	</ul>
</nav>

<main>
	<slot></slot>
</main>

<style>
	nav ul {
		list-style: none;
		display: flex;
		gap: 1rem;
	}
</style>
