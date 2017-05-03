/**
 * Ao clicar no botão "Começar processo" esconde todas as fieldsets que não sejam o primeiro
 * Atenção para o queryselector que escolhe todos que não sejam o primeiro do tipo escolhido seria algo como (!first-fieldset)
 */

function main() {
    document.getElementById("btn-start").addEventListener("click", function () {
        var fieldsets = document.querySelectorAll("fieldset:not(:first-of-type)");
        var fieldsetsArr = Array.prototype.slice.call(fieldsets);
        fieldsetsArr
            .forEach(function (x) {
                x.style.display = "none";
            })
        criarBotoes();
    });

    // var fieldsets2 = document.getElementsByClassName("next");
    // fieldsets2.addEventListener("click", function () {
    //     var fieldset = document.querySelectorAll("fieldset");
    //     for (var i in fieldset) {
    //         if (fieldset[i].style.display !== none) {
    //             fieldset[i].style.display = none;
    //             fieldset[i].nextElementSibling.style.display = block;
    //             return;
    //         }
    //     }
    // });
}


/**
 * Criar uma coleção com todas as fieldsets
 * No loop ele cria todas as vezes os botões, add as classes next e bgt (classe mestre)
 * 
 * No primeiro if ele ve se o elemento possui um outro fieldset na frente ou atrás (é um fieldset sem ser o primeiro ou o ultimo)
 * No segundo ele ve se ele é o primeiro (possui next) poderia ser também colocado !nextElement 
 * No ultimo ele ve se ele é o ultimo (possui prev)
 */

function criarBotoes() {
    var fieldsets = document.getElementsByTagName("fieldset");
    for (var i in fieldsets) {
        var prev = document.createElement("button");
        prev.classList.add("next", "bgt");
        prev.innerHTML = "voltar"
        var next = document.createElement("button");
        next.classList.add("next", "bgt");
        next.innerHTML = "avançar"

        if (fieldsets[i].previousElementSibling && fieldsets[i].nextElementSibling) {
            fieldsets[i].appendChild(prev);
            fieldsets[i].appendChild(next);
        } else if (fieldsets[i].nextElementSibling) {
            fieldsets[i].appendChild(next);
        } else if (fieldsets[i].previousElementSibling) {
            fieldsets[i].appendChild(prev);
        }
    }
}



/** Prepara função ao ativar tela */
window.onload = main;