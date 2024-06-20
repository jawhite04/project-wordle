import React from 'react';

function Key({ letter, status }) {
  const classNames = status ? `keycap ${status}` : 'keycap';
  return <span className={classNames}>{letter}</span>;
}

function KeyboardRow({ letters, keysStatus }) {
  return (
    <p className="keyboard">
      {letters.map((letter, index) => (
        <Key key={index} letter={letter} status={keysStatus && keysStatus[letter]} />
      ))}
    </p>
  );
}

function Keyboard({ keysStatus }) {
  const keyRows = [[...'QWERTYUIOP'], [...'ASDFGHJKL'], [...'ZXCVBNM']];
  return (
    <div className="guess-results">
      {keyRows.map((row, index) => (
        <KeyboardRow key={index} letters={row} keysStatus={keysStatus} />
      ))}
    </div>
  );
}

export default Keyboard;
