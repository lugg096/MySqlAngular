import {Request,Response} from 'express';
 import pool from '../database'

class ProductosController{

    public async List(req: Request,res :Response) { 
        const productos =await pool.query('select * from productos');
        return  res.json(productos.rows); 
    }

    public async ListOne(req: Request,res :Response){
       const producto = await pool.query('select * from productos where _id = $1',[req.params.id]);
      if(producto.rows.length>0) return res.json(producto.rows);
       res.status(404).json({text:"El producto no se encontro"});
    }

    public async CrearProductos(req: Request,res :Response){
        try { await  pool.query('INSERT INTO productos (nombre,descripcion,proveedor,precio,unidades,imagen,estado) values ($1,$2,$3,$4,$5,$6,$7)',
        [req.body.nombre,req.body.descripcion,req.body.proveedor,req.body.precio,req.body.unidades,req.body.imagen,req.body.estado]);  
       res.json({text:'creado'});
     } catch(err) {
        console.log(err.stack)
      }
    
    }
    public async EliminarProductos(req: Request,res :Response){
        await  pool.query('DELETE from productos where _id = $1',[req.params.id]);
        res.json({text:'Elimando'});
    }

    public async ActualizarProducto(req: Request,res :Response){
        console.log(req.body);
        await  pool.query('update productos set nombre=$1,descripcion=$2,proveedor=$3,precio=$4,unidades=$5,imagen=$6,estado=$7 where _id = $8',
        [req.body.nombre,req.body.descripcion,req.body.proveedor,req.body.precio,req.body.unidades,req.body.imagen,req.body.estado,req.params.id]);
        
        res.json({text:'Actualizado'});
    }
}

export const productosController = new ProductosController();