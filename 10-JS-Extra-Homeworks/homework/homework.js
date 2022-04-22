// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for(var clave in objeto){
    array.push([clave, objeto[clave]])
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var letras = [];
  string.split("").forEach((element)=>{
    if(!letras.includes(element)) letras.push(element)
  })
  var repeticiones = {};
  letras.forEach((element)=>{
    let contador = 0;
    string.split("").forEach((elements)=>{
      if(element===elements) contador+=1;
    })
    repeticiones[element]= contador;
  })
  return repeticiones;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = [];
  var minusculas = [];
  s.split("").forEach((element) => {
    if(element === element.toUpperCase()){
      mayusculas.push(element);
    }else if(element === element.toLowerCase()){
      minusculas.push(element);
    }
  })
  var Unir = [...mayusculas, ...minusculas];
  return Unir.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabrasOriginales = str.split(" ");   //["The", "Henry", "Challenge", "is", "close!"] 
  var palabrasRevertidas = [];
  palabrasOriginales.forEach((palabra)=>{
    palabrasRevertidas.push(palabra.split("").reverse().join(""))
  })
  return palabrasRevertidas.join(" ");
} 
  //[T, h, e, H, e, n, r, y..] 
  //[e, h, T, y, r, n, r,e,H...]
  //["ehT", "yrneH", "egnellahC", "si!", "esolc"]
  //ehT yrneH egnellahC si !esolc


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  var numInvertido = num.split("").reverse().join("");
  if(num === numInvertido){
    return "Es capicua";
  } else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var resultado = "";
  for(var i = 0; i < cadena.length; i++){
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      resultado += cadena[i];
    }
  }
  return resultado;
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a, b){ // si recibe 0, no hace nada
    return a.length - b.length; // si recibe un nro. positivo, ordena b antes que a 
  })                            // si recibe un nro. negativo, ordena a antes que b
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newArray = [];
  for(var i=0; i<arreglo1.length; i++){
    for(var j=0; j<arreglo2.length; j++){
      if(arreglo1[i]===arreglo2[j]){
      newArray.push(arreglo2[j]);
    }
  }
}
  return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

