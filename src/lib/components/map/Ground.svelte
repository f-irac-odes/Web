<script>
    import { T } from "@threlte/core";
	import { AutoColliders, RigidBody } from "@threlte/rapier";
    import * as THREE from 'three'
</script>

<RigidBody type={'fixed'}>
    <AutoColliders>
        <T.Mesh position={-1} receiveShadow material={new THREE.MeshStandardMaterial({color: "royalblue"})} geometry={new THREE.BoxGeometry(100, 1, 100)} />
    </AutoColliders>
</RigidBody>