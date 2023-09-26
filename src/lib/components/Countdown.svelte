<script>
    export let hours = 23;
    export let minutes = 59;
    export let days = 9;
    export let seconds = 59;

    function time() {
        seconds--;
        if (seconds == 0) {
            minutes--;
            seconds = 59;
            if (minutes == 0) {
                minutes = 59
                hours --;
                if (hours == 0) {
                    hours = 23;
                    days --;
                }
            }
        }
    setTimeout(time, 1000)}

    time();
</script>

<div class="flex flex-row justify-center gap-x-5">
    <div class="text-4xl bg-neutral p-5 border-2 rounded-xl border-white">{days}</div>
    <div class="text-4xl bg-neutral p-5 border-2 rounded-xl border-white">{hours}</div>
    <div class="text-4xl bg-neutral p-5 border-2 rounded-xl border-white">{minutes}</div>
    <div class="text-4xl bg-neutral p-5 border-2 rounded-xl border-white">{seconds}</div>
</div>