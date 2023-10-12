import { writable } from "svelte/store";

const playerCoins =  writable(1000);
const playerName =  writable("Name");
const gemsCoins =  writable(0);

export {
    playerCoins, gemsCoins, playerName
}