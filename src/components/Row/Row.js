import React from 'react';

function Row({ id, children }) {
  return (<tr key={id} className="guess">{children}</tr>);
}

export default Row;