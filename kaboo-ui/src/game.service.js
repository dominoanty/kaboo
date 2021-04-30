
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'
export async function createGame(userId) {
    try {
        const response = await axios.post(BASE_URL + '/games', {host_id : userId});
        if(response.status === 200) {
            return {
                wsId: response.data.websocket_id,
                gameId: response.data.game_id
            };
        } else {
            throw 'Something went wrong in response : ' + response
        }
    } catch(e) {
        console.log('Error occurred : ' + e);
    }
}
