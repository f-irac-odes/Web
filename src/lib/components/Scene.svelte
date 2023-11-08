<script>
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras'
  import Ground from './map/Ground.svelte'
	import Mapmaker from './map/Mapmaker.svelte';
	import CharacterController from './CharacterController.svelte';
	import Threlte from './models/threlte.svelte';
</script>

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
  castShadow
/>
<T.AmbientLight intensity={0.3} color="purple"/>

<!-- Character -->
<CharacterController>
  <Threlte/>
</CharacterController>

<!-- Map -->
<Mapmaker/>
<!-- Ground -->
<Ground/>

