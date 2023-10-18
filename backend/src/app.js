import express from 'express';
import database from '../database/database.js'
import { userRouter } from '../routes/users.js';
import { placeRouter } from '../routes/places.js';

const app = express();
app.disable('x-powered-by')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ?? 8080

app.use('/users', userRouter)
app.use('/places' , placeRouter)

app.listen(PORT , () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
  

database.connect();