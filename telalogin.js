const usuarios = [
    {
        nome: 'mari',
        senha: 'mari'
    },
    {
        nome: 'adm',
        senha: 'adm'
    },
    {
        nome: 'gestao',
        senha: '123'
    }
]
  
document.getElementById('loginForm').addEventListener('submit', function(event){

event.preventDefault();

    let Peganome = document.getElementById('nome').value;
    let Pegasenha = document.getElementById('senha').value;
    let Validalogin = false;
    let redirecionarPara = "";

    for(let i in usuarios){

        if(Peganome === usuarios[i].nome && Pegasenha === usuarios[i].senha){
            Validalogin = true;

            redirecionarPara = (Peganome === "gestao") ? "homeG.html" : "home.html";
            break;
        } 

    }
    if(Validalogin){
        alert('Sucesso!');
        location.href = redirecionarPara;
    }else{
        alert('Usuário ou senha incorretos!');
    }
});

