class NegociacaoController {    
  constructor() {

    let $ = document.querySelector.bind(document);

     this._inputData = $('#data');
     this._inputQuantidade = $('#quantidade');
     this._inputValor = $('#valor');
  }

  adiciona(event) {

    event.preventDefault();

    //insere o spread operator pra resolver a data para o constructor
    // let data = new Date(...this._inputData.value.split('-');

    let data = new Date(...
    this._inputData.value
    .split('-')
    .map(function(item, indice) {
          return item - indice % 2;
      }));
    console.log(data)
    
  }
}
