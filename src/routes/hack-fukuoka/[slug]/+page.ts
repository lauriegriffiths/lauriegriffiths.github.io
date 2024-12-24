import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const article = await import(`../${slug}.svx`);

	return {
		article: article
	};
};
