<script>
	import { Canvas } from "@threlte/core";
	import LobbyScene from "./LobbyScene.svelte";
	import FullPage from "./components/Ui/FullPage.svelte";


</script>


<Canvas>
    <LobbyScene/>
</Canvas>

<FullPage>
	<a slot="leadTop" href="/_game">hello</a>
</FullPage>