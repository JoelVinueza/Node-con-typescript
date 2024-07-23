import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const IP: string = process.env.IP || '26.232.191.39';