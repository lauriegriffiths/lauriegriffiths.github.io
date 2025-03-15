import type { PageLoad } from './$types';
import type { Component } from 'svelte';

import type { ArticleMetadata } from '$lib/types';

export interface Article {
	default: Component;
	metadata: ArticleMetadata;
}

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const article = (await import(`../${slug}.svx`)) as Article;

	return {
		article
	};
};
