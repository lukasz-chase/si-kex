import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.5b41cf02.js","_app/immutable/chunks/index.dd787b82.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/navigation.3da82e3d.js","_app/immutable/chunks/singletons.6cf2cc2a.js","_app/immutable/chunks/index.2665f4a9.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CartStore.b8784ec5.js"];
export const stylesheets = ["_app/immutable/assets/0.745edbd8.css"];
export const fonts = [];
