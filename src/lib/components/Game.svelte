<script>
    import { T } from "@threlte/core";
	import CharacterController from "./Character/CharacterController.svelte";
	import { DirectionalLight } from "three";
	import Map from "./Map.svelte";
</script>

<Map/>
<T.Mesh position.y={-1} receiveShadow>
    <T.MeshStandardMaterial/>
    <T.BoxGeometry args={[100, 1, 100]}/>
</T.Mesh>

<T.DirectionalLight castShadow intensity={0.6}/>