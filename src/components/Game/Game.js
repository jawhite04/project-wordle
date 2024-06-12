import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import Cell from '../GuessCell';
import Guess from '../Guess';
import GuessForm from '../GuessForm';
import GameOverBanner from '../GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  const initialGameState = Array(NUM_OF_GUESSES_ALLOWED).fill(
    Array(answer.length)
      .fill()
      .map((_, index) => ({
        id: index,
        value: '',
        className: '',
      })),
  );
  const [guesses, setGuesses] = React.useState(initialGameState);
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  const [guess, setGuess] = React.useState('');

  const rows = guesses.map((guess, rowIndex) => {
    const cells = guess.map(({ id, className, value }) => (
      <Cell idx={id} className={className}>
        {value}
      </Cell>
    ));
    return <Guess idx={rowIndex}>{cells}</Guess>;
  });

  const handleFormOnSubmit = (event) => {
    event.preventDefault();

    const checkResults = checkGuess(guess, answer);

    guesses[numOfGuesses] = guesses[numOfGuesses].map((g, idx) => ({
      id: g.id,
      value: checkResults[idx].letter,
      className: checkResults[idx].status,
    }));

    setGuesses(guesses);
    setNumOfGuesses(numOfGuesses + 1);
    setGuess('');
  };

  let gameOverBanner;
  if (guess === answer || numOfGuesses > initialGameState.length) {
    gameOverBanner = (
      <GameOverBanner isWin={guess === answer} turns={numOfGuesses} answer={answer} />
    );
  }

  return (
    <>
      {rows}
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        handleFormOnSubmit={handleFormOnSubmit}
        isDisabled={guess === answer}
      />
      {gameOverBanner}
    </>
  );
}

export default Game;
