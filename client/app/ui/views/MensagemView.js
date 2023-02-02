class MensagemView extends View {

  constructor(seletor) {
    super(seletor)
    this._elemento = document.querySelector(seletor);
  }
  
  template(model) {
    return model.texto
    ? `<p class="alert alert-info">${model.texto}</p>`
    : `<p>`;
  }
}
