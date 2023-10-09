<script>
	import { onMount } from "svelte";

    export let states = {
        currentState : 'start', 
    };

    function checkStates() {        
        if (states.currentState == 'start') {
            console.log('game just started')
        } else if(states.currentState == 'end'){
            console.log('end game')
        }
    }

    function check(object, min, max) {
        while (object > min || object < max){
            states.currentState = 'start'
        }
    }

    onMount(() => checkStates());
</script>

{#if states.currentState === 'start'}
     <slot name="start"><!-- optional fallback --></slot>
{:else if states.currentState === 'end'}
     <slot name="end"><!-- optional fallback --></slot>
{/if}

