import './Main.scss';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react';
import { UserContext } from '../user.context';
import { createGame } from '../game.service';
import { GameContext } from '../game.context';
import socket from '../socket.service';


function Main() {

    let uuid = useContext(UserContext);
    let {gameState, setGameState} = useContext(GameContext);

    let startGame = async () => {
        let response = await createGame(uuid);
        console.log('Game is ', response);
        setGameState(response);
        socket.emit('game created',{"wsId": response.wsId, "gameId": response.gameId});
    }
    return (
        <div className="App">
            <header className="App-header">
                Kaboo
            </header>

            {uuid != null ? uuid.uuid : 'null'}
            <Button className="space-above" onClick={startGame}>Host Game</Button>
            <hr className="hr-text" data-content="OR"></hr>

            <InputGroup className="space-above">
                <FormControl
                    placeholder="Game code"
                    aria-label="Game code"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
            <Button className="space-above">Join</Button>
        </div>
    )
}

export default Main;