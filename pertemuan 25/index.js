//Array

let nilai = [90, 80, 75, 100, 85];

for (let i = 0; i< nilai.length; i++)
{
    console.log("Nilai = ",nilai[i] +5);
}
console.log(nilai);

// nilai[2] = 90;
// console.log(nilai[nilai.length -1]);

let john = ["John", "Doe", 33, true];
console.log(john[john.length -1]);
console.log(john);

// toString()
console.log(john.toString());
// join
console.log(john.join(" - "));

// pop()
john.pop();
console.log(john.join(" - "));
// push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

// shift()
john.shift();
console.log(john.join(" - "));

// unshift()    
john.unshift("John"); 
john.unshift("Prof");
console.log(john.join(" - "));

// splice()
let buah = ["Apel", "Pepaya", "Durian", "Jeruk"];

buah.splice(2, 0, "Lemon", "Manggis");
console.log(buah);

// concat()
let honda = ["Sonic 150R", "CBR 150R", "Vario"];
let yamaha = ["Mio", "R15", "MX King"];
let suzuki = ["Satria 150", "Nex", "Smash"];

let motor = honda.concat(yamaha, suzuki);
console.log(motor);

// slice()
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih);
console.log(cemilanManis);

// sort()
let bilangan = [30, 1, 2, 3.5, 10, 100];

bilangan.sort();

console.log(bilangan);

// reverse()
let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.reverse();

console.log(buah);