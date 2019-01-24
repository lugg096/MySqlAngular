import {Request,Response} from 'express';

class IndexController{

    public index(req: Request,res :Response) { 
        res.json({text:'/api/productos'});

    }
}

export const indexController = new IndexController();