//Variaveis globais
let inferior = 400;
let superior = 200;
let pista = 100;

function comprar(){
    //Recuperando dados dos elementos
    let quantidade = document.getElementById('qtd').value;
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //Condicionais e calculo da quantidade de ingressos disponíveis e geração dos alertas
    if (tipoIngresso == 'inferior'){
        if ((inferior - quantidade) >= 0){
            inferior = inferior - quantidade;
        } else {
           alert('Quantidade indisponível para INFERIOR.');
           inferior = inferior;
        }
    } else {
            if (tipoIngresso == 'superior') {
                if ((superior - quantidade) >= 0){
                } else {
                    alert('Quantidade indisponível para SUPERIOR.');    
                }      
        } else {
            if (pista - quantidade >= 0){
                pista = pista - quantidade;
            } else {
                alert('Quantidade indisponível para PISTA.');             
            }
        }
    }

    //Mostrar quantidade atualizada ao usuário:
    quantidadeRestante = document.getElementById('qtd-geral');
    quantidadeRestante.innerHTML = `<li>Pista<span id="qtd-pista">${pista}</span></li>
    <li>Cadeira superior<span id="qtd-superior">${superior}</span></li>
    <li>Cadeira inferior<span id="qtd-inferior">${inferior}</span></li> `
}
