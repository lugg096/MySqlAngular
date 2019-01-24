import {Request,Response} from 'express';
 import pool from '../database'

class ProductosController{

    public index(req: Request,res :Response) { 
        
        res.send('todos loos productos');

    }
}

export const productosController = new ProductosController();