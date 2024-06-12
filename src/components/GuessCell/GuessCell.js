import React from 'react';

function Cell({ idx, className, children }) {
  const classNames = className ? `cell ${className}` : 'cell';
  return (
    <span key={idx} className={classNames}>
      {children}
    </span>
  );
}

export default Cell;
