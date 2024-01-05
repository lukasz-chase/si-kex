import * as universal from '../entries/pages/equipment/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/equipment/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/equipment/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.7d11c4ec.js","_app/immutable/chunks/supabaseClient.087d1e9b.js","_app/immutable/chunks/index.dd787b82.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
