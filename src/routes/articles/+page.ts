import type { PageLoad } from './$types';
import type { Component } from 'svelte';
export const load: PageLoad = async ({ params }) => {
	const articles = await fetchArticles();
	return {
		articles
	};
};

const fetchArticles = async () => {
	const allPostFiles = import.meta.glob<{ default: Component; metadata: Record<string, any> }>(
		'/src/routes/**/*.svx',
		{
			eager: true
		}
	);
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, other]) => {
			const { metadata } = other;
			const postPath = path.slice(11, -4);
			const slug = postPath.split('/').pop();

			return {
				meta: metadata,
				path: postPath,
				slug
			};
		})
	);

	return allPosts;
};
