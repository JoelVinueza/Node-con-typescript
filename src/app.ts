import express from "express";
import path from 'path';

export const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, 'public')));

export default app;
