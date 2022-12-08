import { game } from "../models/game";

export function clearOld(timer: number) {
    setInterval(game.clearFunction, timer);
}