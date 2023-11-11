<script>
    import { T, useFrame } from '@threlte/core'
    import { ContactShadows, Float, Grid, HTML, interactivity } from '@threlte/extras'
    import Key from './models/key.svelte'
    import { spring } from 'svelte/motion'
	import { AmbientLight, DirectionalLight } from 'three';
  
    interactivity()
    const scale = spring(7)
  
    let rotation = 0
    useFrame((state, delta) => {
      rotation += delta
    })
  </script>
  
  <T.PerspectiveCamera
    makeDefault
    position={[10, 10, 10]}
    on:create={({ ref }) => {
      ref.lookAt(0, 1, 0)
    }}
  />
  

<Float
  floatIntensity={5}
  rotationIntensity={2}
>
  <T.Group
    rotation.y={rotation}
    position.y={1}
    scale={$scale}
    on:pointerenter={() => scale.set(8.5)}
    on:pointerleave={() => scale.set(7)}
  >
   <Key/>
  </T.Group>
</Float>
<T.AmbientLight intensity={0.4}/>
<T.DirectionalLight/>

<Grid cellColor="white" sectionColor="white" cellThickness={0} sectionThickness={1} />
<ContactShadows
  opacity={1}
  scale={10}
  blur={1}
  far={10}
  resolution={256}
  color="#000000"
/>

