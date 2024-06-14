import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessRows from '../GuessRows';
import GuessForm from '../GuessForm';
import GameOverBanner from '../GameOverBanner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  // running | win | lose
  const [gameState, setGameState] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
  const [keysStatus, setKeysStatus] = React.useState({});

  const handleGuessesAndGameState = (guess) => {
    // guesses
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // keysStatus
    const nextKeysStatus = { ...keysStatus };
    const guessStatus = checkGuess(guess, answer);
    guessStatus.forEach(({ letter, status }) => {
      // only update to a better status (incorrect -> misplaced, never the opposite)
      if (nextKeysStatus[letter]) {
        // letter has been guessed before
        if (status === 'correct') {
          nextKeysStatus[letter] = status;
        } else if (status === 'misplaced') {
          nextKeysStatus[letter] = status;
        } else {
          nextKeysStatus[letter] = status;
        }
      } else {
        // the first time the letter has been guessed
        nextKeysStatus[letter] = status;
      }
    });
    setKeysStatus(nextKeysStatus);

    // gameState
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
      <Keyboard keysStatus={keysStatus} />
      <GameOverBanner gameState={gameState} turns={guesses.length} answer={answer} />
    </>
  );
}

export default Game;
