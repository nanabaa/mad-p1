//ex 1

//ex 2
//ex 3
//ex 4

//ex a
var nomeAplicacao : string = "FIAP";

//ex b
let totalSalariosMes : number = 0.0;

//ex c
const diasFaturamento : number = 30;

//ex d
const notasAlunos : Array<number> = [];
notasAlunos [ 0 ] = 10.0;
notasAlunos [ 1 ] = 6.0;
notasAlunos [ 1 ] = 5.5;
console.log("Notas Aluno 1: ", notasAlunos);

let notasAlunos2 : Array<number> = [];
console.log("Notas Aluno 2: ", notasAlunos2);

notasAlunos2 = [...notasAlunos];
console.log("Notas Aluno 2: ", notasAlunos2);

let notasAlunos3 = notasAlunos2;
console.log("Notas Aluno 3: ", notasAlunos3);

//ex e
interface Carro{
    placa: string;
    chassi: string;
    modelo: string;
    ano: number;
    cor: string;
    nomeDono?: string;
}

const carro1 : Carro = {placa: "XXX1234", chassi: "9BD111060T5002156", modelo: "jetta", ano: 2020, cor: "prata"}

//f
const numeroOuro = 1.61803;

//g
const nomeAlunos : Array<string> = ["Joao", "Maria"]

//h
let qtdParesTenis : number =5;

//ex 5
//ex 6
//ex 7
//ex 8
//ex 9