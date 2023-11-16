<script>
    import {T, useThrelte} from '@threlte/core'
    import {Audio, Environment, HTML, OrbitControls, Sky} from '@threlte/extras'
    import * as THREE from 'three'
    import CustomRenderer from './CustomRenderer.svelte'
	import CharacterController from './CharacterController.svelte';
	import Ground from './Map/Ground.svelte';
    import Icon from '@iconify/svelte';
	import MapMaker from './MapMaker.svelte';
    import Chracter from './models/chracter.svelte'

    let {scene} = useThrelte()

    let cube;
</script>

<HTML fullscreen>
    <button class="btn-icon variant-ringed">
        <Icon icon="mdi-light:home" />
    </button>
</HTML>

<T.AmbientLight color="white" intensity={0.6}/>
<T.DirectionalLight intensity={0.8}/>

<CharacterController>
    <Chracter scale={0.5}/>
</CharacterController>
<MapMaker/>
<Ground/>

<Sky/>

<!-- <Audio src={'/audio/music.mp3'} autoplay loop/> -->