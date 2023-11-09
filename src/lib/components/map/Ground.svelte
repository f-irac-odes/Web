<script>
    import { T } from "@threlte/core";
	import { AutoColliders, RigidBody } from "@threlte/rapier";
	import { BoxGeometry, MeshStandardMaterial } from "three";
</script>

<RigidBody type={'fixed'}>
    <AutoColliders>
        <T.Mesh position={[0, -1, 0]} receiveShadow material={new MeshStandardMaterial({color : "#f0f0f0"})} geometry={new BoxGeometry(100, 1, 100)}/>
    </AutoColliders>
</RigidBody>