
let btn = document.querySelector('#btn');
let saidas = document.querySelector('#saidas');
let sel = document.querySelectorAll('#select-jogo');
let qntJogos = document.querySelector('#quant-jogos');

let qntNums;
let mult;
let vet = []; 
let sorteado;

btn.addEventListener('click',function sorteador(){   
    selecionarJogo();
    sorteio();
});

function reset(){
    saidas.innerHTML='';
    vet=[];
}

function selecionarJogo(){
    if(sel[0].value == 'mega'){
        reset();
        qntNums = 6;
        mult = 61;
        console.log(vet);
    }
    if(sel[0].value == 'loto'){
        reset();
        qntNums = 15;
        mult = 26;
        console.log(vet);
    }
}

function sorteio(){
    for(let i = 1; i <= qntJogos.value;i++){  
        if(i > 9){  
            saidas.innerHTML+=`<p>Jogo ${i}</p>`;
        }else{
            saidas.innerHTML+=`<p>Jogo 0${i}</p>`;
        }
        for(let c = 0;c < qntNums; c++){
            sorteado = Math.floor(Math.random() * mult);
            if((vet.indexOf(sorteado) == -1) && (sorteado != 0)){
                vet.push(sorteado);
                if(sorteado > 9){
                    saidas.innerHTML+=`<span class="num">${sorteado}</span>`;
                }else{
                    saidas.innerHTML+=`<span class="num">0${sorteado}</span>`;
                }
            }else{
                c--;
            }
        }
        vet = [];
    }      
}