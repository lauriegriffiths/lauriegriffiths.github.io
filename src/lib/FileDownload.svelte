<script lang="ts">
	import { base } from '$app/paths';
	export let filename;
</script>

<a href={base + '/static/' + filename}>{filename}</a>
