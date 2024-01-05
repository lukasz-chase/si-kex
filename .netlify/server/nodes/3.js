import * as server from '../entries/pages/auth/_type_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_type_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/[type]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.17e8dac2.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/forms.e7c523e0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.6cf2cc2a.js","_app/immutable/chunks/index.2665f4a9.js","_app/immutable/chunks/navigation.3da82e3d.js","_app/immutable/chunks/stores.ef773585.js"];
export const stylesheets = [];
export const fonts = [];
