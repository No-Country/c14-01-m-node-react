import express from 'express';

const app = express();
app.disable('x-powered-by')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = app.listen( 8080 , () => {
    console.log("Listening on port 8080");
  });

  