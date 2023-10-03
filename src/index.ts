import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

app.listen(process.env.PORTA, () =>
    console.log(`Servidor rodando na porte ${process.env.PORTA}`)
);