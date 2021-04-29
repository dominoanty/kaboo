import express from  'express'; 
import cors from 'cors';
import mainRoutes from './routes/main.js';
import bodyParser from 'body-parser';

const app = express()
const port = 3001
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())

app.use('/', mainRoutes);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

export default app;

