<script>
	import { useFrame, T } from "@threlte/core";
	import Particle from './Particle.svelte'

	export let position;
	export let type = "particle";

	const getId = () => {
	return Math.random()
		.toString(16)
		.slice(2)
	}

	const getRandomRotation = () => {
	return [Math.random() * 10, Math.random() * 10, Math.random() * 10]
	}

	let bodies = []

	let lastBodyMounted = 0
	let bodyEveryMilliseconds = 400
	let longevityMilliseconds = 8000

	useFrame(() => {
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
	})
</script>

<T.Group {position} rotation.y={Math.PI / 2}>
	{#each bodies as body (body.id)}
		{#if type === "particle"}
			<Particle position={body.position} rotation={body.rotation} />
		{/if}
	{/each}
</T.Group>