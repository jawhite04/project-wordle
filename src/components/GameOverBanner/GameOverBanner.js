import React from 'react';

function GameOverBanner({ isWin, turns, answer }) {
  const outcome = isWin ? 'happy' : 'sad';
  let content = '';
  if (isWin) {
    content = (
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{turns} guesses</strong>.
      </p>
    );
  } else {
    content = (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );
  }

  return <div className={`banner ${outcome}`}>{content}</div>;
}

export default GameOverBanner;
