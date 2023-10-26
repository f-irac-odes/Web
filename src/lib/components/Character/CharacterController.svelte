<script>
    import { T, useFrame } from "@threlte/core";
	import { OrbitControls, Sky } from "@threlte/extras";
	import { AutoColliders } from "@threlte/rapier";
	import { MeshStandardMaterial, Object3D, PerspectiveCamera } from "three";

    let camera;
    let controls;
    let mesh = new Object3D();

    let visible = false;

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
        fov: 13,
        dash : 0.9
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
        
        camera.position.x += Math.cos(mesh.rotation.y) * player.speed ;
        camera.position.z += Math.sin(mesh.rotation.y) * player.speed ;

        states.walk = true;
        states.idle = false;

        state = states.walk
    }

    if(keyboard[83]){ //S key
        mesh.position.z -= Math.cos(mesh.rotation.y) * player.speed;
        mesh.position.x -= Math.sin(mesh.rotation.y) * player.speed;

        camera.position.z -= Math.cos(mesh.rotation.y) * player.speed;
        camera.position.x -= Math.sin(mesh.rotation.y) * player.speed;

        states.walk = true;
        states.idle = false;
    }
    if (keyboard[32]) {
        mesh.position.z -= Math.cos(mesh.rotation.y) * player.dash;
        mesh.position.x -= Math.sin(mesh.rotation.y) * player.dash;

        camera.position.z -= Math.cos(mesh.rotation.y) * player.dash;
        camera.position.x -= Math.sin(mesh.rotation.y) * player.dash;
    }
}
    let realFov = 18 + player.range + player.fov;

    function keyDown(e) {
        keyboard[e.keyCode] = true;
    }

    function keyUp(e) {
        keyboard[e.keyCode] = false;
    }
    const notVisible = () => {
        visible = false
    }

    function Click() {
        visible = true
    }



    useFrame(() => player_movement(), console.log(state))
</script>

<T.PerspectiveCamera  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }} fov={realFov} makeDefault bind:ref={camera} position.z={-5} position.y={20}>
  <OrbitControls/>
</T.PerspectiveCamera>



<T.Group bind:ref={mesh}>
    <T.Mesh rotation.x={-Math.PI/2} receiveShadow position={[0, 0, 0]}>
        <T.CircleGeometry args={[player.range, 40]}/>
        <T.MeshToonMaterial color="red" {visible}/>
    </T.Mesh>
    <AutoColliders shape={'cuboid'}>
        <T.Mesh castShadow>
            <T.MeshToonMaterial/>
            <T.BoxGeometry/>
        </T.Mesh>
    </AutoColliders>
</T.Group>

<Sky elevation={-10}/>

<svelte:window on:keydown|preventDefault={keyDown} on:keyup|preventDefault={keyUp} on:mouseup={notVisible} on:mousedown={Click}/>