var botaoAdicionar = document.querySelector("#buscar-atletas");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-atletas.herokuapp.com/atletas");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var atletas = JSON.parse(resposta);

            atletas.forEach(function(atleta) {
                adicionaAtletaNaTabela(atleta);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
