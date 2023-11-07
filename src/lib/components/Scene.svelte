<script>
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, Sky } from '@threlte/extras'
	import Ground from './map/Ground.svelte';
  import Character from './models/chracter.svelte'
	import CharacterController from './CharacterController.svelte';
	import Mapmaker from './map/Mapmaker.svelte';
</script>

<T.DirectionalLight
  intensity={0.4}
  color="purple"
  position.x={5}
  position.y={10}
  castShadow
/>
<T.AmbientLight intensity={0.2} color="blue" />

<!-- character -->
<CharacterController>
  <Character scale={0.5}/>
</CharacterController>

<!-- Map -->
<Mapmaker/>

<!-- Ground -->
<Ground/>

<!-- Sky -->
<Sky elevation={-2}/>