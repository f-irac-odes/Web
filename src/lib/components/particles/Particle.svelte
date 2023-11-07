<script>
  import { T, useFrame } from '@threlte/core'
	import { useTexture } from '@threlte/extras';
  import { Collider, RigidBody } from '@threlte/rapier';
  import { BoxGeometry, SpriteMaterial, Vector3, Sprite } from 'three'

  export let position;
  export let rotation;
  export let type = "particle";

  let rigidBody

  const impulse = new Vector3(0, 0, 1);

  const shoot = () => {
    rigidBody.applyImpulse(impulse, true)
  }

  function move(event){
    
  }

  let map = useTexture('src/lib/components/circle_01.png')
</script>

{#if type === "particle"}
   {#await map then value}  
     <T.Group
       {position}
       {rotation}
     >
       <RigidBody>
         <T.Sprite scale={[0.5, 0.5, 1]}>
           <T.SpriteMaterial map={value} color="yellow"/>
         </T.Sprite>
       </RigidBody>
       </T.Group>
   {/await}
{/if}

{#if type === "bullet"}
  <T.Group
  {position}
  {rotation}
  >
  <RigidBody bind:rigidBody>
    <Collider args={[0.5, 0.4]} shape={'ball'}/>
    <T.Mesh>

    </T.Mesh>
  </RigidBody>
  </T.Group>
{/if}

<svelte:window on:click={shoot}/>