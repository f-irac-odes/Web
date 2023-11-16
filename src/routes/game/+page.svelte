<script>
	import { Canvas } from "@threlte/core";
	import Scene from "../../lib/components/Scene.svelte";
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
		class="wrapper bg-surface-600"
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

<!-- ygxxLQ.qKUV6Q:xhX-DtdDQXgV9QweAlfb7DaRmY65yFuPG6fmdJdWJKU -->
<style>
	.wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		color: black;
	}
	.loading {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.bar-wrapper {
		width: 33.333333%;
		height: 10px;
		border: 1px solid black;
		position: relative;
	}
	.bar {
		height: 100%;
		background-color: black;
	}
</style>