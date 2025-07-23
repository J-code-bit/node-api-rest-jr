import express from 'express';
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('API Rest en Node.js');
});


import productsRouter from "./src/routes/products.router.js";
app.use("/api",productsRouter);


app.use((req, res, next) => {
    res.status(404).json({error: 'Not found'});
});


const PORT = 3000;
app.listen (PORT,()=>console.log(`http://localhost:${PORT}`));

