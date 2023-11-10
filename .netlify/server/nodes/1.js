

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a4b790c4.js","_app/immutable/chunks/scheduler.5db9a357.js","_app/immutable/chunks/index.75e1f86a.js","_app/immutable/chunks/singletons.6eeeb736.js","_app/immutable/chunks/index.bc62802d.js"];
export const stylesheets = [];
export const fonts = [];
