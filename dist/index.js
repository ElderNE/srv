"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var action_1 = require("./utils/action");
var clear_1 = require("./utils/clear");
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
var urlencodedParser = (0, body_parser_1.urlencoded)({ extended: false });
(0, clear_1.clearOld)(3600 * 24 * 1000);
app.get("/*", function (req, res) {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, '../files') });
});
app.post("/api", urlencodedParser, function (req, res) {
    (0, action_1.action)(req, res);
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(port));
});
