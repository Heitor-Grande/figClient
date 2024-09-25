import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from "react"
import InputComponente from "../../../src/components/inputComponent/inputComponente"
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import formatarDinheiro from "../../functions/formatarDinheiro"
import ModalLoad from '../../components/ModalLoad';
import axios from "axios"
import { toast } from 'react-toastify';
function Principal() {
    const canvasMovimentoResumo = useRef(null) //pego o canvas onde quero add o grafico
    const graficoMovimentoResumo = useRef(null) //pego o 'elemento' html do grafico
    const token = sessionStorage.getItem("tokenLogin") || localStorage.getItem("tokenLogin")
    const idUsuario = sessionStorage.getItem("idUsuario") || localStorage.getItem("idUsuario")
    const [showModalLoading, setShowModalLoading] = useState(false)
    const [dataInicio, setDataInicio] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0])//seta no primeiro dia do mes corrente
    function SetValorDataInico(e) {
        setDataInicio(e.target.value)
    }
    const [dataFim, setDataFim] = useState(new Date().toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).split('/').reverse().join('-'))//fica no dia da data corrente -> usando apenas toISOSString da ruim por causa do fuso
    function SetValorDataFim(e) {
        setDataFim(e.target.value)
    }
    function montarGraficoMovimentosResumido(totalEntrada, totalSaida) {
        const MovimentoResumo = canvasMovimentoResumo.current
        //se grafico ja existir eu deleto ele
        if (graficoMovimentoResumo.current) {
            graficoMovimentoResumo.current.destroy()
        }
        //grafico movimento - resumo
        graficoMovimentoResumo.current = new Chart(MovimentoResumo, {
            type: "doughnut",
            data: {
                labels: [
                    'Saída',
                    'Entrada'
                ],
                datasets: [{
                    label: '',
                    data: [totalSaida, totalEntrada],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                    ],
                    hoverOffset: 4,
                    weight: 1,

                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            //acesso a label do grafico e formato ela para dinheiro
                            label: function (tooltipItem) {
                                return "R$" + formatarDinheiro.formatarValorFixo(tooltipItem.raw)
                            }
                        }
                    }
                }
            }
        })
    }
    function CarregarGraficos() {
        setShowModalLoading(true)
        const dados = {
            dataInicio: dataInicio,
            dataFim: dataFim
        }
        axios.post(`${process.env.REACT_APP_API_URL}/carregar/dashboard/principal/${idUsuario}`, dados, {
            headers: {
                Authorization: token
            }
        }).then(function (resposta) {
            const dados = resposta.data.dados
            montarGraficoMovimentosResumido(dados.movimentoResumido.totalentrada, dados.movimentoResumido.totalsaida)
            setShowModalLoading(false)
        }).catch(function (erro) {
            toast.error(erro.response.data.message || erro.message)
            setShowModalLoading(false)
        })
    }
    useEffect(function () {
        CarregarGraficos()
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12  ">
                    <div className="col-sm col-md-12 col-12">
                        <h4>Dashboard</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <form onSubmit={function (e) {
                                    e.preventDefault()
                                    CarregarGraficos()
                                }}>
                                    <div className='row'>
                                        <div className='col-sm col-md-12 pe-1 col-lg-2 p-0'>
                                            <InputComponente
                                                label={"Data de Início"}
                                                tipo={"date"}
                                                required={false}
                                                className={'form-control form-control-sm'}
                                                id={"DataInicio"}
                                                placeholder={"Data de filtro inicial"}
                                                value={dataInicio}
                                                onchange={SetValorDataInico}
                                                readOnly={false}
                                            />
                                        </div>
                                        <div className='col-sm col-md-12 col-lg-2 p-0 pe-1'>
                                            <InputComponente
                                                label={"Data Fim"}
                                                tipo={"date"}
                                                required={false}
                                                className={'form-control form-control-sm'}
                                                id={"DataInicio"}
                                                placeholder={"Data de filtro inicial"}
                                                value={dataFim}
                                                onchange={SetValorDataFim}
                                                readOnly={false}
                                            />
                                        </div>
                                        <div className='col-sm col-md-12 col-lg-1 p-0 pt-4 text-center'>
                                            <Button type="submit" sx={{ width: "50%" }} variant="contained" color="primary" size="small" startIcon={<RestartAltIcon />}></Button>
                                        </div>
                                    </div>
                                </form>
                                <div className="row mt-2">
                                    <div className="col-sm col-md-6 col-lg-3 border rounded">
                                        <p className='mb-0 pb-0'>Resumo dos Movimentos</p>
                                        <small><i>Resumo dos movimentos com base no intervalo de datas.</i></small>
                                        <canvas ref={canvasMovimentoResumo} id="movimentosResumo"></canvas>
                                    </div>
                                </div>
                            </div>
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
export default Principal