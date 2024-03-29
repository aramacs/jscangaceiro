class NegociacaoController {
  constructor() {

    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._negociacoes = new Bind(
      new Negociacoes(),
      new NegociacoesView('#negociaçoes'),
      'adiciona', 'esvazia'
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView('#mensagemView'),
      'texto'
    );

    this._service = new NegociacaoService();
  }


  adiciona(event) {

    try {

      event.preventDefault();
      this._negociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = 'Negociação adicionada com sucesso';
      this._limpaFormulario();

    } catch (err) {

      console.log(err);
      console.log(err.stack);

      if (err instanceof DataInvalidaException) {

        this._mensagem.texto = err.message;

      } else {

        this._mensagem.texto = 'Um erro não esperado aconteceu. Entre em contato com o suporte';
      }
    }
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  _apaga() {
    this._negociacoes.esvazia();
    this._mensagem.texto = 'Negociacoes apagadas com sucesso';
  }

  importaNegociacoes() {

    this._service
    .obtemNegociacaoDoPeriodo()
    .then(negociacoes => {

        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
      })
      .catch(err => this._mensagem.texto = err);


  }
}
