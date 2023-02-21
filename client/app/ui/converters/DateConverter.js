class DateConverter {

  constructor (){
    throw new Error ('Essa classe não pode ser instaciada')
  }
  
  static paraTexto(data) {

    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
  }

   static paraData(texto) {

    // if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
    //   throw new Error ('Deve estar no formato aaaa-mm-dd');
    
    if (!/\d{2}\/\d{2}\/\d{4}/.test(texto))
      throw new DataInvalidaException();

    return new Date(...texto.split('/')
    .reverse()
    .map((item,indice)=>
      item - indice % 2));
  }
}
