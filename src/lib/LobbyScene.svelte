<script>
    import { T } from "@threlte/core";
	import Teleporter from "./models/Teleporter.svelte";
	import { DirectionalLight } from "three";
	import { Sky } from "@threlte/extras";
</script>

<T.PesrpectiveCamera makeDefault position.y={2} position.z={7}/>

<T.Mesh>
    <T.MeshStandardMaterial/>
    <T.BoxGeometry/>
</T.Mesh>

<Teleporter/>
<Teleporter position={[-2, 0, -3]}/>
<Teleporter position={[2, 0, -3]}/>
<Teleporter position={[-5, 0, -7]}/>
<Teleporter position={[5, 0, -7]}/>

<T.DirectionalLight/>
<Sky elevation={-10}/>