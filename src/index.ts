import express, { Express } from "express";
import { createDecksTable, createCardsTable, createScoresTable, 
        addScore, addDeck, loadDeck, listDecks, listScores, getAISentence } from './routes';
import bodyParser from 'body-parser';

// Configure and start the HTTP server.
const port: number = 8080;
// const port: number = 8088;
const app: Express = express();

createDecksTable();
createCardsTable();
createScoresTable();

app.use(bodyParser.json());
app.post("/api/addScore", addScore);
app.post("/api/addDeck", addDeck);
app.get("/api/loadDeck", loadDeck);
app.get("/api/listDecks", listDecks);
app.get("/api/listScores", listScores);
app.get("/api/getAISentence", getAISentence)


app.listen(port, () => console.log(`Server listening on ${port}`));
