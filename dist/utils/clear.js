"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearOld = void 0;
var game_1 = require("../models/game");
function clearOld(timer) {
    setInterval(game_1.game.clearFunction, timer);
}
exports.clearOld = clearOld;
