import React from 'react';

function GuessForm({ guess, setGuess, handleFormOnSubmit, isDisabled = false }) {
  return (
    <form onSubmit={(event) => handleFormOnSubmit(event)}>
      <label htmlFor="guess-input" className="guess-input-wrapper">
        Enter your guess:
      </label>
      <input
        required
        {...(isDisabled && 'disabled')}
        title="5 letter word"
        pattern="[A-Z]{5,5}"
        id="guess-input"
        className="guess-input-wrapper"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
