<script lang="ts">
	import type { PageData } from './$types';

	import { base } from '$app/paths';
	export let data: PageData;
	const { writings } = data;
</script>

<h1>Hello</h1>
<enhanced:img src="/static/boat.png" alt="A boat" />

{#each writings as [path, module]}
	<a href={base + '/articles/' + module.metadata.slug}>{module.metadata.title}</a>
{/each}

{#each writings as [path, module]}
	<svelte:component this={module.default} />
{/each}
