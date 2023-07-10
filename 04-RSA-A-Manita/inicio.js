function calculate() {
    var prime1 = parseInt(document.getElementById("prime1").value);
    var prime2 = parseInt(document.getElementById("prime2").value);

    if (isNaN(prime1) || isNaN(prime2)) {
        alert("Ingresa números válidos.");
        return;
    }

    var n = prime1 * prime2;
    var fhi = (prime1 - 1) * (prime2 - 1);
    var e = findE(fhi);
    var d = findD(e, fhi);

    document.getElementById("fhi").innerHTML = "fhi(n): " + fhi;
    document.getElementById("n").innerHTML = "n: " + n;
    document.getElementById("e").innerHTML = "e: " + e;
    document.getElementById("d").innerHTML = "d: " + d;
}

function findE(fhi) {
    // En este ejemplo, se asume que 'e' es 65537 (un número primo comúnmente utilizado en RSA)
    return 65537;
}

function findD(e, fhi) {
    // Aplicando el algoritmo extendido de Euclides para encontrar el inverso multiplicativo de 'e' (d)
    var d = 0;
    var x1 = 0;
    var x2 = 1;
    var y1 = 1;
    var originalFhi = fhi;

    while (e > 0) {
        var temp1 = fhi / e;
        var temp2 = fhi - temp1 * e;
        fhi = e;
        e = temp2;

        var x = x2 - temp1 * x1;
        var y = d - temp1 * y1;

        x2 = x1;
        x1 = x;
        d = y1;
        y1 = y;
    }

    if (fhi === 1) {
        if (d < 0) {
            d += originalFhi;
        }
        return d;
    } else {
        return NaN;
    }
}

function encrypt() {
    var message = document.getElementById("message").value;
    var e = parseInt(document.getElementById("e").innerHTML.split(":")[1].trim());
    var n = parseInt(document.getElementById("n").innerHTML.split(":")[1].trim());

    var encryptedMessage = "";

    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        var encryptedCharCode = modExp(charCode, e, n);
        encryptedMessage += encryptedCharCode + " ";
    }

    document.getElementById("output").innerHTML = encryptedMessage;
}

function decrypt() {
    var ciphertext = document.getElementById("message").value;
    var d = parseInt(document.getElementById("d").innerHTML.split(":")[1].trim());
    var n = parseInt(document.getElementById("n").innerHTML.split(":")[1].trim());

    var decryptedMessage = "";

    var ciphertextArray = ciphertext.split(" ");
    for (var i = 0; i < ciphertextArray.length; i++) {
        var charCode = parseInt(ciphertextArray[i]);
        var decryptedCharCode = modExp(charCode, d, n);
        decryptedMessage += String.fromCharCode(decryptedCharCode);
    }

    document.getElementById("output").innerHTML = decryptedMessage;
}

function modExp(base, exponent, modulus) {
    var result = 1;

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
        }
        base = (base * base) % modulus;
        exponent = Math.floor(exponent / 2);
    }

    return result;
}
