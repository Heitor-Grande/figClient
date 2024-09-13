import { useState } from "react"
import Table from "../../../../components/table/table"
function ControleDeCaixa() {
    const [rows, setRows] = useState([])
    const columns = [
        {
            field: "nome",
            headerName: "Nome Completo",
            width: 200
        }
    ]
    function onRowClick(dados) {

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm col-md-12 col-lg-12 mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Controle de Caixa</h4>
                        </div>
                        <div className="card-body">
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
        </div>
    )
}

export default ControleDeCaixa