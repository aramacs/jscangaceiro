class NegociacaoService {

  obterNegociacoesDaSemana(cb) {

    return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {

        if (xhr.status == 200) {


          JSON
            .parse(xhr.responseText)
            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

            resolve(null, negociacoes);

        } else {

          console.log(xhr.responseText);

          reject('Não foi possível obter as negociacoes da semana', null)
        }
      }
    };
    xhr.send();
    })

  }
}
