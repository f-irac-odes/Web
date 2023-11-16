<script>
	import { HTML } from "@threlte/extras";

    export let life;
    const getId = () => {
        return Math.random()
          .toString(16)
          .slice(2)
    }
</script>

<HTML center position.y={2}>
    <slot/>
    <div class="bar-wrapper-in-game">
        <div class="bar" style="width: {life / 100}%">
            <p class="left-[50%]">{life}</p>
        </div>
    </div>
</HTML>

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