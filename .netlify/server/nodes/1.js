

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e25576c2.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/stores.ef773585.js","_app/immutable/chunks/singletons.6cf2cc2a.js","_app/immutable/chunks/index.2665f4a9.js"];
export const stylesheets = [];
export const fonts = [];
