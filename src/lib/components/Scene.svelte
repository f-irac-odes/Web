<script>
  import { T, useThrelte } from '@threlte/core'
  import { Align, ContactShadows, Float, Grid, HTML, OrbitControls, Sky, TransformControls, interactivity } from '@threlte/extras'
  import {characterChosed} from './stores'
	import Teleporter from './Teleporter.svelte';
	import Building from './Building.svelte';
	import { FogExp2 } from 'three';

  interactivity();

  let characterLink;

  const clickOnBehalf = (object) => {
    object.click()
  }

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
  position={[0, 5, 15]}
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

<TransformControls>
  <Align z={false} y={false}>
    <Building scale={2} position.z={-6} position.x={-2}/>
    <Building scale={2} position.z={-6} position.x={0}/>
    <Building scale={2} position.z={-6} position.x={2}/>
  </Align>
</TransformControls>

<div class="fixed">
  <a href="/play">
    Play
  </a>
</div>



<T.Mesh position.y={0.85} castShadow on:click(clickOnBehalf(characterLink))>
  <T.MeshStandardMaterial color={character.color}/>
  <HTML>
    <a id="characterLink" class="hidden" href="/characters">Character</a>
  </HTML>
  <T.BoxGeometry/>
</T.Mesh>

<Teleporter/>

<T.DirectionalLight intensity={1} castShadow position.y={100} position.z={6}/>
