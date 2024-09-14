import { useEffect, useState } from "react"
import Table from "../../../../components/table/table"
import axios from "axios"
import AddIcon from '@mui/icons-material/Add';
import ModalLoad from "../../../../components/ModalLoad";
function ControleDeCaixa() {
    const [rows, setRows] = useState([])
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 20
        },
        {
            field: "titulo",
            headerName: "Título",
            width: 400
        },
        {
            field: "valor",
            headerName: "Valor",
            width: 150
        },
        {
            field: "datamovimento",
            headerName: "Data do Movimento",
            width: 150
        },
        {
            field: "tipo",
            headerName: "Tipo",
            width: 100
        }
    ]
    const [showModalLoading, setShowModalLoading] = useState(false)
    const token = sessionStorage.getItem("tokenLogin") || localStorage.getItem("tokenLogin")
    const idUsuario = sessionStorage.getItem("idUsuario") || localStorage.getItem("idUsuario")
    function carregarMovimentos() {
        setShowModalLoading(true)
        axios.get(`${process.env.REACT_APP_API_URL}/carregar/movimentos/caixa/${idUsuario}`, {
            headers: {
                Authorization: token
            }
        }).then(function (resposta) {
            setRows(resposta.data.movimentos)
            setShowModalLoading(false)
        }).catch(function (erro) {
            setShowModalLoading(false)
        })
    }
    useEffect(function () {
        carregarMovimentos()
    }, [])
    function onRowClick(dados) {
        window.location = `/home/controle/caixa/formulario/${dados.id}/editar`
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Controle de Caixa</h4>
                        </div>
                        <div className="card-body">
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-sm col-md-12 col-lg-12 text-end m-0 p-0">
                                        <a href="/home/controle/caixa/formulario/0/novo" className="text-white link-offset-2 link-underline link-underline-opacity-0 bg-primary btn">
                                            <AddIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Table
                                rows={rows}
                                columns={columns}
                                checkboxSelection={false}
                                pageSize={5}
                                pageSizeOptions={[5, 10, 15, 20]}
                                onRowClick={onRowClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ModalLoad
                carregando={showModalLoading}
                mensagem={"Carregando..."}
            />
        </div>
    )
}

export default ControleDeCaixa