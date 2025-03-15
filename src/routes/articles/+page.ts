import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import type { ArticleMetadata } from '$lib/types';
export const load: PageLoad = async () => {
	const articles = await fetchArticles();
	const filteredArticles = articles.filter((article) => article.meta.published);
	return {
		articles: filteredArticles
	};
};

const fetchArticles = async () => {
	const allPostFiles = import.meta.glob<{ default: Component; metadata: ArticleMetadata }>(
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
