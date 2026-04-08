import { error } from '@sveltejs/kit';
import { getArticleBySlug, getIssueById } from '$lib/data/journal';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const article = getArticleBySlug('error-corrected-deep-learning-gregg-shorthand');

	if (!article) {
		throw error(404, 'Article not found');
	}

	const issue = getIssueById(article.issueId);

	if (!issue) {
		throw error(404, 'Issue not found');
	}

	return { article, issue };
};
