import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = app.listen( process.env.PORT , () => {
    console.log("Listening on port 8080");
  });

  