<script>
    import {T} from '@threlte/core'
	import { AutoColliders } from '@threlte/rapier';
</script>

<AutoColliders>
    <T.Mesh position.y={-1}>
        <T.MeshStandardMaterial/>
        <T.BoxGeometry args={[100, 1, 100]}/>
    </T.Mesh>
</AutoColliders>