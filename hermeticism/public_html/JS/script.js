//Gustavo Cardoso Ribeiro;
//833588;

let i=0;

function complementa()
{
    document.getElementById("completo").value = document.getElementById("nome").value + " " + document.getElementById("sobrenome").value;
}

function pago()
{
    if(i===0) 
    {
        prompt("Insira seu CPF:");
        prompt("Insira o número do seu cartão:");
        prompt("Insira o código de segurança:");
        alert("Sucesso");
        i++;
    }
}