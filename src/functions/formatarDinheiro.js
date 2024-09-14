function formatarDinheiro(valor) {
    // Remove tudo que não for número
    valor = valor.replace(/\D/g, "")
    // Adiciona as casas decimais
    valor = (valor / 100).toFixed(2).replace(".", ",")
    // Adiciona o ponto como separador de milhar
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return valor
}

export default formatarDinheiro