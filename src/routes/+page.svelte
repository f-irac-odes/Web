<script>
	import { Canvas } from "@threlte/core";
	import Scene from "../lib/components/Scene.svelte";
	import { Suspense, useProgress } from "@threlte/extras";
	import { tweened } from 'svelte/motion'
	import { fade } from 'svelte/transition'
	import { Debug, World } from "@threlte/rapier";

	const { progress, active } = useProgress()
	const tweenedProgress = tweened($progress, {
		duration: 800
	})
	$: tweenedProgress.set($progress)
</script>
	{#if $tweenedProgress < 1 && active}
		<div
		transition:fade|local={{
			duration: 200
		}}
		class="wrapper"
	>
		<p class="loading">Loading</p>
		<div class="bar-wrapper">
			<div class="bar" style="width: {$tweenedProgress * 100}%" />
		</div>
	</div>
{/if}
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