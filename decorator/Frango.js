//import { Sabor } from './Sabor';
const Sabor = require('./Sabor')
module.exports = class Frango  extends Sabor {
    pizza
    name
    constructor(Pizza) {
        super()
        this.pizza = Pizza
        this.name = "Frango"
       
      }
    getName() {
        
        return this.pizza.getName() + " de "+ this.name;
      }
    
  getValor(){     
      return 1 + this.pizza.getValor() + " Reais"
  }
   
  }