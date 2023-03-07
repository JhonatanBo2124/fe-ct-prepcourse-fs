/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var keys = Object.keys(objeto);
   var arrayResultado = [];
   for (let i = 0; i < keys.length; i++)
   {
      var array = [];
      array.push(keys[i]);
      array.push(objeto[keys[i]]);
      arrayResultado.push(array);
   }
   return arrayResultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
   var caracteres = string.split('');
   var objeto = {};
   for (let i = 0; i < alfabeto.length; i++)
   {
      //console.log('iteracion: ' + alfabeto[i]);
      var letra = alfabeto[i];
      var contador = 0;
      for (let c = 0; c < caracteres.length; c++)
      {
         if (caracteres[c] == letra)
         {
            contador++;
         }
      }
      if (contador > 0)
      {
         objeto[alfabeto[i]] = contador;
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var caracteres = string.split('');
   var nuevoArray = [];
   for (let i = 0; i < caracteres.length; i++)
   {
      if (caracteres[i] === caracteres[i].toUpperCase())
      {
         nuevoArray.push(caracteres[i]);
      }
   }
   for (let i = 0; i < caracteres.length; i++)
   {
      if (caracteres[i] === caracteres[i].toLowerCase())
      {
         nuevoArray.push(caracteres[i]);
      }
   }
   return nuevoArray.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ');
   var nuevoString = [];
   for (let i = 0; i < palabras.length; i++)
   {
      var caracteres = palabras[i].split('');
      var alReves = [];
      for (let c = caracteres.length; c >= 0; c--)
      {
         alReves.push(caracteres[c]);
      }
      nuevoString.push(alReves.join(''));
   }
   return nuevoString.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var digitos = numero.toString().split('');
   var correcto = true;
   for (let i = 0; i < digitos.length; i++)
   {
      var w = (digitos.length - 1) - i;
      if (digitos[i] != digitos[w])
         {
            correcto = false;
         }
   }
   if (correcto) return "Es capicua";
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letrasAEliminar = ['a', 'b', 'c'];
   var caracteres = string.split('');
   var nuevoArray = [];
   for (let c = 0; c < caracteres.length; c++)
   {
      var eliminar = false;
      for (let i = 0; i < letrasAEliminar.length; i++)
      {
         if (caracteres[c] === letrasAEliminar[i])
         {
            eliminar = true;
         }
      }
      if (!eliminar)
      {
         nuevoArray.push(caracteres[c]);
      }
   }
   return nuevoArray.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b) => {
      if (a.length === b.length) return 0;
      if (a.length < b.length) return -1;
      return 1;
   })
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray = [];
   for (let i = 0; i < array1.length; i++)
   {
      var siEsta = false;
      for (let a = 0; a < array2.length; a++)
      {
         if (array1[i] === array2[a])
         {
            siEsta = true;
         }
      }
      if (siEsta)
      {
         nuevoArray.push(array1[i]);
      }
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
