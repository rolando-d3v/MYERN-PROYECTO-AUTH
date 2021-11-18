"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAuth = void 0;
var typeorm_1 = require("typeorm");
var config_1 = __importDefault(require("../../config/config"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var Registro_1 = require("../../entity/Registro");
var loginAuth = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userExiste, userPass, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                //validar si el campo esta vacio
                if (!(email && password)) {
                    return [2 /*return*/, res.status(400).json({ msn: "required user y password 😕 ❗️ " })];
                }
                return [4 /*yield*/, typeorm_1.getRepository(Registro_1.Registro).findOne({
                        where: { email: email },
                        select: ["id", "email", "password"],
                    })];
            case 1:
                userExiste = _b.sent();
                //validar si el user existe en la db
                if (!userExiste)
                    return [2 /*return*/, res.status(400).json({ msn: "user not found ❗️" })];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, userExiste.password)];
            case 2:
                userPass = _b.sent();
                if (userPass === false)
                    return [2 /*return*/, res.status(400).json({ msn: "pass incorrect" })];
                token = jsonwebtoken_1.default.sign({ id: userExiste.id, email: userExiste.email }, config_1.default.jwtSecret, { expiresIn: "2h" });
                return [2 /*return*/, res.json({ msn: "login correct", token: token })];
            case 3:
                err_1 = _b.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(400).json({ msn: "Errorin server" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.loginAuth = loginAuth;
