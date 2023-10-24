<script>
    let gameStarted = true;
    let gameEnded = false;
    export let motivationExp;

    const check =() => {
        while (gameStarted) {
            
        }
        if (gameEnded) {
            gameStarted = false;
        }
    }

    const change = (motivation) => {

        motivation = motivationExp;
        check()
        if(gameStarted) gameEnded = true;
        console.log(motivation)

    }

    check()
</script>
