<script>
    import { T } from "@threlte/core";
	import { Mesh, MeshStandardMaterial } from "three";

    let map = [
        {
            layer: 1,
            widht: 4, 
            map : [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
        },
        {
            layer: 2, 
            widht: 1,
            map : [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
        },
        {
            layer: 1, 
            widht: 1,
            map : [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
        }
    ]
</script>

{#each map as block, z}
    {#each  block as item, x}            
    <T.Mesh position.x={x} position.z={z}>
        <T.MeshStandardMaterial/>
        <T.BoxGeometry args={map[z].widht}/>
    </T.Mesh>
    {/each}
{/each}