<script>
  import { Canvas } from '@threlte/core'
  import {  Suspense, useProgress } from '@threlte/extras';
  import {Debug, World} from '@threlte/rapier'
  import Scene from './Scene.svelte'
  import { tweened } from 'svelte/motion'
	import { fade } from 'svelte/transition'

  const { progress } = useProgress()
	const tweenedProgress = tweened($progress, {
		duration: 800
	})
	$: tweenedProgress.set($progress)

</script>

{#if $tweenedProgress < 1}
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


<Canvas>
  <World>
    <Debug/>
    <Suspense>
      <Scene />
    </Suspense>
  </World>
</Canvas>
<style>
  .wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgb(112, 11, 184);
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
		width: 33.333%;
		height: 10px;
		border: 1px solid black;
		position: relative;
	}
  /* .bar-wrapper-in-game {
		width: 33px;
		height: 10px;
		border: 1px solid black;
    border-radius: 6px;
		position: relative;
	} */
	.bar {
		height: 100%;
    border-radius: 6px;
		background-color: rgb(4, 216, 8);
	}
</style>

