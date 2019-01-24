"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductosController {
    index(req, res) {
        res.send('todos loos productos');
    }
}
exports.productosController = new ProductosController();
