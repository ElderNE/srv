"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = void 0;
var game_1 = require("../models/game");
function action(req, res) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.action))
        return res.sendStatus(400);
    switch (req.body.action) {
        case ("addGame"):
            if ((_b = req.body) === null || _b === void 0 ? void 0 : _b.name)
                res.send(game_1.game.addGame(req.body.name));
            else
                res.send({ error: "name missing" });
            break;
        case ("joinGame"):
            if (((_c = req.body) === null || _c === void 0 ? void 0 : _c.name) && ((_d = req.body) === null || _d === void 0 ? void 0 : _d.id) && ((_e = req.body) === null || _e === void 0 ? void 0 : _e.number))
                res.send(game_1.game.addGamer(req.body.id, req.body.name, req.body.number));
            else
                res.send({ error: "missing:".concat(((_f = req.body) === null || _f === void 0 ? void 0 : _f.id) ?
                        "" : "id", ", ").concat(((_g = req.body) === null || _g === void 0 ? void 0 : _g.name) ?
                        "" : "name", ", ").concat(((_h = req.body) === null || _h === void 0 ? void 0 : _h.number) ?
                        "" : "number") });
            break;
        case ("changeScore"):
            if (((_j = req.body) === null || _j === void 0 ? void 0 : _j.name) && ((_k = req.body) === null || _k === void 0 ? void 0 : _k.id) && ((_l = req.body) === null || _l === void 0 ? void 0 : _l.score) && ((_m = req.body) === null || _m === void 0 ? void 0 : _m.number))
                res.send(game_1.game.changeScore(req.body.id, req.body.name, req.body.score, req.body.number));
            else
                res.send({ error: "missing:".concat(((_o = req.body) === null || _o === void 0 ? void 0 : _o.id) ?
                        "" : "id", ", ").concat(((_p = req.body) === null || _p === void 0 ? void 0 : _p.name) ?
                        "" : "name", ", ").concat(((_q = req.body) === null || _q === void 0 ? void 0 : _q.number) ?
                        "" : "number", ", ").concat(((_r = req.body) === null || _r === void 0 ? void 0 : _r.score) ?
                        "" : "score") });
            break;
        case ("getNumber"):
            if ((_s = req.body) === null || _s === void 0 ? void 0 : _s.id)
                res.send(game_1.game.getNumber(req.body.id));
            else
                res.send({ error: "missing:".concat(((_t = req.body) === null || _t === void 0 ? void 0 : _t.id) ? "" : "id") });
            break;
        case ("delGame"):
            if ((_u = req.body) === null || _u === void 0 ? void 0 : _u.id) {
                game_1.game.delGame(req.body.id);
                res.send({ resault: "ok" });
            }
            else
                res.send({ error: "missing:".concat(((_v = req.body) === null || _v === void 0 ? void 0 : _v.id) ? "" : "id") });
            break;
        case ("getData"):
            res.send(game_1.game.getData());
            break;
    }
}
exports.action = action;
