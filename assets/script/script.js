function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if (campoPesquisa.trim() ==""){
        section.innerHTML = "<p> Digite o nome de uma obra ou referência válida!</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let titulo= "";
    let descricao = "";
    
    for (let dado of dados){

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">
                    ${dado.titulo}</a></h2>
                <p class="descricao">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
        `
        }
    

    }

    if (!resultados) {
        resultados = "<p> Nenhuma obra foi encontrada </p>"
    }
    
    section.innerHTML = resultados;    

}


