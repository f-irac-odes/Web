<script>
    import {T, useThrelte} from '@threlte/core'
    import {Environment, OrbitControls} from '@threlte/extras'
    import * as THREE from 'three'
    import CustomRenderer from './CustomRenderer.svelte'
	import CharacterController from './CharacterController.svelte';
	import Ground from './Map/Ground.svelte';
	import { AutoColliders } from '@threlte/rapier';
	import MapMaker from './MapMaker.svelte';

    let {scene} = useThrelte()

    let cube;
</script>

<T.AmbientLight color="white" intensity={0.6}/>
<T.DirectionalLight intensity={0.8}/>

<CharacterController/>
<MapMaker/>
<Ground/>

<Environment path="/env/" files="night.hdr"/>