/* db game:
[
  {id:"id",
  number: 0,
   users: [
            {name: "name",
            score: 0
            }
          ]
  }
]
*/
//number is variable. Number needed for fast getting data
import { generatorId } from '../utils/generator_id';

type UserModel = {
    name: string,
    score: number,
}

type DataModel = {
    id: string,
    number: number,
    date: number,
    users: UserModel[],
}

export class Game {
    game: DataModel[] = [];

    addGame = (name:string) => {
        const arr = this.game;
        //check repeating 
        function test() {
            const textId:string = generatorId(5);
            for(const x of arr){
                if(x.id === textId)
                    test();
            }
            return textId;
        }

        this.game.push({id: test(), number: this.game.length, date: Date.now(), users: [
            {name: name,
            score: 0
            }
        ]})

        return this.game[this.game.length-1];
    };

    getNumber = (id: string) => {
        const number:DataModel[] = this.game.filter(el => el.id === id);
        return number[0].number;
    }

    getData = () => {
        return this.game;
    }

    delGame = (id:string) => {
        this.game = this.game.filter(el => el.id !== id);
        //remaping number
        this.game.map((body:DataModel, index:number) => {body.number = index});
    };

    addGamer = (id:string, name:string, number: number) => {
        if(this.game[number].id === id)
            this.game[number].users.push({name: name, score: 0});
        else {
            this.game[this.getNumber(id)].users.push({name: name, score: 0});
        }
        return this.game[number];
    };

    changeScore = (id: string, name: string, score: number, number: number) => {
        if(this.game[number].id === id)
            this.game[number].users.map((users) => {
                if(users.name === name)
                    users.score = score});
        else
            this.game[this.getNumber(id)].users.map((users) => {
                if(users.name === name)
                    users.score = score});
        return this.game[number];
    };

    //clear data
    clearFunction = () => {
        this.game = this.game.filter(el => (el.date+(3600*24)) > Date.now() );
    }
}

export const game = new Game();