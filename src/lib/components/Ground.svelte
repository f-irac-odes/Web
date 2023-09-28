<script>
    import { T } from '@threlte/core'
    import { AutoColliders } from '@threlte/rapier'
</script>

<AutoColliders shape={'cuboid'}>
    <T.Mesh>
        <T.MeshStandardMaterial/>
        <T.BoxGeometry args={[100, 0, 100]}/>
    </T.Mesh>
</AutoColliders>