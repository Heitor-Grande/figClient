import Chart from 'chart.js/auto';
import { useEffect, useRef } from "react"
import InputComponente from "../../../src/components/inputComponent/inputComponente"
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
function Principal() {
    const canvasMovimentoResumo = useRef(null) //pego o canvas onde quero add o grafico
    const graficoMovimentoResumo = useRef(null) //pego o 'elemento' html do grafico
    function CarregarGraficos(e) {
        e.preventDefault()
    }
    useEffect(function () {
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
                    label: 'Total',
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                    ],
                    hoverOffset: 4,
                    weight: 0.1
                }]
            }
        })
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12  ">
                    <div className="col-sm col-md-12 col-12">
                        <h4>Dashboards</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <form onSubmit={CarregarGraficos}>
                                    <div className='row'>
                                        <div className='col-sm col-md-12 pe-1 col-lg-2 p-0'>
                                            <InputComponente
                                                label={"Data de Início"}
                                                tipo={"date"}
                                                required={false}
                                                className={'form-control form-control-sm'}
                                                id={"DataInicio"}
                                                placeholder={"Data de filtro inicial"}
                                                value={""}
                                                onchange={function () {

                                                }}
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
                                                value={""}
                                                onchange={function () {

                                                }}
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
        </div>

    )
}
export default Principal