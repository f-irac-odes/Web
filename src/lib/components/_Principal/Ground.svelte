<script>
    import { T } from '@threlte/core'
    import { AutoColliders } from '@threlte/rapier'
</script>


<T.Mesh position.y={-1} receiveShadow>
    <T.MeshStandardMaterial color="#330066"/>
    <T.BoxGeometry args={[100, 0, 100]}/>
</T.Mesh>