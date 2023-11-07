<script>
    import { T } from "@threlte/core";
	import { Collider } from "@threlte/rapier";
	import { BoxGeometry, Mesh, MeshMatcapMaterial } from "three";

    export let position = [];
    export let closeValue = -1; 
    export let rotation;
    let door = new Mesh();
</script>

<T.Group {position} {rotation}>
    <Collider sensor args={[1, 1, 1]} shape={'cuboid'} on:sensorenter={() => {
        door.position.x -= closeValue
    }} on:sensorexit={() => {
        door.position.x += closeValue
    }}/>
    <T.Mesh bind:ref={door}>
        <T.MeshStandardMaterial color="brown" roughness={0.3}/>
        <T.BoxGeometry args={[1, 1, 0.3]}/>
    </T.Mesh>
</T.Group>
