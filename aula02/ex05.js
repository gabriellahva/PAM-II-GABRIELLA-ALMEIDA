let cont = 0;
let palavra = "apartamento";
let letra = "a";

for (let i = 0; i < palavra.length; i++) {
  if (palavra[i] == letra) {
    cont++
  }
}

document.write(cont) 