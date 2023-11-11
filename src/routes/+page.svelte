<!-- <script>
  import App from '$lib/components/App.svelte'
  import { Canvas } from '@threlte/core';
	import Maintenece from '../lib/components/Maintenece.svelte';
	import { HTML } from '@threlte/extras';

  let maintenence = true
</script>

{#if maintenence === false}  
<div>
  <App />
</div>

{:else}
  
<div>
  <Canvas>
    <HTML center position.y={3.5}>
      <p class="title">Maintenence on.</p>
    </HTML>
    <Maintenece />
  </Canvas>
</div>
{/if}

<style>
  :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgb(24, 37, 65) 0%, rgb(152, 31, 189) 100%);
  }
  .title{
    color : white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;
  }
</style>
 -->

 <script>
  import { onMount } from 'svelte';
  import Ably from 'ably';

  let channel;
  let clientId;
  let winningNumber;
  let isGameOver = false;

  // Initialize Ably
  const ably = new Ably.Realtime.Promise('ygxxLQ.qKUV6Q:xhX-DtdDQXgV9QweAlfb7DaRmY65yFuPG6fmdJdWJKU');

  // Presence
  const presence = ably.channels.get('game-channel').presence;

  // Generate a random number between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Start the game
  function startGame() {
    winningNumber = generateRandomNumber();
    console.log(`Game started! The winning number is ${winningNumber}.`);

    // Subscribe to presence events
    presence.subscribe((presenceMessage) => {
      if (presenceMessage.action === 'enter') {
        console.log(`${presenceMessage.clientId} joined the game.`);
      } else if (presenceMessage.action === 'leave') {
        console.log(`${presenceMessage.clientId} left the game.`);
      }
    });

    // Subscribe to guess events
    channel.subscribe('guess', function (message) {
      const { clientId, data: guess } = message;
      console.log(`${clientId} guessed ${guess}.`);

      if (!isGameOver) {
        if (guess === winningNumber) {
          console.log(`${clientId} guessed correctly! They win!`);
          isGameOver = true;
          channel.publish('game-over', { winner: clientId });
        } else {
          console.log(`${clientId} guessed incorrectly. Keep guessing!`);
        }
      }
    });
  }

  // Handle guess submission
  function submitGuess() {
    if (!isGameOver) {
      const guessInput = document.getElementById('guessInput');
      const userGuess = parseInt(guessInput.value);

      if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 100) {
        channel.publish('guess', userGuess);
        guessInput.value = '';
      } else {
        alert('Please enter a valid number between 1 and 100.');
      }
    } else {
      alert('The game is over. Please start a new game.');
    }
  }

  onMount(async () => {
    // Prompt the player to enter their name
    clientId = prompt('Enter your name:');

    // Join the game's presence channel
    channel = await ably.channels.get('game-channel');
    await presence.enter(clientId);

    // Start the game
    startGame();
  });
</script>

<h1>Meta Wars Game</h1>
<p>Guess a number between 1 and 100:</p>
<input type="number" id="guessInput"  placeholder="Enter your guess" />
<button on:click={submitGuess}>Submit Guess</button>