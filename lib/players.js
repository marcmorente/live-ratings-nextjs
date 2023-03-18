//import fs from 'fs';
import path from 'path';
import playersJson from '/db/players.json';

const dbDirectory = path.join(process.cwd(), 'db');
export const players = playersJson;