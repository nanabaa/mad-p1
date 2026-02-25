//const HARDWARE_LOG : string = "Debug"
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//ex a
var nomeAplicacao = "FIAP";
//ex b
var totalSalariosMes = 0.0;
//ex c
var diasFaturamento = 30;
//ex d
var notasAlunos = [];
notasAlunos[0] = 10.0;
notasAlunos[1] = 6.0;
notasAlunos[1] = 5.5;
console.log("Notas Aluno 1: ", notasAlunos);
var notasAlunos2 = [];
console.log("Notas Aluno 2: ", notasAlunos2);
notasAlunos2 = __spreadArray([], notasAlunos, true);
console.log("Notas Aluno 2: ", notasAlunos2);
var notasAlunos3 = notasAlunos2;
console.log("Notas Aluno 3: ", notasAlunos3);
