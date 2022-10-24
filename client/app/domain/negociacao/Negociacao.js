class Negociacao {

  constructor(data, quantidade, valor) {
    //previne a possibildade de se passar uma variavel  que instacie um new Date () para o construtor. 
    //Sendo assim, não é possível
    // a referência da variável para alterar a data da Negociacao
    this._data = new Date(data.getTime());
    
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }
  
  get volume() {
    return this._quantidade * this._valor;
  }
  //Retorna um novo objeto Date toda vez que o getter date é acessado criando uma cópia do original 
  //impedindo a mudança. Conceito de programação defensiva.
  get data() {
    return new Date(this._data.getTime())
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
