"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = exports.userActivo = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var userActivo;
(function (userActivo) {
    userActivo["true"] = "true";
    userActivo["false"] = "false";
})(userActivo = exports.userActivo || (exports.userActivo = {}));
var Registro = /** @class */ (function () {
    function Registro() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Registro.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], Registro.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(6, 100, { message: "Password Debe tener al menos 6 caracteres" }),
        __metadata("design:type", String)
    ], Registro.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Registro.prototype, "country", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Registro.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Registro.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Registro.prototype, "codigo", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: userActivo,
            default: userActivo.true,
        }),
        __metadata("design:type", String)
    ], Registro.prototype, "estado", void 0);
    Registro = __decorate([
        typeorm_1.Entity()
    ], Registro);
    return Registro;
}());
exports.Registro = Registro;
