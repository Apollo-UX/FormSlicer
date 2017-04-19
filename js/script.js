var button = document.getElementById('button');
var voltar = document.getElementById("voltar");

button.onclick = function() {
    var fs = document.getElementsByClassName('ativo');
    var fs_atual = fs[0];
    var fs_prox = fs_atual.nextElementSibling;
    if (fs_atual.style.display !== 'none') {
        fs_atual.style.display = 'none';
        fs_prox.style.display = 'block';
        fs_prox.setAttribute("class","ativo");
    }
}

voltar.onclick = function() {
  
}
