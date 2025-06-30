import bodyParser from 'body-parser';
import express, {Request, Response} from 'express';
import { NextFunction } from 'express';
import testRoute from './routes/testRoute';
import authRoute from './routes/authRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));


const port = process.env.PORT || 3001;

app.use('/api', testRoute);

/************************API ROUTES*******************/

app.use('/api/auth',authRoute)

/*****************************************************/


app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});



app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(`[${new Date().toISOString()}] Error: ${error.message}`);
    res.status(error.statusCode || 500).json({ error: error.message || 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});