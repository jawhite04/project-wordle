import React from 'react';

function RestartGame() {
  const refreshPage = () => {
    window.location.reload();
  };
  return <button onClick={refreshPage}>Restart the game!</button>;
}

export default RestartGame;
