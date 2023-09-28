<script>
  import { T, useThrelte } from '@threlte/core'
  import { OrbitControls, Sky } from '@threlte/extras'
	import Ground from './Ground.svelte';
  import * as THREE from 'three';

  let {scene} = useThrelte();
  scne.fog = new THREE.Fog('#ffffff');
</script>

<T.PerspectiveCamera makeDefault position={[0, 11, 13]}>
  <OrbitControls/>
</T.PerspectiveCamera>

<Sky elevation={-5} turbidity={20}/>
<Ground/>

<T.AmbientLight intensity={0.2}/>