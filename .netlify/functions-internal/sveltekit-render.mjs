import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","models/threlte.glb"]),
	mimeTypes: {".png":"image/png",".glb":"model/gltf-binary"},
	_: {
		client: {"start":"_app/immutable/entry/start.cebced2d.js","app":"_app/immutable/entry/app.20d3ec32.js","imports":["_app/immutable/entry/start.cebced2d.js","_app/immutable/chunks/scheduler.5db9a357.js","_app/immutable/chunks/singletons.6eeeb736.js","_app/immutable/chunks/index.bc62802d.js","_app/immutable/entry/app.20d3ec32.js","_app/immutable/chunks/scheduler.5db9a357.js","_app/immutable/chunks/index.75e1f86a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
