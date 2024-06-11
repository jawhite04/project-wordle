import React from 'react';

function Cell({id, className, value}) {
  return (<td key={id} className={className}>{value}</td>);
}

export default Cell;
