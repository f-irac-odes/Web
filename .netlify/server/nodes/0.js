

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.45440222.js","_app/immutable/chunks/scheduler.5db9a357.js","_app/immutable/chunks/index.75e1f86a.js"];
export const stylesheets = ["_app/immutable/assets/0.087d0375.css"];
export const fonts = [];
