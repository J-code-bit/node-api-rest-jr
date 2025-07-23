import * as model from "../models/products.model.js";

export const getAllProducts = (req, res)=>{
    const products = model.getAllProducts();
    res.json(products);
};


export const searchProduct = (req, res) => {
    const {name} = req.query;

    const products = model.getAllProducts();

    const filteredProducts = products.filter ((p) => 
        p.name.toLowerCase().includes(name.toLowerCase())
);
    res.json(filteredProducts);
};


export const getProductById = (req, res)=>{
    const {id} = req.params;

    const product =  model.getProductById(id);

    if (!product){
        res.status(404).json({error: 'No existe el producto'});
    }
    res.json(product);
};

export const createProduct = (req,res) => {
    const {name, price} = req.body;

    const newProduct = model.createProduct({name, price});

    res.status(201).json(newProduct);

};