import * as server from '../entries/pages/user/_id_/settings/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_id_/settings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/user/[id]/settings/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.0f842e63.js","_app/immutable/chunks/scheduler.9d14641d.js","_app/immutable/chunks/index.730d4688.js"];
export const stylesheets = [];
export const fonts = [];
