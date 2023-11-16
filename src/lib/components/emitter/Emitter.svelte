<script>
    import { useFrame } from "@threlte/core"
	import Particle from "./Particle.svelte";
	import { useRigidBody } from "@threlte/rapier";
	import { Vector3 } from "three";
    export let position;

    let bodies = []
    let lastBodyMounted = 0
    let bodyEveryMilliseconds = 100
    let longevityMilliseconds = 800
    let rigidBody = useRigidBody()
    export let impulse = new Vector3();

    const getId = () => {
        return Math.random()
          .toString(16)
          .slice(2)
      }
      const getRandomPosition = () => {
        return [
          0.5 - Math.random() * 1,
          5 - Math.random() * 1 + 10,
          0.5 - Math.random() * 1
        ]
      }
      const getRandomRotation = () => {
        return [Math.random() * 10, Math.random() * 10, Math.random() * 10]
      }

    const shooting = () => {

        if (lastBodyMounted + bodyEveryMilliseconds < Date.now()) {
            const body = {
              id: getId(),
              mounted: Date.now(),
              position: position,
              rotation: getRandomRotation()
            }
            bodies.unshift(body)
            lastBodyMounted = Date.now()
            bodies = bodies
          }
          const deleteIds = []
          bodies.forEach(body => {
            if (body.mounted + longevityMilliseconds < Date.now()) {
              deleteIds.push(body.id)
            }
          })
          if (deleteIds.length) {
            deleteIds.forEach(id => {
              const index = bodies.findIndex(body => body.id === id)
              if (index !== -1) bodies.splice(index, 1)
            })
            bodies = bodies
          }
          impulse.z += 1
          rigidBody.applyImpulse(impulse, true)
    }
    

</script>

<svelte:window on:click|preventDefault={shooting}/>


{#each bodies as body (body.id)}
	<Particle position={position} rotation={body.rotation} {rigidBody}/>
{/each}