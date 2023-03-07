import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";



class PlayersService{

  addPlayer(name){
    let newPlayer = new Player(name, 0)
    appState.players.push(newPlayer) // Push the new player to the AppState array
    console.log('Service - Adding Player: ', name)
  }

  addScore(name){
    console.log('Service - Adding Score: ', name)
    let player = appState.players.find(p => p.name == name)
    player.score ++
  }

  minusScore(name){
    console.log('Service - Subtracting Score: ', name)
    let player = appState.players.find(p => p.name == name)
    player.score --
  }


}

export const playersService = new PlayersService()