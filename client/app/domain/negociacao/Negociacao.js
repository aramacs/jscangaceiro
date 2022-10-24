class Negociacao {

  constructor(data, quantidade, valor) {
    //Utilizando o Object.assign se consegue receber na instância da classe os valores das propriedades
    //recebidas pelo constructor da classe.
    Object.assign(this, { _data: new Date(data.getTime()), _quantidade: qyantidade, _valor: valor});
    
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
