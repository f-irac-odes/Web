<script>
	import { onMount } from "svelte";
	import pageNumber from "../../routes/PageCount";

    export let states = {
        currentState : 'start', 
    };

    function checkStates() {        
        if (states.currentState == 'start') {
            console.log('game just started')
        } else if(states.currentState == 'end'){
            console.log('end game')
            pageNumber = 1;
        }
    }

    onMount(() => checkStates());
</script>

