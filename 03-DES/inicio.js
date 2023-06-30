// Función para cifrar el archivo
function cifrarArchivo() {
  const archivo = document.getElementById('archivo').files[0];
  const clave = document.getElementById('clave').value;

  const reader = new FileReader();
  reader.onload = function (e) {
      const contenido = e.target.result;

      // Cifrar el contenido utilizando CryptoJS
      const mensajeCifrado = CryptoJS.AES.encrypt(contenido, clave).toString();

      document.getElementById('mensajeCifrado').value = mensajeCifrado;
  };
  reader.readAsText(archivo);
}

// Función para descifrar el archivo
function descifrarArchivo() {
  const mensajeCifrado = document.getElementById('mensajeCifrado').value;
  const clave = document.getElementById('clave').value;

  // Descifrar el mensaje utilizando CryptoJS
  const contenidoDescifrado = CryptoJS.AES.decrypt(mensajeCifrado, clave).toString(CryptoJS.enc.Utf8);

  alert('Mensaje descifrado: ' + contenidoDescifrado);
}
