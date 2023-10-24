<script>
    import { T } from "@threlte/core";
	import GameStateManager from "./GameStateManager.svelte";
	import CharacterController from "./components/CharacterController.svelte";
	import { BoxGeometry, DirectionalLight } from "three";
	import { Sky } from "@threlte/extras";
	import Map from "./components/Map.svelte";

    let motivation;

</script>



<Sky elevation={-10}/>
<CharacterController/>
<GameStateManager motivationExp={motivation}/>
<Map/>
<T.DirectionalLight castShadow/>
