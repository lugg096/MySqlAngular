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
            return res.json({ productos });
        });
    }
    ListOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('select * from productos where id = ?', [req.params.id]);
            if (producto.length > 0)
                return res.json({ producto });
            res.status(404).json({ text: "El juego no se enocntro" });
        });
    }
    CrearProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO productos SET ?', [req.body]);
            res.json({ text: 'creado' });
        });
    }
    EliminarProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE from productos where id = ?', [req.params.id]);
            res.json({ text: 'Elimando' });
        });
    }
    ActualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('update productos set ? where id = ?', [req.body, req.params.id]);
            res.json({ text: 'Actualizado' });
        });
    }
}
exports.productosController = new ProductosController();
