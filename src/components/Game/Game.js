import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessRows from '../GuessRows';
import GuessForm from '../GuessForm';
import GameOverBanner from '../GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  // running | win | lose
  const [gameState, setGameState] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  const handleGuessesAndGameState = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameState('win');
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lose');
    }
  };

  return (
    <>
      <GuessRows guesses={guesses} answer={answer} />
      <GuessForm gameState={gameState} handleGuessesAndGameState={handleGuessesAndGameState} />
      <GameOverBanner gameState={gameState} turns={guesses.length} answer={answer} />
    </>
  );
}

export default Game;
