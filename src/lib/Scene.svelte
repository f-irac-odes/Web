<script>
    import { T } from "@threlte/core";
	import GameStateManager from "./GameStateManager.svelte";
	import CharacterController, {states} from "./components/CharacterController.svelte";

    let motivation;

    if (states.dead == true) {
        motivation = "you dead"
    }    
</script>

<CharacterController/>
<GameStateManager motivationExp={motivation}/>