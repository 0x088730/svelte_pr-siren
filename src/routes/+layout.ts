export function load({ url }) {
	return {
		url: url.pathname,
	};
}

export let ssr = false;