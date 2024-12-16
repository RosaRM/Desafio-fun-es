let nome = "Rafael Starkiller";
let vitorias = 60;
let derrotas = 42; 
let nivel 

WxL = GetRank(vitorias, derrotas)


function GetRank (vitorias, derrotas) {
    saldo = vitorias - derrotas



    
    return saldo
}
if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
} else if (vitorias > 101) {
    nivel = "Imortal";
}
console.log(`O Herói tem de saldo de ${WxL} está no nível de ${nivel}`);


