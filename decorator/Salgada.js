// import { Pizza } from './Pizza';
const Pizza = require('./Pizza')
module.exports =  class Salgada extends Pizza { 
  valor    
  constructor() {   
    super()
    this.valor = 20
    this.name = 'pizza Salgada'
    
  }
    getName() {
        return this.name ;
      }

      getValor(){
      return this.valor;
    }
  
   
  }