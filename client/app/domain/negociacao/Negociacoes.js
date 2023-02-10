class Negociacoes {
  constructor (contexto,armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
    Object.freeze(this);
  }

  get volumeTotal() {
  return this._negociacoes
      .reduce((total, negociacao) => 
        total + negociacao.volume, 0);
  }    
       
    
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);

    this._armadilha(this);  
  }

  paraArray() {
    //retorna uma nova referência criada com os itens de this._negociacoes
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes.length = 0;
  
    this._armadilha(this);
  }
}
