const c = [
	() => import("../../../src/routes/$layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/companies/$layout.svelte"),
	() => import("../../../src/routes/companies/index.svelte"),
	() => import("../../../src/routes/companies/[category].svelte"),
	() => import("../../../src/routes/account.svelte"),
	() => import("../../../src/routes/company/[id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/companies/index.svelte
	[/^\/companies\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/companies/[category].svelte
	[/^\/companies\/([^/]+?)\/?$/, [c[0], c[3], c[5]], [c[1]], (m) => ({ category: d(m[1])})],

	// src/routes/account.svelte
	[/^\/account\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/company/[id].svelte
	[/^\/company\/([^/]+?)\/?$/, [c[0], c[7]], [c[1]], (m) => ({ id: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];