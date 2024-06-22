import express from "express";

const app = express();

app.set("port", process.env.PORT || 4000);

app.get('/', (_req, res) => {
    res.send('Hello World with Typescript');
});

export default app;