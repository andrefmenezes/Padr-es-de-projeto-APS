const Pizza = require('./Pizza')
module.exports =  class Doce extends Pizza { 
  valor    
  constructor() {   
    super()
    this.valor = 30
    this.name = 'pizza Doce'
    
  }
   

      getValor(){
      return this.valor;
    }
  
   
  }