<script>
  import { T, useThrelte } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, Sky } from '@threlte/extras'
  import {characterChosed} from './stores'
	import Teleporter from './Teleporter.svelte';
	import { FogExp2 } from 'three';

  let {scene} = useThrelte();
  scene.fog = new FogExp2('#ddd', 0.015);

  let character;
  characterChosed.subscribe((value) => {
    character = value;
  })

  console.log(character);

</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 10, 15]}
  fov={15}
>
  <OrbitControls
    enableDamping
    target.y={0.5}
  />
</T.PerspectiveCamera>


<Sky elevation={-10}/>

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

<T.Mesh position.y={0.85} castShadow>
  <T.MeshStandardMaterial color={character.color}/>
  <T.BoxGeometry/>
</T.Mesh>

<Teleporter/>

<T.DirectionalLight intensity={0.8} castShadow position.y={10}/>
