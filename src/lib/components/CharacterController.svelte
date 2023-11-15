<script>
	import { T, useFrame } from "@threlte/core";
	import { Collider,  RigidBody, useRapier, useRigidBody } from "@threlte/rapier";
	import { Vector3, Group } from "three";
	import { HTML } from "@threlte/extras";
    import {user} from './user'
    import {ColliderDesc} from '@dimforge/rapier3d-compat'

    let colliderDesc = ColliderDesc.ball(0.5)
    // variables
    let rigidBody;
    let life = user.gameStats.character_chose.hitPoints
    let character = new Group;
    export let position = [0, 1, 0];
    let changeRotation;
    let camera;
    let controller;
    let {world, addRigidBodyToContext, removeRigidBodyFromContext, addColliderToContext, removeColliderFromContext} = useRapier()


    let states = {
        isWalking : false
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
        shoot : true
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
        shoot()
        
    })
    const shoot = () => {
        let impulse = new Vector3(0, 0, 0);
        const bullet = useRigidBody();
        let collider = world.createCollider(colliderDesc, bullet)
        if(shoot == true){
            impulse.z += user.gameStats.character_chose.attack.range
            if(bullet.getWorldPosition() > user.gameStats.character_chose.attack.range){
                world.removeRigidBody(bullet, true)
                world.removeCollider(collider, true)
            }
        }    
        bullet.applyImpulse(impulse, true)
    }

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
            </T.Group>
            <HTML center position.y={2}>
                <p>{user.name}</p>
                <div class="bar-wrapper-in-game">
                    <div class="bar" style="width: 100%">
                        <p class="left-[50%]">{life}</p>
                    </div>
                </div>
            </HTML>
        </RigidBody>
</T.Group>

<!-- Input -->
<svelte:window on:keydown={keyDown} on:keyup={keyUp}/>

<style>
    .bar-wrapper-in-game {
		width: 50px;
		height: 15px;
		border: 1px solid black;
        border-radius: 3px;
		position: relative;
	}
    .bar {
		height: 100%;
    border-radius: 6px;
    border-color: black;
		background-color: rgb(15, 216, 4);
	}
</style>