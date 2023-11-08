<script>
    import { T } from "@threlte/core";
	import { whiteWall } from "../materials/materials";
	import { BoxGeometry } from "three";
	import { AutoColliders } from "@threlte/rapier";
	import Barrel from "./barrel.svelte";
	import Crate from "./crate.svelte";
	import Flowers from "./flowers.svelte";

    export let map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 2, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
    ]
</script>

{#each map as line, z}
     {#each line as block, x}
         {#if block === 1}
         <AutoColliders>
             <T.Mesh castShadow material={whiteWall} geometry={new BoxGeometry(1, 1.25, 1)} position={[x, 0, z]}/>
         </AutoColliders>
         {:else if block === 2}
         <T.Group position={[x, 0, z]}>
             <Barrel/>
         </T.Group>
        {:else if block === 3}
        <T.Group position={[x, 0, z]}>
            <Crate/>
        </T.Group>
            {:else if block === 4}
            <T.Group position={[x, 0, z]}>
                <Flowers/>
            </T.Group>
         {/if}
     {/each}
{/each}

