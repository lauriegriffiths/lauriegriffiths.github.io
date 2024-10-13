import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const article = await import(`/src/routes/articles/${slug}.svx`);

	// article.meta contains frontmatter

	return {
		article: article
	};
};

 const fetchArticles = async () => {
	const allPostFiles = import.meta.glob('/src/routes/articles/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
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