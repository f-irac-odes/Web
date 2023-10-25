<script>
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, HTML, OrbitControls, Sky } from '@threlte/extras'
	import Teleporter from './models/Teleporter.svelte';
	import { BoxGeometry } from 'three';
	import CharacterController from './Character/CharacterController.svelte';

  let name = 'pizza';
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 10, 10]}
  fov={25}
>
  <OrbitControls
    target.y={0.75}
  />
</T.PerspectiveCamera>

<T.Mesh position.y={0.85}>
  <HTML center position.y={1.25}>
    <p class="p-5 bg-black text-white rounded-md backdrop-blur-sm">{name}</p>
  </HTML>
  <T.MeshStandardMaterial/>
  <T.BoxGeometry/>
</T.Mesh>

<Teleporter position.y={0}/>

<Grid
  position.y={-0.001}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/>

<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>

<Sky elevation={-10}/>

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
/>
<T.AmbientLight intensity={0.2} />
