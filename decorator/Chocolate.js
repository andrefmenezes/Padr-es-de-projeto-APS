const Sabor = require('./Sabor')
module.exports = class Chocolate  extends Sabor {
    pizza
    name
    constructor(Pizza) {
        super()
        this.pizza = Pizza
        this.name = "Chocolate"
       
      }
    getName() {
        
        return this.pizza.getName() + " de "+ this.name;
      }
    
  getValor(){     
      return 1 + this.pizza.getValor() + " Reais"
  }
   
  }