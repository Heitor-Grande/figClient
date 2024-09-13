//função para gerar base64 de arquivos
function GerarBase64(array) {
    return new Promise(function (resolve, reject) {
        try {
            const reader = new FileReader()
            const ListaFilesBase64 = []
            for (let i = 0; i < array.length; i = i + 1) {
                const file = array[i]
                reader.addEventListener("load", function () {
                    const filebase64 = reader.result //arquivo convertido em base64
                    ListaFilesBase64.push({
                        fileBase64: filebase64
                    })
                    if (ListaFilesBase64.length == array.length) {
                        resolve(ListaFilesBase64) //retona array de arquivos convertidos
                    }
                })
                reader.readAsDataURL(file)//lê o arquivo e dispara o evento de load
            }
        } catch (error) {
            reject(error)
        }
    })
}

export default GerarBase64