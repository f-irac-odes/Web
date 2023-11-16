<script>
	import { T, useFrame } from "@threlte/core";
	import { Collider,  RigidBody, useRapier, useRigidBody } from "@threlte/rapier";
	import { Vector3, Group } from "three";
    import {user} from './user'
	import Entity from "./Entity/Entity.svelte";

    // variables
    let rigidBody;
    let life = user.gameStats.character_chose.hitPoints
    let character = new Group;
    export let position = [0, 1, 0];
    let changeRotation;
    let camera;
    let controller;
	import Emitter from "./emitter/Emitter.svelte";


    let states = {
        isWalking : false,
        isShooting : false
    }
    let x = 0 , z = 18;

    
    function cameraFollow(){
        const characterWorldPosition = character.getWorldPosition(new Vector3())
        x = characterWorldPosition.x + 0.5,
        z = characterWorldPosition.z + 14
        const targetLookAt = new Vector3(characterWorldPosition.x, 0, characterWorldPosition.z)

        camera.lookAt(targetLookAt)
    }

    let keyboard = {
        dash : false,
        left: false,
        right : false,
        up: false,
        down: false,
    }

    // functions
    function keyDown(e) {
        switch(e.keyCode){
            case 32:
                keyboard.dash = true;
                states.isWalking = true
                break
            case 87:
                keyboard.up = true;
                states.isWalking = true
                break
            case 83:
                keyboard.down = true;
                states.isWalking = true
                break
            case 65:
                keyboard.left = true;
                states.isWalking = true
                break
            case 68:
                keyboard.right = true;
                states.isWalking = true
                break
        }
    }
    function keyUp(e) {
        switch(e.keyCode){
            case 32:
                keyboard.dash = false;
                states.isWalking = false
                break
            case 87:
                keyboard.up = false;
                states.isWalking = false
                break
            case 83:
                keyboard.down = false;
                states.isWalking = false
                break
            case 65:
                keyboard.left = false;
                states.isWalking = false
                break
            case 68:
                keyboard.right = false;
                states.isWalking = false
                break
        }
    }

    useFrame(() => {
        let impulse = new Vector3(0, 0, 0);
        if(keyboard.dash){

            changeRotation = true;
        }
        if(keyboard.up){
            impulse.z += user.gameStats.character_chose.speed
            changeRotation = true;
        }
        if(keyboard.down){
            impulse.z -= user.gameStats.character_chose.speed
            changeRotation = true;
        }
        if(keyboard.left){
            impulse.x -= user.gameStats.character_chose.speed
            changeRotation = true;
        }
        if(keyboard.right){
            impulse.x += user.gameStats.character_chose.speed
            changeRotation = true;
        }

        rigidBody.applyImpulse(impulse, true);
        cameraFollow()
        if(changeRotation){
            const angle = Math.atan2(impulse.x, impulse.z);
            character.rotation.y = angle;
        }

    })

</script>

  <!-- Camera -->
<T.PerspectiveCamera makeDefault position={[x, 18, z]} fov={35} bind:ref={camera}/>

<!-- Character -->
<T.Group {position}  bind:ref={controller}> 
    <RigidBody bind:rigidBody enabledRotations={[false, false, false]} linearDamping={3}>
        <Collider args={[0.6, 0.4]} shape={'capsule'} on:collisionenter={({targetCollider}) => {
        }}/>
            <T.Group position={[0, -0.75, 0]} bind:ref={character}>
                <slot/>
                <Entity {life}/>
            </T.Group>
            <Emitter {position}/>
        </RigidBody>
</T.Group>

<!-- Input -->
<svelte:window on:keydown={keyDown} on:keyup={keyUp}/>
