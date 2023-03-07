


export class Player {
  constructor(name, score, faction, mat){
    this.name = name
    this.score = score
    this.faction = faction
    this.mat = mat
  }

  greeting(){
    console.log(`Hello! My name is ${this.name}.`)
  }

  
get PlayerTemplateCard(){
  return /*html*/`
      <div class="card text-center">
          <div class="card-body">
            <h4>${this.name} - ${this.score}</h4>
            <p>
              <button onclick="app.playersController.addScore('${this.name}')" class="btn btn-outline-success">+1</button>
              <button onclick="app.playersController.minusScore('${this.name}')" class="btn btn-outline-danger">-1</button>
            </p>
          </div>
      </div>`
  }

}