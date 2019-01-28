import {Router} from 'express';
import{productosController} from '../controllers/productosController'
class ProductosRoutes {
    public router :Router = Router();

    constructor(){
        this.config();

    }

    config():void{
        this.router.get('/',productosController.List);
        this.router.post('/',productosController.CrearProductos);
        this.router.delete('/:id',productosController.EliminarProductos);
        this.router.get('/:id',productosController.ListOne);
        this.router.put('/:id',productosController.ActualizarProducto);
        
    }

}

const productosRoutes =new ProductosRoutes();
export default productosRoutes.router;