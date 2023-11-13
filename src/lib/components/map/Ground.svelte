<script>
    import { T } from "@threlte/core";
	import { AutoColliders, RigidBody } from "@threlte/rapier";
	import { BoxGeometry, MeshBasicMaterial } from "three";
</script>

<RigidBody type={'fixed'}>
    <AutoColliders>
        <T.Mesh position={[0, -1, 0]} receiveShadow material={new MeshBasicMaterial({color : "#f0f0f0", reflectivity : 0.7})} geometry={new BoxGeometry(100, 1, 100)}/>
    </AutoColliders>
</RigidBody>