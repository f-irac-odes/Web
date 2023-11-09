<script>
  import { T } from '@threlte/core'
	import { useTexture } from '@threlte/extras';
  import {  RigidBody } from '@threlte/rapier';

  export let position;
  export let rotation;

  let map = useTexture('src/lib/components/circle_01.png')
</script>

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

