<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
	import { Debug, World } from '@threlte/rapier';
  import { tweened } from 'svelte/motion'
	import { fade } from 'svelte/transition'
  import Character from './models/chracter.svelte'
  import CharacterController from './CharacterController.svelte';
	import { Suspense, useProgress } from '@threlte/extras';

  const { progress } = useProgress()
	const tweenedProgress = tweened($progress, {
		duration: 800
	})
	$: tweenedProgress.set($progress)

</script>

<!-- {#if $tweenedProgress < 1}
	<div
		transition:fade|local={{
			duration: 200
		}}
		class="wrapper"
	>
		<p class="loading">Get ready</p>
		<div class="bar-wrapper">
			<div class="bar" style="width: {$tweenedProgress * 100}%" />
		</div>
	</div>
{/if} -->
<Canvas colorManagementEnabled >
  <Suspense final>
    <World>
    <Debug/>
    <Scene>
      <CharacterController>
        <Character scale={0.5}/>
      </CharacterController>
    </Scene>
  </World>
  </Suspense>
</Canvas>

<!-- <style>
  .wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(80, 11, 184, 0.561);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		color: black;
	}
	.loading {
		font-size: 40px;
    font-family: sans-serif;
    text-transform: uppercase;
		line-height: 1.25rem;
    font-weight: bold;
    color: white;
	}
	.bar-wrapper {
		width: 33.333%;
		height: 30px;
		border: 1px solid black;
		position: relative;
	}
	.bar {
		height: 100%;
    border-radius: 6px;
    border-color: black;
		background-color: rgb(216, 107, 4);
	}
</style> -->