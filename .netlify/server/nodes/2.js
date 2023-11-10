

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0fc0fc1b.js","_app/immutable/chunks/scheduler.5db9a357.js","_app/immutable/chunks/index.75e1f86a.js","_app/immutable/chunks/index.bc62802d.js"];
export const stylesheets = ["_app/immutable/assets/2.eb8f2aec.css"];
export const fonts = [];
