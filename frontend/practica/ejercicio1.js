function contarApariciones(texto) {
  let palabras = texto.split(" ");
  const myMap = new Map();
  palabras.map((palabra)=>{
    const pal = palabra.toLowerCase();
    if (!myMap.has(pal)) {
      myMap.set(pal,calcularFrecuencia(new RegExp(pal,"i")));
    }
  })
  function calcularFrecuencia(regex) {
    const res = palabras.reduce((contador, palabra) => {
      if (regex.test(palabra)) {
        contador++;
      }
      return contador;
    }, 0);
    palabras = palabras.filter((palabra)=>{
      return !regex.test(palabra);
    })
    return res;
  }
  const res = Array.from(myMap).map(([clave,valor])=>{
    return {
      word:clave,
      frecuency:valor
    }
  })
  console.log(res);
}


contarApariciones("Hola mundo hola pais y HOLA a todos mundo pais pais pais todos todos todos todos TODOS");
//contarApariciones("ejemplO")