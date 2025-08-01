import bodyParser from 'body-parser';
import express, {Request, Response} from 'express';
import { NextFunction } from 'express';
import testRoute from './routes/testRoute';
import authRoute from './routes/authRoute';
import folderRoute from './routes/folderRoute';
import notesRoute from './routes/notesRoute';
import {rateLimiter} from './middlware/auth';
import cors from 'cors';
import logger from './utils/logger';
import pinoHttp from 'pino-http';

const app = express();

app.use(pinoHttp({
  logger,
  autoLogging: true,
  customLogLevel: (req, res, err) => {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return 'warn';
    } else if (res.statusCode >= 500 || err) {
      return 'error';
    }
    return 'info';
  },
  customSuccessMessage: (req, res) => {
    return `${req.method} ${req.url} - ${res.statusCode}`;
  },
  customErrorMessage: (req, res, err) => {
    return `${req.method} ${req.url} - ${res.statusCode} - ${err.message}`;
  },
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      headers: {
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type']
        // Don't log authorization headers for security
      },
      remoteAddress: req.remoteAddress
    }),
    res: (res) => ({
      statusCode: res.statusCode,
      headers: {
        'content-type': res.headers?.['content-type']
      }
    })
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(rateLimiter)
app.use(cors({})); // Enable CORS for all routes
const port = process.env.PORT || 3001;

app.use('/api', testRoute);

/************************API ROUTES*******************/

app.use('/api/auth',authRoute)
app.use('/api', folderRoute)
app.use('/api', notesRoute)

/*****************************************************/

app.get('/', (req: Request, res: Response) => {
  logger.info('Root endpoint accessed');
  res.send('Hello from Express + TypeScript!');
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    logger.error({ error: error.message, url: req.url }, 'Error occurred');
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  logger.info({ port }, 'Server started successfully');
});