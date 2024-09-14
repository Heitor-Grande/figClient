import { useParams } from "react-router-dom"
import InputComponente from "../../../../components/inputComponent/inputComponente"
import { useEffect, useState } from "react"
import SelectComponente from "../../../../components/selectComponent/selectComponent"
import formatarDinheiro from "../../../../functions/formatarDinheiro"
import ModalLoad from "../../../../components/ModalLoad"
import axios from "axios"
import { toast } from "react-toastify"
function FormularioControleCaixa() {
    const params = useParams()
    const [inputsMovimento, setInputsMovimento] = useState({
        titulo: "",
        tipo: "",
        valor: "",
        data: ""
    })
    function setTituloMovimento(e) {
        setInputsMovimento({
            ...inputsMovimento,
            titulo: e.target.value
        })
    }
    function setTipoMovimento(e) {
        setInputsMovimento({
            ...inputsMovimento,
            tipo: e.target.value
        })
    }
    function setValorMovimento(e) {
        setInputsMovimento({
            ...inputsMovimento,
            valor: formatarDinheiro(e.target.value)
        })
    }
    function setDataMovimento(e) {
        setInputsMovimento({
            ...inputsMovimento,
            data: e.target.value
        })
    }
    const optionsSelect = [
        { label: "Entrada", value: "E" },
        { label: "Saída", value: "S" }
    ]
    const [showModalLoading, setShowModalLoading] = useState(false)
    const token = sessionStorage.getItem("tokenLogin") || localStorage.getItem("tokenLogin")
    const idUsuario = sessionStorage.getItem("idUsuario") || localStorage.getItem("idUsuario")
    function CriarMovimento(e) {
        e.preventDefault()
        setShowModalLoading(true)
        const dados = {
            inputsMovimento: inputsMovimento,
            id_usuario: idUsuario
        }
        axios.post(`${process.env.REACT_APP_API_URL}/criar/novo/movimento`, dados, {
            headers: {
                Authorization: token
            }
        }).then(function (resposta) {
            toast.success(resposta.data.message)
            setTimeout(() => {
                window.location = '/home/controle/caixa'
            }, 2000)
            setShowModalLoading(false)
        }).catch(function (erro) {
            toast.error(erro.response.data.message || erro.message)
            setShowModalLoading(false)
        })
    }
    function CarregarMovimento(){
        
    }
    useEffect(function () {
        if (params.acao != "novo" && params.id != 0) {

        }
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>{params.acao == "novo" ? 'Novo movimento' : 'Editar Movimento'}</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={CriarMovimento}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm col-md-4 col-lg-3">
                                            <InputComponente
                                                label={'Título do Movimento'}
                                                tipo={'text'}
                                                required={true}
                                                id={'tituloMovimento'}
                                                placeholder={'Recebimento de dividendos'}
                                                value={inputsMovimento.titulo}
                                                onchange={setTituloMovimento}
                                                readOnly={false}
                                                maxLength={40}
                                                minLength={5}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm col-md-4 col-lg-3">
                                            <SelectComponente
                                                options={optionsSelect}
                                                value={inputsMovimento.tipo}
                                                onchange={setTipoMovimento}
                                                label={'Tipo do movimento'}
                                                required={true}
                                                disabled={false}
                                            />
                                        </div>
                                        <div className="col-sm col-md-4 col-lg-3">
                                            <InputComponente
                                                label={'Valor do movimento'}
                                                tipo={'text'}
                                                required={true}
                                                id={'valorMovimento'}
                                                placeholder={'2.500,00'}
                                                value={inputsMovimento.valor}
                                                onchange={setValorMovimento}
                                                readOnly={false}
                                            />
                                        </div>
                                        <div className="col-sm col-md-4 col-lg-3">
                                            <InputComponente
                                                label={'Data do movimento'}
                                                tipo={'date'}
                                                required={true}
                                                id={'dataMovimento'}
                                                placeholder={''}
                                                value={inputsMovimento.data}
                                                onchange={setDataMovimento}
                                                readOnly={false}
                                            />
                                        </div>
                                        <div className="col-sm col-md-4 col-lg-3 pt-4">
                                            <button type="submit" className="w-100 btn btn-outline-primary btn-sm">Criar movimento</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ModalLoad carregando={showModalLoading} mensagem={"Carregando..."} />
        </div>
    )
}

export default FormularioControleCaixa