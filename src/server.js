import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const PORT = 8080;

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    // res.json({
    //   message: 'Hello world!++',
    // });
    res.send("+++")
  });

  app.use('*', (req, res, next) => {
    // res.status(404).json({
    //   message: 'Not found++',
    // });
    res.send("err404+++")
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
  });
};
