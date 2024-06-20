import React from 'react';

function GuessForm({ gameState, handleGuessesAndGameState }) {
  const [guess, setGuess] = React.useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleGuessesAndGameState(guess);
    setGuess('');
  };

  return (
    <form
      // className="guess-input-wrapper visually-hidden"
      className="guess-input-wrapper"
      onSubmit={(event) => {
        handleOnSubmit(event);
      }}
    >
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        required
        disabled={gameState !== 'running'}
        title="5 letter word"
        pattern="[A-Z]{5,5}"
        id="guess-input"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
