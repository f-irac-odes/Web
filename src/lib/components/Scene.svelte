<script>
  import { T } from '@threlte/core';
  import Character from './models/chracter.svelte'
	import MapMaker from './MapMaker.svelte';
	import CharacterController from './CharacterController.svelte';
  import Ground from './map/Ground.svelte'
	import { DirectionalLight } from 'three';
	import { Environment } from '@threlte/extras';
</script>

<CharacterController>
  <Character scale={0.5}/>
</CharacterController>

<MapMaker/>

<Ground/>

<T.AmbientLight intensity={0.4}/>
<T.DirectionalLight castShadow position={[1, 20, 0]} intensity={0.5}/>