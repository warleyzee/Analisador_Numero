
var num = document.getElementById("txtn");
var text = document.getElementById('txt');
var resposta = document.getElementById('resposta')
var array = [];
var somaTotal = array; 

//função para saber se é um numero!!!
function isNumero(n){ // parametro n e o que o usuario vai digitar
    if(Number(n) >=1 && Number(n) <=100){// condição pra saber se o numero esta entre 1 e 100
        return true;
    }else{
        return false;
    }

}
//função pra saber se tem valor repetdo 
function inLista(n, l){// paramentro n e l para receber o numero e a lista existente 
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, array)){

       array.push(Number(num.value));
       let item = document.createElement('option');
       item.text = `Valor ${num.value} adicionado`;
       text.appendChild(item)
       resposta.innerHTML = '';

    }else{
        alert('Valor invalido ou ja encontrado na Lista!!!')
    }
    num.value = '';
    num.focus();

} 

function finalizar(){ 

    if( array == ''){
        alert("Nenhum numero adicionado")
    }else{

        let tot = array.length
        let maior = array[0];
        let menor = array[0];
        let media = tot / 2;
        let numero = array

        for(let pos in array){
            if(array[pos] > maior)
                maior = array[pos];
            if(array[pos]<menor)
                menor = array[pos]
            
            
        }
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        resposta.innerHTML += (`<p>Ao todo, temos ${tot} números cadastrados.</p>`)
        resposta.innerHTML += (`<p>A soma dos números são: ${numero.reduce(reducer)}</p>`)
        resposta.innerHTML += (`<p>O maior número cadastrado foi: ${maior}</p>`)
        resposta.innerHTML += (`<p>O menor número cadastrado foi: ${menor}</p>`)
        resposta.innerHTML += (`<p>A média entre eles é de: ${media}</p>`)

    }   
}
