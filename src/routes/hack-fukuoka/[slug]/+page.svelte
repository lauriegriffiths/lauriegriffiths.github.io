<script lang="ts">
	import type { PageData } from './$types';

	import { base } from '$app/paths';
	export let data: PageData;
	const { article } = data;
</script>

<h1>{article.metadata.title}</h1>
<svelte:component this={article.default} />
