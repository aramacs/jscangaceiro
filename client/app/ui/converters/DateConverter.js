class DateConverter {

  constructor (){
    throw new Error ('Essa classe não pode ser instaciada')
  }
  
  static paraTexto(data) {

    return '${data.getDate()}/${data.getMonth()}/${data.getFullYear()}';
  }

   static paraData(texto) {

    return new Date(...texto.split('-').map((item,indice) =>
    item-indice % 2));
  }
}
