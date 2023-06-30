function cifrar() {
  var palabra = document.getElementById("palabra").value;
  var clave = document.getElementById("clave").value;

  // Eliminar espacios, puntos y comas
  palabra = palabra.replace(/[^\w\s]|_/g, "").replace(/[\s.;]/g, "");

  // Cifrado César
  var cifradoCesar = "";
  for (var i = 0; i < palabra.length; i++) {
    var charCode = palabra.charCodeAt(i);
    var cifradoChar = String.fromCharCode(((charCode - 65 + clave) % 26) + 65);
    cifradoCesar += cifradoChar;
  }

  // Cifrado Vigenère
  var cifradoVigenere = "";
  for (var i = 0; i < palabra.length; i++) {
    var charCode = palabra.charCodeAt(i);
    var claveCharCode = clave.charCodeAt(i % clave.length) - 65;
    var cifradoChar = String.fromCharCode(
      ((charCode - 65 + claveCharCode) % 26) + 65
    );
    cifradoVigenere += cifradoChar;
  }

  document.getElementById("tipoCifrado").textContent =
    "Tipo de Cifrado: Vigenère";
  document.getElementById("resultadoCifrado").textContent = cifradoVigenere;
}

function descifrar() {
  var palabra = document.getElementById("palabra").value;
  var clave = document.getElementById("clave").value;

  // Eliminar espacios, puntos y comas
  palabra = palabra.replace(/[^\w\s]|_/g, "").replace(/[\s.;]/g, "");

  // Descifrado César
  var descifradoCesar = "";
  for (var i = 0; i < palabra.length; i++) {
    var charCode = palabra.charCodeAt(i);
    var descifradoChar = String.fromCharCode(
      ((charCode - 65 - clave) % 26) + 65
    );
    descifradoCesar += descifradoChar;
  }

  // Descifrado Vigenère
  var descifradoVigenere = "";
  for (var i = 0; i < palabra.length; i++) {
    var charCode = palabra.charCodeAt(i);
    var claveCharCode = clave.charCodeAt(i % clave.length) - 65;
    var descifradoChar = String.fromCharCode(
      ((charCode - 65 - claveCharCode) % 26) + 65
    );
    descifradoVigenere += descifradoChar;
  }

  document.getElementById("tipoCifrado").textContent = "Tipo de Cifrado: César";
  document.getElementById("resultadoDescifrado").textContent = descifradoCesar;
}
