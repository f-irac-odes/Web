<script>
    import { T, useFrame } from "@threlte/core";
	import { Collider, RigidBody } from "@threlte/rapier";
    import { Vector3, Group } from "three";

    // variables
    let rigidBody;
    let character = new Group;
    let position = [0, 1, 0];
    let rotation = [character.rotation.x, character.rotation.y, character.rotation.z];
    let changeRotation;
    let camera;
    let controller;

    let states ={
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
            impulse.z += 0.5
            changeRotation = true;
        }
        if(keyboard.down){
            impulse.z -= 0.5
            changeRotation = true;
        }
        if(keyboard.left){
            impulse.x -= 0.5
            changeRotation = true;
        }
        if(keyboard.right){
            impulse.x += 0.5
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

<svelte:window on:keydown={keyDown} on:keyup={keyUp}/>

<T.PerspectiveCamera makeDefault position={[x, 18, z]} fov={35} bind:ref={camera}/>

<T.Group bind:ref={controller} {position}>
    <RigidBody bind:rigidBody enabledRotations={[false, false, false]} linearVelocity={[1, 0, 1]} linearDamping={3}>
        <Collider args={[0.6, 0.4]} shape={'capsule'}/>
        <T.Group bind:ref={character} {rotation}>
            <slot/>
        </T.Group>
    </RigidBody>
</T.Group>