<script lang="ts">
	import type { PageData } from './$types';

	import { base } from '$app/paths';
	export let data: PageData;
	const { articles } = data;
</script>

<h1>Articles</h1>
<!-- <enhanced:img src="/static/boat.png" alt="A boat" /> -->

<ul>
	{#each articles as { meta, slug }}
		<li>
			<a href={base + '/articles/' + slug}>{meta.title}</a>
		</li>
	{/each}
</ul>

<!-- {#each writings as [path, module]}
	<svelte:component this={module.default} />
{/each} -->
