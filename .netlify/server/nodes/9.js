import * as universal from '../entries/pages/item/_id_/_page.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/item/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/item/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/9.933ec402.js","_app/immutable/chunks/supabaseClient.087d1e9b.js","_app/immutable/chunks/index.dd787b82.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/index.518634a0.js","_app/immutable/chunks/CartStore.b8784ec5.js","_app/immutable/chunks/index.2665f4a9.js","_app/immutable/chunks/check.8ace4da1.js"];
export const stylesheets = [];
export const fonts = [];
