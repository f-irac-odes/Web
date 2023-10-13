<script>
  import { goto } from '$app/navigation';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

  const go = () => {
    goto("/_character");
  }
    import { T, useFrame } from '@threlte/core'
    import { Grid, Sky, Suspense, interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'
  
    interactivity()
    const scale = spring(1)
    let rotation = 0

  </script>
  
  <T.PerspectiveCamera
    makeDefault
    position={[10, 10, 10]}
    on:create={({ ref }) => {
      ref.lookAt(0, 1, 0)
    }}
  />
  
  <T.DirectionalLight position={[0, 10, 10]} castShadow />
  <Sky elevation={-10}/>
  <Grid sectionColor="white" cellColor="white"/>
  
  <T.Mesh
    rotation.y={rotation}
    position.y={1}
    scale={$scale}
    
    on:click={go}
    castShadow
  >
    <T.BoxGeometry args={[1, 2, 1]} />
    <T.MeshStandardMaterial color="hotpink" />
  </T.Mesh>
  
  <T.Mesh rotation.x={-Math.PI/2} receiveShadow>
    <T.CircleGeometry args={[4, 40]}/>
    <T.MeshStandardMaterial color="white" />
  </T.Mesh>
  
  <Suspense final>
    <ProgressRadial value={undefined} />
  </Suspense>