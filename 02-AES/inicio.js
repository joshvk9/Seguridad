function encrypt() {
  var message = document.getElementById("message").value;
  var key = document.getElementById("key").value;
  var encryptionType = document.getElementById("encryptionType").value;

  var encryptedMessage = CryptoJS.AES.encrypt(message, key, {
    keySize: parseInt(encryptionType) / 8
  }).toString();

  document.getElementById("output").innerHTML = "Mensaje cifrado: " + encryptedMessage;
}

function decrypt() {
  var encryptedMessage = document.getElementById("message").value;
  var key = document.getElementById("key").value;
  var encryptionType = document.getElementById("encryptionType").value;

  var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key, {
    keySize: parseInt(encryptionType) / 8
  });

  var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

  document.getElementById("output").innerHTML = "Mensaje descifrado: " + decryptedMessage;
}
