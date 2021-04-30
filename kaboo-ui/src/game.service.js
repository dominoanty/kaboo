
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'
export async function createGame(userId) {
    try {
        const response = await axios.post(BASE_URL + '/games', {host_id : userId});
        console.table(response);
    } catch(e) {
        console.log('Error occurred : ' + e);
    }
}
