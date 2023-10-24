<script>
    import { T } from "@threlte/core";
	import GameStateManager from "./GameStateManager.svelte";
	import CharacterController, {states} from "./components/CharacterController.svelte";
	import { BoxGeometry, DirectionalLight } from "three";
	import { Sky } from "@threlte/extras";

    let motivation;

    if (states.dead == true) {
        motivation = "you dead"
    }    
</script>


{#if states.dead === true}
     <div class="w-full h-full fixed variant-glass-surface">
        <p>You loose</p>
     </div>
{/if}

<Sky elevation={-10}/>
<CharacterController/>
<GameStateManager motivationExp={motivation}/>
<T.Mesh position.y={-1} receiveShadow>
    <T.MeshStandardMaterial/>
    <T.BoxGeometry args={[100, 1, 100]}/>
</T.Mesh>

<T.DirectionalLight castShadow/>