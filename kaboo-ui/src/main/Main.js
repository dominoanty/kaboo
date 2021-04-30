import './Main.scss';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react';
import { UserContext } from '../user.context';
import { createGame } from '../game.service';


function Main() {

    let uuid = useContext(UserContext);
    return (
        <div className="App">
            <header className="App-header">
                Kaboo
            </header>

            {uuid != null ? uuid.uuid : 'null'}
            <Button className="space-above" onClick={() => createGame(uuid.uuid)}>Host Game</Button>
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