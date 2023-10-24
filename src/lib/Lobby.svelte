<script>
	import { Canvas } from "@threlte/core";
	import LobbyScene from "./LobbyScene.svelte";
	import FullPage from "./components/Ui/FullPage.svelte";


</script>


<Canvas>
    <LobbyScene/>
</Canvas>

<FullPage>
	<slot name="leadTop"><p>hello</p></slot>
</FullPage>