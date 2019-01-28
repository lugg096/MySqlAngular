"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductosController {
    List(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query('select * from productos');
            return res.json(productos.rows);
        });
    }
    ListOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('select * from productos where _id = $1', [req.params.id]);
            if (producto.rows.length > 0)
                return res.json(producto.rows);
            res.status(404).json({ text: "El producto no se encontro" });
        });
    }
    CrearProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO productos (nombre,descripcion,proveedor,precio,unidades,imagen,estado) values ($1,$2,$3,$4,$5,$6,$7)', [req.body.nombre, req.body.descripcion, req.body.proveedor, req.body.precio, req.body.unidades, req.body.imagen, req.body.estado]);
                res.json({ text: 'creado' });
            }
            catch (err) {
                console.log(err.stack);
            }
        });
    }
    EliminarProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE from productos where _id = $1', [req.params.id]);
            res.json({ text: 'Elimando' });
        });
    }
    ActualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('update productos set nombre=$1,descripcion=$2,proveedor=$3,precio=$4,unidades=$5,imagen=$6,estado=$7 where _id = $8', [req.body.nombre, req.body.descripcion, req.body.proveedor, req.body.precio, req.body.unidades, req.body.imagen, req.body.estado, req.params.id]);
            res.json({ text: 'Actualizado' });
        });
    }
}
exports.productosController = new ProductosController();
