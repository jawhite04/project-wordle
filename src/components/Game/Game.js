import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Cell from '../Cell';
import Row from '../Row';
import styles from '../../styles.css'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  const initialGameState = Array(NUM_OF_GUESSES_ALLOWED).fill(Array(answer.length).fill().map((_, index) => ({
    id: index,
    value: '',
    className: 'cell'
  })))
  const [guesses, setGuesses] = React.useState(initialGameState);
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);

  console.log(guesses);
  
  const rows = (guesses.map((guess, rowIndex) => {
    const cells = guess.map(({id, className, value}) => (<Cell id={id} className={className}>{value}</Cell>))

    return (
    <Row key={rowIndex} id={rowIndex}>
      {cells}
    </Row>
    )
  }));

  return (<>
  <table><tbody>{rows}</tbody></table>
  <label className={styles['guess-input-wrapper']}>Enter your guess:</label>
  <input className={styles['guess-input-wrapper']}></input>
  </>)
}

export default Game;
