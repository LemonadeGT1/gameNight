import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";


export class PlayersController{
  constructor(){
    console.log('Players Controller Loaded')
    appState.players.forEach(p => p.greeting())
    this.drawPlayers()
  }

  drawPlayers() {
    let players = appState.players
    players.sort((a, b) => b.score - a.score); // NOTE sort the players array by score
    //players.sort((p1, p2) => (p1.score < p2.score) ? 1 : (p1.score > p2.score) ? -1 : 0); // This also works
    let template = ''
    players.forEach(player => template += player.PlayerTemplateCard)
    document.getElementById('players').innerHTML = template
  }

  addPlayer() {
    try {
        window.event.preventDefault()
        const form = window.event.target
        
        let playerName = document.getElementById('name').value
        console.log('Controller - Form data: ', playerName)

        playersService.addPlayer(playerName)

        form.reset()
        this.drawPlayers()
    } catch (e) {
        console.error('[addPlayer]', error)
    }
}

addScore(name){
  console.log('Controller - addScore: ', name)
  try {
      window.event.preventDefault()
      const form = window.event.target

      playersService.addScore(name)
      this.drawPlayers()
  } catch (e) {
      console.error('[addScore]', error)
  }
}

minusScore(name){
  console.log('Controller - minusScore: ', name)
  try {
      window.event.preventDefault()
      const form = window.event.target

      playersService.minusScore(name)
      this.drawPlayers()
  } catch (e) {
      console.error('[minusScore]', error)
  }
}




}