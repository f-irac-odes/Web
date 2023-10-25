<script>
    import { T, useFrame } from "@threlte/core";
	import { OrbitControls, Sky } from "@threlte/extras";
	import { MeshStandardMaterial, Object3D, PerspectiveCamera } from "three";

    let camera;
    let controls;
    let mesh = new Object3D();

    let states = {
        idle : true,
        walk : false,
    }

    let state;
    let bullets = [];

    let keyboard = {}
    let player = {
        speed : 0.3,
        zoom : 0.5,
        range : 10,
    }
    function player_movement() {
    if(keyboard[37]){ //left arrow key
        mesh.rotation.y += Math.PI * 0.01;
    }

    if(keyboard[39]){ //right arrow key
        mesh.rotation.y -= Math.PI * 0.01;
    }

    if(keyboard[87]){ //W key
        mesh.position.x += Math.cos(mesh.rotation.y) * player.speed;
        mesh.position.z += Math.sin(mesh.rotation.y) * player.speed;
        
        camera.position.x += Math.cos(mesh.rotation.y) * player.speed;
        camera.position.z += Math.sin(mesh.rotation.y) * player.speed;

        states.walk = true;
        states.idle = false;

        state = states.walk
    }

    if(keyboard[83]){ //S key
        mesh.position.x -= Math.cos(mesh.rotation.y) * player.speed;
        mesh.position.z -= Math.sin(mesh.rotation.y) * player.speed;

        camera.position.x -= Math.cos(mesh.rotation.y) * player.speed;
        camera.position.z -= Math.sin(mesh.rotation.y) * player.speed;

        states.walk = true;
        states.idle = false;
    }

}

    function keyDown(e) {
        keyboard[e.keyCode] = true;
    }

    function keyUp(e) {
        keyboard[e.keyCode] = false;
    }

    function Click() {
        bullets++;
    }
    useFrame(() => player_movement(), console.log(state))
</script>

<T.PerspectiveCamera makeDefault bind:ref={camera} position.z={-13} position.y={10} fov={25} zoom={player.zoom}>
    <OrbitControls target.y={0}/>
</T.PerspectiveCamera>


<T.Mesh bind:ref={mesh} castShadow>
    <T.MeshToonMaterial/>
    <T.BoxGeometry/>
</T.Mesh>

<Sky/>

<svelte:window on:keydown|preventDefault={keyDown} on:keyup|preventDefault={keyUp}/>