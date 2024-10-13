<script lang="ts">
	import type { PageData } from './$types';

	import { base } from '$app/paths';
	export let data: PageData;
	const { article } = data;
</script>

<svelte:component this={article.default} />
