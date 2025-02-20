<script lang="ts">
	import type { PageData } from './$types';

	import { base } from '$app/paths';
	export let data: PageData;
	const { articles } = data;
</script>

<h1>Articles</h1>

<p>This page is set up as a list of the markdown folders in this folder</p>
<ul>
	{#each articles as { meta, slug }}
		<li>
			<a href={base + '/articles/' + slug}>{meta.title}</a>
		</li>
	{/each}
</ul>
