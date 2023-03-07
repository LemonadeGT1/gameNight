import { Player } from "./Models/Player.js"
// import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Player').Player[]} */
  // values = loadState('values', [Value])
  
  
  players = [
    new Player('Mike', 80, 'Polania', 'Industrial'),
    new Player('Ryan', 85, 'Rusviet', 'Patriotic'),
    new Player('Matt', 60, 'Nordic', 'Militant')
  ]

  
}




export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
