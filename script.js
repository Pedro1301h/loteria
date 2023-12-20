
let num =[]     //Vetor que receberá os números sorteados

let qnt = 6     //quantidade de números a serem sorteados

for(let i = 0;i<qnt;i++ ){
    let sorteado = Math.floor(Math.random() * 26)   //sorteia um número entre 0 e 26
    if((num.indexOf(sorteado) == -1) && (sorteado != 0)){   //SE o número sorteado não for encontrado no vetor e se for diferente de 0...
        num.push(sorteado)                     //...insere na última posição do vetor
    }else{
        sorteado = Math.floor(Math.random() * 26)       //Se não, sortear novamente e...
        qnt++                   //...soma 1 na quantidade de números a serem sorteados
    }
    
}

console.log(num)
