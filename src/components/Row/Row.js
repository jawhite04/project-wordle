import React from 'react';

function Row({ idx, children }) {
  return (<tr key={idx} className="guess">{children}</tr>);
}

export default Row;