


function criaVetor(qntJogos,qntNum){    //Parâmtros(Quantos jogos, quantos números)
    let vet = []    //Cria o vetor que receberá os valores
    let sorteado
    for(let i = 1; i <= qntJogos;i++){    
        for(let c = 0;c < qntNum; c++){
            sorteado = Math.floor(Math.random() * 61);
            if((vet.indexOf(sorteado) == -1) && (sorteado != 0)){
                vet.push(sorteado);
            }else{
                c--
            }
        }
        console.log('Jogo '+i+': '+vet);
        vet = []
        
    }   
}
criaVetor(20,6)
