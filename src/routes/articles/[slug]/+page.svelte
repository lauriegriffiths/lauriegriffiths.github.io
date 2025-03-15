<script lang="ts">
	export let data;
	const { article } = data;
</script>

<h1>{article.metadata.title}</h1>
<svelte:component this={article.default} />
