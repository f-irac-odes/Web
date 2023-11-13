<script>
  import { T } from '@threlte/core';
	import MapMaker from './MapMaker.svelte';
  import Ground from './map/Ground.svelte'
	import {  Sky } from '@threlte/extras';
</script>

<slot><!-- optional fallback --></slot>
<MapMaker/>

<Ground/>

<T.AmbientLight intensity={0.6} color="white"/>
<T.DirectionalLight position={[10, 20, 0]} intensity={0.6}/>
<Sky/>