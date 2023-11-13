<script>
    import { T } from "@threlte/core";
	import { AutoColliders, RigidBody } from "@threlte/rapier";
	import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial } from "three";
</script>

<RigidBody type={'fixed'}>
    <AutoColliders>
        <T.Mesh position={[0, -1, 0]} receiveShadow material={new MeshStandardMaterial({color : "white", roughness: 0.7})} geometry={new BoxGeometry(100, 1, 100)}/>
    </AutoColliders>
</RigidBody>