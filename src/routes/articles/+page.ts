import type { PageLoad } from './$types';
import type { SvelteComponent } from 'svelte';
export const load: PageLoad = ({ params }) => {
	const glob_import = import.meta.glob<{ default: SvelteComponent; metadata: Record<string, any> }>(
		'/src/routes/**/*.svx',
		{
			eager: true
		}
	);
	const writings = Object.entries(glob_import);
	console.log({ writings });
	return {
		writings
	};
};
