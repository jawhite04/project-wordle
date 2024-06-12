import React from 'react';

function Guess({ idx, children }) {
  return (
    <p key={idx} className="guess">
      {children}
    </p>
  );
}

export default Guess;
