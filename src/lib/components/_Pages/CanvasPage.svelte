<script>
	import { Canvas } from "@threlte/core";
    import Page from "./Page.svelte";
	import { HTML } from "@threlte/extras";

    export let height = "100vh";
    export let widht = "100vw";
    export let bg_color = "blue";
</script>

<div style="width : {widht};  height: {height}; background:{bg_color}">
    <Canvas>
        <slot name="3d"></slot>
        <HTML>
            <slot name="html"></slot>
        </HTML>
    </Canvas>
</div>