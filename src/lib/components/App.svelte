<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
	import { Debug, World } from '@threlte/rapier';
	import { onMount } from 'svelte';
  import {io} from 'socket.io-client' 

  const socket = io()

  const onConnect = () => {
    console.log("hello")
  }

  onMount(() => {
    socket.on("connect", onConnect)
  })
</script>

<Canvas>
  <World>
    <Debug/>
    <Scene />
  </World>
</Canvas>
