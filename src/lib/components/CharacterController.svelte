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
    import {characetrs} from './Characters.svelte'
	import { MeshBasicMaterial, PerspectiveCamera } from 'three';
	import { Group } from 'three';

    let mesh;
    let keyboard = {};

    function characetrs_movement() {
        if(keyboard[37]){ //left arrow key
            mesh.rotation.z += Math.PI * 0.01;
        }

        if(keyboard[39]){ //right arrow key
            mesh.rotation.z -= Math.PI * 0.01;
        }

        if(keyboard[87]){ //W key
            mesh.position.x += Math.cos(mesh.rotation.z) * characetrs.Donnie.speed;
            mesh.position.y += Math.sin(mesh.rotation.z) * characetrs.Donnie.speed;
            
            camera.position.x += Math.cos(mesh.rotation.z) * characetrs.Donnie.speed;
            camera.position.y += Math.sin(mesh.rotation.z) * characetrs.Donnie.speed;
        }

        if(keyboard[83]){ //S key
            mesh.position.x -= Math.cos(mesh.rotation.z) * characetrs.Donnie.speed;
            mesh.position.y -= Math.sin(mesh.rotation.z) * characetrs.Donnie.speed;

            camera.position.x -= Math.cos(mesh.rotation.z) * characetrs.Donnie.speed;
            camera.position.y -= Math.sin(mesh.rotation.z) * characetrs.Donnie.speed;
        }
    }

    function keyDown(e) {
        keyboard[e.keyCode] = true;
    }

    function keyUp(e) {
        keyboard[e.keyCode] = false;
    }

    useFrame(() => characetrs_movement());
</script>

<T.PerspectiveCamera>
</T.PerspectiveCamera>

<T.Group bind:ref={mesh}>
    <T.Mesh>
        <T.MeshBasicMaterial/>
        <T.BoxGeometry/>
    </T.Mesh>
</T.Group>

<svelte:window on:keydown|preventDefault={keyDown} on:keydown|preventDefault={keyUp}/>






