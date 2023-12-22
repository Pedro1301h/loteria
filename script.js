
let btn = document.querySelector('#btn');
let saidas = document.querySelector('#saidas')

btn.addEventListener('click',function criaVetor(){    //Parâmtros(Quantos jogos, quantos números)
    let vet = [];    //Cria o vetor que receberá os valores
    let sorteado;
    for(let i = 1; i <= 10;i++){  
        if(i > 9){  
            saidas.innerHTML+=`<p><br>Jogo ${i}</p>`
        }else{
            saidas.innerHTML+=`<p><br>Jogo 0${i}</p>`
        }
        for(let c = 0;c < 15; c++){
            sorteado = Math.floor(Math.random() * 61);
            if((vet.indexOf(sorteado) == -1) && (sorteado != 0)){
                vet.push(sorteado);
                if(sorteado > 9){
                    saidas.innerHTML+=`<span class="num">${sorteado}</span><br>`
                }else{
                    saidas.innerHTML+=`<span class="num">0${sorteado}</span><br>`
                }
            }else{
                c--;
            }
        }

        console.log('J'+i+': '+vet);
        vet = [];
    }      
    btn.removeEventListener('click',criaVetor)
})




