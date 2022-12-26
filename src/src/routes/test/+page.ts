import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const res = await fetch('/api/member');
    const item = await res.json();
    
    return { item };
}) satisfies PageLoad;
