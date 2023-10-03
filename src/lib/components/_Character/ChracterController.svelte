<script>
    import { T, useThrelte } from '@threlte/core'
	import { Collider } from '@threlte/rapier';
    import { OrbitControls} from '@threlte/extras'
    import * as THREE from 'three';
    import GameManager from './GameManager.svelte'
    
    let position = new THREE.Vector3(0, 0, 0);
    let rotation = new THREE.Vector3(0, 0, 0);
    let keyboard = {};

    let {camera} = useThrelte();

    let player = {
        speed: 0.2,
    };

    let controls;

    function player_movement() {
    if(keyboard[37]){ //left arrow key
        rotation.z += Math.PI * 0.01;
    }

    if(keyboard[39]){ //right arrow key
        rotation.z -= Math.PI * 0.01;
    }

    if(keyboard[87]){ //W key
        position.x += Math.cos(rotation.z) * player.speed;
        position.y += Math.sin(rotation.z) * player.speed;
        
        position.x += Math.cos(rotation.z) * player.speed;
        position.y += Math.sin(rotation.z) * player.speed;

        console.log(position);
    }

    if(keyboard[83]){ //S key
        position.x -= Math.cos(rotation.z) * player.speed;
        position.y -= Math.sin(rotation.z) * player.speed;

        camera.position.x -= Math.cos(rotation.z) * player.speed;
        camera.position.y -= Math.sin(rotation.z) * player.speed;

        console.log(position);
    }

    console.log(position);
    console.log();
}


function keyDown(e) {
    keyboard[e.keyCode] = true;
}

function keyUp(e) {
    keyboard[e.keyCode] = false;
}

player_movement();

</script>


<GameManager/>

<T.PerspectiveCamera bind:ref={camera} makeDefault position={[0, 11, 13]}>
    <OrbitControls bind:ref={controls}/>
</T.PerspectiveCamera>

<T.Group {position} {rotation}>
    <slot></slot>
</T.Group>

<svelte:window on:keydown={keyDown} on:keyup={keyUp}/>