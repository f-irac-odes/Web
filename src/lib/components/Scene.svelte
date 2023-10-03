<script>
   import { T, useThrelte } from '@threlte/core';
   import GameManager from './_Principal/GameManager.svelte'
  // import { Sky } from '@threlte/extras'
	// import Ground from './Ground.svelte';
	// import CharacterController from './ChracterController.svelte';
  // import * as THREE from 'three';
  // import CanvasPage from "./CanvasPage.svelte";
  import PartCanvasPage from "./_Pages/PartCanvasPage.svelte";
	import Page from './_Pages/Page.svelte';

  // let {scene} = useThrelte();
  // scene.fog = new THREE.Fog('purple');

  var player = {
    life : 10,
  }

  const die = () => {
    player.life--;

    setTimeout(die, 1000)
  }

  die();

</script>
 

<!-- <CanvasPage bg_color="red">
  <T.Mesh slot="3d">
    <T.BoxGeometry/>
    <T.MeshBasicMaterial/>
  </T.Mesh>
  <div slot="html">
    <button>
      Hello bro
    </button>
  </div>
</CanvasPage> -->


<GameManager>
  <Page title="Lobby" description_needed={false} description="bye guys" slot="start">
    <button>Hello</button>
  </Page>
  <div slot="end">
    {#if player.life == 0}
      <PartCanvasPage/>
    {/if}
  </div>
</GameManager>