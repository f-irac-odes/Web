<script>
    let gameStarted = true;
    let gameEnded = false;
    export let motivationExp;

    const change = (motivation) => {

        motivation = motivationExp;
        check()
        if(gameStarted) gameEnded = true;
        console.log(motivation)

    }

    const check =() => {
        while (gameStarted) {
            console.log("hello")
        }
        if (gameEnded) {
            gameStarted = false;
        }
    }
</script>
