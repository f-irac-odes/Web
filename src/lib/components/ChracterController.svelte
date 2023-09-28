<script>
    import { T } from '@threlte/core'
	import { Collider } from '@threlte/rapier';
    
    let mesh;
</script>

<T.Group>
    <Collider shape={'roundConvexMesh'}/>
    <slot></slot>
</T.Group>
