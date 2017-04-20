function prox() {
    var fs = document.getElementsByClassName('ativo');
    var fs_atual = fs[0];
    var fs_prox = fs_atual.nextElementSibling;
    var btn = document.getElementsByClassName('btn-ativo');
    var btn_atual = btn[0];
    var btn_prox = btn.nextElementSibling;

    if (fs_atual.style.display !== 'none' && fs_atual.nextElementSibling !== null && !btn_atual.classList.contains("disabled")) {
        fs_atual.style.display = 'none';
        fs_prox.style.display = 'block';
        fs_atual.setAttribute("class", "nativo");
        fs_prox.setAttribute("class","ativo");
        btn_atual.classList.remove("btn-ativo");
        btn_prox.classList.add("btn-ativo");
    }
}

function validar(a) {
    var x = 0;
    var teste = document.querySelectorAll(".ativo input").value; 

    for (var index = 0; index < teste.length; index++) {
        if (teste == "") {
            x++;
        }
    }

    if (x == 0) {
        var botao = document.getElementById("button");
        botao.classList.remove("disabled");
        botao.classList.add("enable")
    }
}