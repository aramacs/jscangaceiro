class NegociacaoController {
    
  constructor() {

    let $ = document.querySelector.bind(document);

     this._inputData = $('#data');
     this._inputQuantidade = $('#quantidade');
     this._inputValor = $('#valor');
  }

  adiciona(event) {

    event.preventDefault();
    // console.log(typeof(this._inputData.value));

    let data = new Date(this._inputData.value.split('-'));
    console.log(data)

    let negociacao = new Negociacao(
      this._inputData.value,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    console.log(negociacao);
    // let data = new Date (this._inputData.value)
    // console.log(data);

    
  }
}
