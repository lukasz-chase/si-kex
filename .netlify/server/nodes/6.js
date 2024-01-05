

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/finalization/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.f680c5ec.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/navigation.3da82e3d.js","_app/immutable/chunks/singletons.6cf2cc2a.js","_app/immutable/chunks/index.2665f4a9.js","_app/immutable/chunks/CartStore.b8784ec5.js"];
export const stylesheets = [];
export const fonts = [];
