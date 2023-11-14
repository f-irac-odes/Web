<script>
    import {T, useThrelte} from '@threlte/core'
    import {Environment, OrbitControls} from '@threlte/extras'
    import * as THREE from 'three'
    import CustomRenderer from './CustomRenderer.svelte'
	import CharacterController from './CharacterController.svelte';
	import Ground from './Map/Ground.svelte';
	import { AutoColliders } from '@threlte/rapier';

    let {scene} = useThrelte()

    let cube;
</script>
<AutoColliders>
    <T.Mesh bind:ref={cube}>
        <T.MeshToonMaterial color="blue"/>
        <T.BoxGeometry/>
    </T.Mesh>
</AutoColliders>

<CustomRenderer selectedMesh={cube}/>
<T.AmbientLight color="white" intensity={0.6}/>
<T.DirectionalLight intensity={0.8}/>

<CharacterController/>
<Ground/>

<Environment path="/env/" files="night.hdr"/>