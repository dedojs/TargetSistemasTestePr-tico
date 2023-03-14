// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

const inverterString = (string) => {
    let arrayString = [];
    let newString = "";

    for (var i = string.length - 1; i >= 0; i --) {
        arrayString.push(string[i])
    }

    newString = arrayString.join("");
    console.log(newString)
}

inverterString("andre");
inverterString("Sandoval Bartolomeu");


