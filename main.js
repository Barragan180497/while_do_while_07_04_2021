
console.log("Ciclos");


for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = ''; !(i == 'Fabian');) {
    i = prompt("Ingrese su nombre");
}

let i = 0, x = 0;
while(i<5 && x<5){
    console.log(i);
    console.log(`Variable constante ${x}`);
    i++;
}

let opc = '';
while(!(opc=="Fabian")){
    opc = prompt("Ingrese su nombre");
}

do{
    var opc = prompt("Ingrese su nombre");
}while(!(opc=="Fabian"));

