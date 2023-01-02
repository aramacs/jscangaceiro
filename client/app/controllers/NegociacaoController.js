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
    .map((item, indice) => {
          return item - indice % 2;
      }));
    
    let negociacao = new Negociacao(
      data, 
      parseInt(this._inputData.value),
      parseFloat(this._inputValor.value)
    )

    let diaMesAno = negociacao.data.getDate()
    + '/' + (negociacao.data.getMonth() + 1) 
    + '/' + negociacao.data.getFullYear();
    console.log(diaMesAno)
  }
}
