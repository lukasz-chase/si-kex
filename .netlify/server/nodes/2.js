

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.95203ef7.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js"];
export const stylesheets = [];
export const fonts = [];
