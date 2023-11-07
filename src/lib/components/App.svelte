<script>
  import { Canvas } from '@threlte/core'
  import {World, Debug} from '@threlte/rapier'
  import Scene from './Scene.svelte'
</script>

<Canvas>
  <World>
    <Debug/>
    <Scene />
  </World>
</Canvas>
