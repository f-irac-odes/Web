<script>
  import { T } from '@threlte/core';
  import Character from './models/chracter.svelte'
	import MapMaker from './MapMaker.svelte';
	import CharacterController from './CharacterController.svelte';
  import Ground from './map/Ground.svelte'
</script>

<CharacterController>
  <Character/>
</CharacterController>

<MapMaker/>

<Ground/>

<T.AmbientLight intensity={0.4}/>