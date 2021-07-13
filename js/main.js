function soma(n1, n2)
{
    return n1 + n2;    
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil")); 


var validar = 0;

function validade(idade) 
{
    if (idade >=18) 
    {
        validar = true;   
    } else 
    {
        validar = false;    
    }
    return validar;
}

var idade = prompt("Qual a sua idade??");
validade(idade);
console.log(validar);