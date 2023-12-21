const validarCNPJ = (cnpj) => {
    $.ajax({
        'url':'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type':'GET',
        'dataType': 'jsonp',
        'success': function(dado) {
            if (dado.nome == undefined) {
                alert(dado.status + '' + dado.message)
            } else {
                console.log()
                document.getElementById('rasaoSocial').value = dado.nome 
                document.getElementById('nomeFantasia').value = dado.fantasia
                document.getElementById('abertura').value = dado.abertura
                document.getElementById('situacao').value = dado.situacao
                document.getElementById('endereco').value = dado.logradouro
                document.getElementById('municipio').value = dado.municipio 
                document.getElementById('estado').value = dado.uf 
                document.getElementById('telefone').value = dado.telefone 
            }
        } 
    })
}

const cleanAll = () => {
    document.getElementById("cnpj").value = ""
    document.getElementById('rasaoSocial').value = "" 
    document.getElementById('nomeFantasia').value = ""
    document.getElementById('abertura').value = ""
    document.getElementById('situacao').value = ""
    document.getElementById('endereco').value = ""
    document.getElementById('municipio').value = "" 
    document.getElementById('estado').value = ""
    document.getElementById('telefone').value = ""
}