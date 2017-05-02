function prox() {                                                                   
    var fs = document.getElementsByClassName('ativo');                      //O primeiro fieldset do index vem com a classe ativo
    var fs_atual = fs[0];                                                   //Esse fieldset sera considerado o primeiro 
    var fs_prox = fs_atual.nextElementSibling;                              //o prox sera o primeiro fieldset após o atual
    var btn = document.getElementsByClassName('btn-ativo');                 //Escolhendo o botão ativo
    var btn_atual = btn[0];
    var btn_prox = btn[1];

    
    //Se o fieldset atual estiver aparecendo, se ele tiver um irmão existente e se o botão nao estiver desativado
    if (fs_atual.style.display !== 'none' && fs_atual.nextElementSibling !== null && !btn_atual.classList.contains("disabled")) {
        fs_atual.style.display = 'none';                                    //Desaparece o atual
        fs_prox.style.display = 'block';                                    //Aparece o próximo
        fs_atual.setAttribute("class", "nativo");                           //Substitui a classe ativo por nativo e coloca ativo no proximo fieldset
        fs_prox.setAttribute("class","ativo");
        btn_atual.classList.remove("btn-ativo");
        btn_prox.classList.add("btn-ativo");
    }
}

function validar(a) {                                                       //Função para validar se o input foi escrito corretamente
    var x = 0;
    var teste = document.querySelector(".ativo input"); 

    if (teste.value != "") {
        var botao = document.getElementById("button");
        botao.classList.remove("disabled");
        botao.classList.add("enable")
    }
}

