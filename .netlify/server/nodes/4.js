import * as server from '../entries/pages/equipment/create/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/equipment/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/equipment/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.7277b3d9.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/forms.e7c523e0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.6cf2cc2a.js","_app/immutable/chunks/index.2665f4a9.js","_app/immutable/chunks/navigation.3da82e3d.js","_app/immutable/chunks/index.518634a0.js"];
export const stylesheets = ["_app/immutable/assets/4.fb584b1b.css"];
export const fonts = [];
