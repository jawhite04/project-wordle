import React from 'react';
import RestartGame from '../RestartGame';

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
  let banner;
  if (gameState === 'win') {
    banner = (
      <div className={`happy banner`}>
        <HappyBanner turns={turns} />
        <RestartGame />
      </div>
    );
  }
  if (gameState === 'lose') {
    banner = (
      <div className={`sad banner`}>
        <SadBanner answer={answer} />
        <RestartGame />
      </div>
    );
  }
  return banner;
}

export default GameOverBanner;
