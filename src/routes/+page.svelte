<script>
	import { Canvas } from "@threlte/core";
	import Scene from "../lib/components/Scene.svelte";
	import { Suspense } from "@threlte/extras";
	import { Debug, World } from "@threlte/rapier";

</script>
<div class="w-[100vw] h-[100vh] fixed overflow-hidden">
	<Canvas>
		<Suspense final>
			<World>
				<Debug/>
				<Scene/>
			</World>
		</Suspense>
	</Canvas>
</div>