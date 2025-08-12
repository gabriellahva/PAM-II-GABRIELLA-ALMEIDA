class Carro {
marca: string;

constructor(marca: string) {
this.marca = marca;
}
}

const carrol = new Carro('Toyota');
const carro2 = new Carro('Honda");

console.log(carrol.marca); // Toyota 
console.log(carro2.marca); // Honda