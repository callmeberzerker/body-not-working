import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	console.log('entering endpoint');
	const parsed = await request.json();
	console.log('parsed is', parsed);
	return new Response(JSON.stringify(parsed));
};
