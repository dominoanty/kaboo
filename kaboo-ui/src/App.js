import logo from './logo.svg';
import './App.scss';
import Container from 'react-bootstrap/Container'
import Main from './main/Main'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Hand from './components/hand/Hand';

const DECK_SIZE = 55;

function randomize() {
  return 1 + Math.floor(Math.random() * DECK_SIZE);
}

function generateHand() {
  return {
    "0,0" : randomize(),
    "0,1" : randomize(),
    "1,0" : randomize(),
    "1,1" : randomize(),
  }
};

function App() {

  let [gameStarted, startGame] = useState(false);
  let [cardNum, setCardNum] = useState(randomize()); 

  return (
    <Container className="App">
      {
        gameStarted ? 
        <div>
          <Hand hand={generateHand()}/>
          <Button className="space-above" onClick={() => setCardNum(randomize())}> Randomize Card </Button>
        </div>
        :
         <Main startGame={startGame}/>
      }
    </Container>
  );
}

export default App;
