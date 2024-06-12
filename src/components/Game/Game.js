import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Cell from '../Cell';
import Row from '../Row';
import { checkGuess } from '../../game-helpers';

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
    return <Row idx={rowIndex}>{cells}</Row>;
  });

  return (
    <>
      <table>
        <tbody>{rows}</tbody>
      </table>
      <form
        onSubmit={(event) => {
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
        }}
      >
        <label htmlFor="guess-input" className="guess-input-wrapper">
          Enter your guess:
        </label>
        <input
          required
          pattern="[A-Z]{5,5}"
          id="guess-input"
          className="guess-input-wrapper"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Game;
