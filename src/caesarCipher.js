function cipher(string) {
    let cipheredString = '';

    for (let char of string) {
        if (char === ' ') {
            cipheredString += ' ';
        }
        else {
            cipheredString += returnOffsetChar(char);
        }
    }

    return cipheredString;
}
function returnOffsetChar(char) {
    let charCode = char.charCodeAt(0);

    if (charCode === 90) {
        charCode = 65;
    }
    else if (charCode === 122) {
        charCode = 97;
    }
    else if (charCode === 57) {
        charCode = 48;
    }
    else {
        charCode += 1;
    }

    return String.fromCharCode(charCode);
}



const caesarCipher = {
    cipher,
}

export default caesarCipher;