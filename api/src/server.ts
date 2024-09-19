import express, { Express, Request, Response , Application } from 'express';
import { connectDatabase } from './common/database';

const app: Application = express();
const port = process.env.API_PORT || 5101;

connectDatabase();

app.get('/', (req: Request, res: Response) => {
  const now = Date.now();
  res.send('himom.  Welcome to Express & TypeScript Server at ' + now.toString());
});


app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
