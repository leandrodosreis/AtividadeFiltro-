const dadosUtilizados = require('./estados_cidades')

// let minhaLista = dadosUtilizados.listaDeEstados

const dados  = dadosUtilizados

const lista = []

// function getListaDeEstados(){ 
    
//     let conteudo
//     let resposta = []

//     dados.listaDeEstados.estados.forEach(function(itemEstado){
//         resposta.push (itemEstado.sigla)
//     })

//     conteudo = {
//             "uf" : resposta,
//             "quantidade" : resposta.length
//         }
//     return conteudo

// }

// console.log(getListaDeEstados())

function getListaDeEstados(){ 
    
    let conteudo
    let resposta = []

    dados.listaDeEstados.estados.forEach(function(itemEstado){
        resposta.push (itemEstado.sigla)
    })

    conteudo = {
            "uf" : resposta,
            "quantidade" : resposta.length
        }
    return conteudo
    
}

function getDadosEstado(siglas){

    let conteudo = {
        "uf" : null ,
        "descricao" : null ,
        "capital" : null ,
        "regiao" : null
    } 

    dados.listaDeEstados.estados.forEach(function(itemEstado){

        if(itemEstado.sigla == siglas){
            conteudo.uf = itemEstado.sigla
            conteudo.descricao = itemEstado.nome
            conteudo.capital = itemEstado.capital
            conteudo.regiao = itemEstado.regiao
        }

    })

    if(conteudo.uf == null 
        || conteudo.descricao == null 
        || conteudo.capital == null
        || conteudo.regiao == null){
        return false

    }else{  return conteudo }

}

function getCapitalEstado(siglas){

    let conteudo = {
        "uf" : null ,
        "descricao" : null ,
        "capital" : null 
    }

    dados.listaDeEstados.estados.forEach(function(itemEstado){
        if(itemEstado.sigla == siglas){
            conteudo.uf = itemEstado.sigla
            conteudo.descricao = itemEstado.nome
            conteudo.capital = itemEstado.capital
        }
    })

    if(conteudo.uf == null 
        || conteudo.descricao == null 
        || conteudo.capital == null){
        return false

    }else{  return conteudo }

}

function getEstadoRegiao(regioes){

    const regioes2 = regioes.toUpperCase()
    const estados = []
    let regiao = null

    dados.listaDeEstados.estados.forEach(item => {

        if (item.regiao.toUpperCase() === regioes2) {

            estados.push({
                uf: item.sigla,
                descricao: item.nome
            })

            regiao = item.regiao
        }
    })

    return {
        regiao,
        estados
    }
}



console.log(getEstadoRegiao("SUL"))
// console.log(getCapitalEstado('SP'))
// console.log(getDadosEstado('SP'))
// console.log(getListaDeEstados())