const dadosUtilizados = require('./estados_cidades')

// let minhaLista = dadosUtilizados.listaDeEstados

function getListaDeEstados(){

    let uf = 'sigla'

    dadosUtilizados.listaDeEstados.estados.forEach(function(itemEstado){

        itemEstado.sigla.forEach(function(itemSigla){
            if(uf == itemSigla)
                console.log(itemEstado)
        })
        
    })

}

getListaDeEstados()