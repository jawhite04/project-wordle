import React from 'react';

import { WORD_LENGTH, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const classNames = status ? `cell ${status}` : 'cell';
  return <span className={classNames}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {Array(WORD_LENGTH)
        .fill()
        .map((_, index) => {
          return (
            <Cell key={index} letter={result?.[index].letter} status={result?.[index].status} />
          );
        })}
    </p>
  );
}

function GuessRows({ guesses, answer }) {
  return (
    <div className="guess-results">
      {Array(NUM_OF_GUESSES_ALLOWED)
        .fill()
        .map((_, index) => (
          <Guess key={index} guess={guesses[index]} answer={answer} />
        ))}
    </div>
  );
}

export default GuessRows;
