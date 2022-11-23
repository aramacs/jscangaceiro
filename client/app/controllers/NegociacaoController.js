class NegociacaoController {
    
  contructor() {

    let $ = document.querySelector.bind(document);

     this._inputdata = $('#data');
     this._inputQuantidade = $('#quantidade');
     this._inputValor = $('#valor');
  }

  adiciona(event) {

    event.preventDefault();

    let negociacao = new Negociacao(
      this._inputdata.value,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    console.log(negociacao);
    // let data = new Date (this._inputData.value)
    // console.log(data);

    
  }
}
