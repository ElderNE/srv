"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.Game = void 0;
var generator_id_1 = require("../utils/generator_id");
var Game = (function () {
    function Game() {
        var _this = this;
        Object.defineProperty(this, "game", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "addGame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (name) {
                var arr = _this.game;
                function test() {
                    var textId = (0, generator_id_1.generatorId)(5);
                    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                        var x = arr_1[_i];
                        if (x.id === textId)
                            test();
                    }
                    return textId;
                }
                _this.game.push({ id: test(), number: _this.game.length, date: Date.now(), users: [
                        { name: name,
                            score: 0
                        }
                    ] });
                return _this.game[_this.game.length - 1];
            }
        });
        Object.defineProperty(this, "getNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (id) {
                var number = _this.game.filter(function (el) { return el.id === id; });
                return number[0].number;
            }
        });
        Object.defineProperty(this, "getData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function () {
                return _this.game;
            }
        });
        Object.defineProperty(this, "delGame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (id) {
                _this.game = _this.game.filter(function (el) { return el.id !== id; });
                _this.game.map(function (body, index) { body.number = index; });
            }
        });
        Object.defineProperty(this, "addGamer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (id, name, number) {
                if (_this.game[number].id === id)
                    _this.game[number].users.push({ name: name, score: 0 });
                else {
                    _this.game[_this.getNumber(id)].users.push({ name: name, score: 0 });
                }
                return _this.game[number];
            }
        });
        Object.defineProperty(this, "changeScore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (id, name, score, number) {
                if (_this.game[number].id === id)
                    _this.game[number].users.map(function (users) {
                        if (users.name === name)
                            users.score = score;
                    });
                else
                    _this.game[_this.getNumber(id)].users.map(function (users) {
                        if (users.name === name)
                            users.score = score;
                    });
                return _this.game[number];
            }
        });
        Object.defineProperty(this, "clearFunction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function () {
                _this.game = _this.game.filter(function (el) { return (el.date + (3600 * 24)) > Date.now(); });
            }
        });
    }
    return Game;
}());
exports.Game = Game;
exports.game = new Game();
