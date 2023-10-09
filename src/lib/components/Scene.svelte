<script>
  import {T, useThrelte} from '@threlte/core'
  import CanvasPage from './_Pages/CanvasPage.svelte'
  import Button from './_Widgets/Button.svelte'
  import Ground from './_Principal/Ground.svelte'
	import { ContactShadows, OrbitControls } from '@threlte/extras';
  import * as THREE from 'three'

</script>

<CanvasPage bg_color="#8806ce">
  <div slot="3d">
    <T.PerspectiveCamera makeDefault position.z={7} position.y={2}>
      <OrbitControls/>
    </T.PerspectiveCamera>

    <T.Mesh position.y={0.6} receiveShadow>
      <T.MeshStandardMaterial color="red"/>
      <T.BoxGeometry/>
    </T.Mesh>

    <Ground/>
    <T.AmbientLight intensity={1.4}/>
    <T.DirectionalLight position.z={4} castShadow/>
    <ContactShadows
      scale={10}
      blur={2}
      far={2.5}
      opacity={0.5}
    />
  </div>

  <div slot="html">
    <nav class="flex flex-row justify-start ">
      <Button>Hello</Button>
    </nav>
  </div>
</CanvasPage>