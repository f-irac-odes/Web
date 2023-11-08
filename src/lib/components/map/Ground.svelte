<script>
    import { T } from "@threlte/core";
	import { AutoColliders, RigidBody } from "@threlte/rapier";
    import {whiteWall} from '../materials/materials'
	import { BoxGeometry } from "three";
</script>

<RigidBody type={"fixed"}>
    <AutoColliders>
        <T.Mesh receiveShadow material={whiteWall} geometry={new BoxGeometry(100, 1, 100)} position.y={-1}/>
    </AutoColliders>
</RigidBody>