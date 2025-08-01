import pino from 'pino';

const logger = pino({
  name: 'note-taking-app',
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV === 'development' ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'yyyy-mm-dd HH:MM:ss',
      ignore: 'pid,hostname'
    }
  } : undefined,
  formatters: {
    level: (label) => ({ level: label }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  base: {
    env: process.env.NODE_ENV || 'development',
    service: 'note-taking-api'
  },
  redact: {
    paths: [
      'password',
      'token', 
      'authorization',
      'req.headers.authorization',
      '*.password',
      '*.token'
    ],
    censor: '[REDACTED]'
  }
});

export default logger;