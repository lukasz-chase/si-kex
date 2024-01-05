import * as universal from '../entries/pages/user/_id_/orders/_page.ts.js';
import * as server from '../entries/pages/user/_id_/orders/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_id_/orders/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/[id]/orders/+page.ts";
export { server };
export const server_id = "src/routes/user/[id]/orders/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.89d569df.js","_app/immutable/chunks/supabaseClient.087d1e9b.js","_app/immutable/chunks/index.dd787b82.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
