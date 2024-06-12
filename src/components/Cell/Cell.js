import React from 'react';

function Cell({idx, className, children}) {
  const classNames = className ? `cell ${className}` : 'cell'
  return (<td key={idx} className={classNames}>{children}</td>);
}

export default Cell;
