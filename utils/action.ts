import { Request, Response } from 'express';
import { game } from '../models/game';

export function action(req:Request, res:Response){
    if(!req.body?.action) return res.sendStatus(400);
  switch (req.body.action){
    //add
    case ("addGame"):
      if(req.body?.name)
        res.send(game.addGame(req.body.name));
      else
        res.send({error: "name missing"});
      break;
    //join
    case ("joinGame"):
      if(req.body?.name && req.body?.id && req.body?.number)
        res.send(game.addGamer( req.body.id, 
                                req.body.name, 
                                req.body.number));
      else
        res.send({error: `missing:${req.body?.id?
                                    "": "id"}, ${req.body?.name?
                                    "": "name"}, ${req.body?.number?
                                    "": "number"}`});
      break;
    //change score
    case ("changeScore"):
      if(req.body?.name && req.body?.id && req.body?.score && req.body?.number)
        res.send(game.changeScore(  req.body.id, 
                                    req.body.name, 
                                    req.body.score, 
                                    req.body.number));
      else
        res.send({error: `missing:${req.body?.id?
                                    "": "id"}, ${req.body?.name?
                                    "": "name"}, ${req.body?.number?
                                    "": "number"}, ${req.body?.score?
                                    "": "score"}`});
      break;
    case ("getNumber"):
      if(req.body?.id)
        res.send(game.getNumber(req.body.id));
      else
        res.send({error: `missing:${req.body?.id? "": "id"}`});
      break;
    case ("delGame"):
      if(req.body?.id) {
        game.delGame(req.body.id);
        res.send({resault:"ok"});
      }
      else
        res.send({error: `missing:${req.body?.id? "": "id"}`});
      break;
    case ("getData"):
      res.send(game.getData());
      break;
  }
}