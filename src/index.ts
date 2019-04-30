import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import morgan from 'morgan';

import { generateUsers } from './users';

const port = 4200;

const app = express();

// enable logging
app.use(morgan('common'));

app.use(cors({}));
console.log(chalk.red('Warning: Enabling CORS for all domains!'));

app.get('/users', (req, res) => {
  res.send({
    users: generateUsers(20),
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
