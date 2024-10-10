<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { writings } = data;
</script>

<h1>Hello</h1>

{#each writings as [path, module]}
	<a href={'articles/' + module.metadata.slug + '/'}>{module.metadata.title}</a>
{/each}

{#each writings as [path, module]}
	<svelte:component this={module.default} />
{/each}
