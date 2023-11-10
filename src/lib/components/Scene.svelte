<script>
  import { T } from '@threlte/core';
	import MapMaker from './MapMaker.svelte';
  import Ground from './map/Ground.svelte'
	import { DirectionalLight } from 'three';
	import { Environment } from '@threlte/extras';
</script>

<slot><!-- optional fallback --></slot>
<MapMaker/>

<Ground/>

<T.AmbientLight intensity={0.4}/>
<T.DirectionalLight castShadow position={[1, 20, 0]} intensity={0.5}/>