import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const TARGET_URL = 'https://jyse.org/articles/error-corrected-deep-learning-gregg-shorthand';

export const GET: RequestHandler = () => {
	throw redirect(308, TARGET_URL);
};
