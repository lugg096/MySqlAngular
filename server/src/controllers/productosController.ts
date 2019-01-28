import {Request,Response} from 'express';
 import pool from '../database'

class ProductosController{

    public async List(req: Request,res :Response) { 
        const productos =await pool.query('select * from productos');
        return  res.json({productos});
    }

    public async ListOne(req: Request,res :Response){
       const producto = await pool.query('select * from productos where id = ?',[req.params.id]);
      if(producto.length>0) return res.json({producto});
       res.status(404).json({text:"El juego no se enocntro"});
    }

    public async CrearProductos(req: Request,res :Response){
       await  pool.query('INSERT INTO productos SET ?',[req.body]);
        res.json({text:'creado'});
    }

    public async EliminarProductos(req: Request,res :Response){
        await  pool.query('DELETE from productos where id = ?',[req.params.id]);
        res.json({text:'Elimando'});
    }

    public async ActualizarProducto(req: Request,res :Response){
        await  pool.query('update productos set ? where id = ?',[req.body,req.params.id]);
        
        res.json({text:'Actualizado'});
    }
}

export const productosController = new ProductosController();