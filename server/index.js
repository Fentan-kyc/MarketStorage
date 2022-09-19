import express from 'express';
import getStorage from './storage/storage.js';
import { getAllCells, getAllOrders } from './utils/Service.js';

const PORT = 3000;

const app = express();

app.listen(PORT, () => { console.log(`Server started on ${PORT} port`) })

const data = getStorage();
let cells = getAllCells(data);

console.log(cells)

let orders = getAllOrders(data);

console.log(orders)