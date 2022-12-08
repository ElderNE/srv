"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorId = void 0;
var generate_password_1 = __importDefault(require("generate-password"));
function generatorId(lengthId) {
    var password = generate_password_1.default.generate({
        length: lengthId,
        numbers: true
    });
    return password;
}
exports.generatorId = generatorId;
