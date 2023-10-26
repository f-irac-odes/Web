<script>
    import { T } from "@threlte/core";
	import CharacterController from "./Character/CharacterController.svelte";
	import { AutoColliders } from "@threlte/rapier";
    let map =[
        [1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 2, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 0, 1],
        ]
</script>

{#each map as block, z}
    {#each block as line, x}
         {#if line == 1}
         <AutoColliders>
             <T.Mesh castShadow position={[x, 0, z]}>
                <T.MeshToonMaterial/>
                <T.BoxGeometry/>
            </T.Mesh>  
        </AutoColliders>
            {:else if  line == 2}
                <CharacterController/>
         {/if}
    {/each}
{/each}
