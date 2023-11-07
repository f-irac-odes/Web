<script>
    import { T } from "@threlte/core";
    import { Float, HTML} from "@threlte/extras";
	import { AutoColliders, Collider} from "@threlte/rapier";
    import TeleporterBase from './TeleporterBase.svelte'
	import Door from "./Door.svelte";
    import BearTrap from '../models/BearTrap.svelte'
    import GasCan from '../models/GasCan.svelte'
    import Bush from '../models/Bush.svelte'
	import { BoxGeometry, MeshStandardMaterial, Vector3 } from "three";

    let rotation = [0, 3.16, 0];

    const map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 5, 0, 3, 0, 3, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 3, 0],
        [0, 1, 0, 5, 0, 0, 3, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
</script>

{#each map as line, z}
    {#each line as block, x}
    {#if block === 1}
        <T.Group position={[0, 0, 0]} let:ref>
            <AutoColliders>
                <T.Mesh position={[x, 0, z]}>
                    <T.MeshStandardMaterial color="white" roughness={0.2} />
                    <T.BoxGeometry args={[1, 1.5, 1]}/>
                </T.Mesh>
            </AutoColliders>
        </T.Group>
            {:else if block === 2}
            <T.Group position={[x, 0, z]}>
                    <Collider args={[0.5, 0.5, 0.5]} sensor shape={'cuboid'} />
                    <Bush scale={0.5}/>
                </T.Group>
            {:else if block === 3}
                {#if line[x - 1] === 1}
                        <Door position={[x, 0, z]} {rotation} />
                     {:else if line[x - 1] !== 1}
                        <Door position={[x, 0, z]} rotation={[rotation[0], rotation[1] - 1.58, rotation[2]]}/>
                    {:else if line[x - 1] === 3 && line[x + 1] === 1}
                        <Door position={[x, 0, z]} rotation={[rotation[0], rotation[1] - 1.58, rotation[2]]} closeValue={-1}/>
                    {:else if line[x - 1] === 1 && line[x + 1] === 3}
                        <Door position={[x, 0, z]} rotation={[rotation[0], rotation[1] - 1.58, rotation[2]]} closeValue={+1}/>
                {/if}
            {:else if block === 4}                
            {#if line[x - 1] !== 4}
            <T.Group position={[x, 0, z + 0.5]} let:ref>
                <Collider args={[0.4, 0.5, 0.4]} shape={'cuboid'} sensor on:sensorenter={({targetRigidBody}) => {
                    targetRigidBody.setTranslation(new Vector3(x -1, 0, z+1))
                }}/>
                    <TeleporterBase scale={0.5}/>
            </T.Group>
            {/if}
            {:else if block === 5}
            <T.Group position={[x, 0, z]}>
                <Collider 
                    args={[0.8, 0.8, 0.8]} 
                    shape={'cuboid'} 
                    sensor
                on:sensorexit={({targetRigidBody}) => {
                    targetRigidBody.setLinearDamping(3);
                }} 
                on:sensorenter={({targetRigidBody}) => {targetRigidBody.setLinearDamping(25)}}/>
                <BearTrap/>
            </T.Group>
            {:else if block === 6}
            <Float floatIntensity={0.7} rotationIntensity={0.5} rotationSpeed={1} >
                <T.Group position={[x, 0, z]} let:ref>
                    <GasCan/>
                <Collider 
                shape={'cuboid'} 
                sensor
                 args={[0.5, 0.5, 0.5]}  on:sensorenter={({targetRigidBody}) => {
                    ref.visible = false;
                    targetRigidBody.applyImpulse({x: 1, y: 0, z: 0}, true)
                }} />
                <HTML center position.y={1.25}>
                    <p style="color: red; font-family: sans-serif;">speed</p>
                </HTML>
                <T.PointLight color="red" />
            </T.Group>
        </Float>
        {:else if block === 7}
        <T.Group position={[x, 0, z]} >
        <Collider 
        shape={'cuboid'} 
        sensor
         args={[0.5, 0.5, 0.5]}  on:sensorenter={({targetRigidBody}) => {
            targetRigidBody.applyImpulse(new Vector3(0, 1, 0), true)
        }} />
        <T.Mesh material={new MeshStandardMaterial({color : "black"})} geometry={new BoxGeometry(1, 0.4, 1)}/>
    </T.Group>
        {/if}
    {/each}
{/each}



