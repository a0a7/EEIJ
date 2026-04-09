import { ERROR_CORRECTED_DEEP_LEARNING_GREGG_SHORTHAND_URL } from '$lib/constants/redirects';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	throw redirect(308, ERROR_CORRECTED_DEEP_LEARNING_GREGG_SHORTHAND_URL);
};
