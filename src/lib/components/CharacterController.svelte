<script context="module">
    export const states = {
        dead : false,
        running : false,
        walking : false,
        idling : true,
        dancing : false,
        attacking : false,
    }
</script>

<script>
	import { useFrame, T } from '@threlte/core';
	import { HTML, OrbitControls } from '@threlte/extras';
    import {characters} from './Characters.svelte'
	import { Mesh} from 'three';
	import { Group } from 'three';


    let mesh = new Mesh();
    let keyboard = {};

    function player_movement() {
        if(keyboard[37]){ //left arrow key
            mesh.rotation.z += Math.PI * 0.01;
        }

        if(keyboard[39]){ //right arrow key
            mesh.rotation.z -= Math.PI * 0.01;
        }

        if(keyboard[87]){ //W key
            mesh.position.x += Math.cos(mesh.rotation.z) * characters[1].Donnie.speed;
            mesh.position.y += Math.sin(mesh.rotation.z) * characters[1].Donnie.speed;
            
            camera.position.x += Math.cos(mesh.rotation.z) * characters[1].Donnie.speed;
            camera.position.y += Math.sin(mesh.rotation.z) * characters[1].Donnie.speed;
        }

        if(keyboard[83]){ //S key
            mesh.position.x -= Math.cos(mesh.rotation.z) * characters[1].Donnie.speed;
            mesh.position.y -= Math.sin(mesh.rotation.z) * characters[1].Donnie.speed;

            camera.position.x -= Math.cos(mesh.rotation.z) * characters[1].Donnie.speed;
            camera.position.y -= Math.sin(mesh.rotation.z) * characters[1].Donnie.speed;
        }
    }
    function keyDown(e) {
        keyboard[e.keyCode] = true;
    }

    function keyUp(e) {
        keyboard[e.keyCode] = false;
    }
    useFrame(() => player_movement());


</script>

<T.PerspectiveCamera makeDefault position={[0, 10, 13]}>
    <OrbitControls/>
</T.PerspectiveCamera>

<T.Mesh bind:ref={mesh}>
    <HTML position.y={1.25}>
        <p>hi</p>
    </HTML>
    <T.MeshStandardMaterial color="red"/>
    <T.BoxGeometry/>
</T.Mesh>


<svelte:window on:keydown|preventDefault={keyDown} on:keydown|preventDefault={keyUp}/>






