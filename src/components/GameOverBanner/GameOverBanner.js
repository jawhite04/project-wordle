import React from 'react';

function HappyBanner({ turns }) {
  const guessCount = turns === 1 ? '1 guess' : `${turns} guesses`;
  return (
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{guessCount}</strong>.
    </p>
  );
}

function SadBanner({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
}

function GameOverBanner({ gameState, turns, answer }) {
  if (gameState === 'win') {
    return (
      <div className={`happy banner`}>
        <HappyBanner turns={turns} />
      </div>
    );
  }
  if (gameState === 'lose') {
    return (
      <div className={`sad banner`}>
        <SadBanner answer={answer} />
      </div>
    );
  }
  return <></>;
}

export default GameOverBanner;
