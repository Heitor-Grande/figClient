import { useState } from "react"
import Table from "../../../../components/table/table"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
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
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-sm col-md-12 col-lg-12 text-end m-0 p-0">
                                        <Fab size="small" color="primary" aria-label="add" variant="extended">
                                            <AddIcon />
                                            Novo
                                        </Fab>
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
        </div>
    )
}

export default ControleDeCaixa