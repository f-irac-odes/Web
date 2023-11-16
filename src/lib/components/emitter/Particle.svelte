<script
  context="module"
>
  const geometry = new BoxGeometry(0.25, 0.25, 0.25)
  const material = new MeshStandardMaterial()

</script>
<script>
    import { T } from '@threlte/core'
    import { Collider, RigidBody, useRigidBody } from '@threlte/rapier'
    import { BoxGeometry, MeshStandardMaterial, Vector3 } from 'three'

    export let position
    export let rotation
    export let rigidBody = useRigidBody()
</script>

<T.Group
  {position}
  {rotation}
>
  <RigidBody type={'kinematicPosition'} bind:rigidBody>
    <Collider
      shape={'cuboid'}
      args={[0.125, 0.125, 0.125]}
    />
    <T.Mesh
      castShadow
      receiveShadow
      {geometry}
      {material}
    />
  </RigidBody>
</T.Group>