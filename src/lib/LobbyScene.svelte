<script>
    import { T } from "@threlte/core";
	import Teleporter from "./models/Teleporter.svelte";
	import { DirectionalLight } from "three";
	import { OrbitControls, Sky } from "@threlte/extras";
</script>

<T.PerspectiveCamera makeDefault position.y={2} position.z={7}>
    <OrbitControls target.y={0.5}/>
</T.PerspectiveCamera>

<T.Mesh position.y={1}>
    <T.MeshStandardMaterial/>
    <T.BoxGeometry/>
</T.Mesh>

<T.Mesh position.y={-1}>
    <T.MeshStandardMaterial color="gray"/>
    <T.BoxGeometry args={[100, 0, 100]}/>
</T.Mesh>

<Teleporter/>
<Teleporter position={[-2, 0, -3]}/>
<Teleporter position={[2, 0, -3]}/>
<Teleporter position={[-5, 0, -7]}/>
<Teleporter position={[5, 0, -7]}/>

<T.DirectionalLight position.z={3}/>
<T.AmbientLight intensity={0.7}/>
<Sky elevation={-10}/>