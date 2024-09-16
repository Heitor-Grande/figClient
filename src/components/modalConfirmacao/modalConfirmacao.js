import { Modal } from "react-bootstrap"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";
function ModalConfirmacao({
    mostrar,
    mensagemPrincipal,
    labelBtnConfirmar,
    labelBtnCancelar,
    acaoBtnConfirmar,
    acaoBtnCancelar
}) {
    return (
        <Modal show={mostrar} size="lg" centered>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-12 col-lg-12 text-center">
                            <i className="bi bi-question-circle fs-1"></i>
                        </div>
                        <div className="col-sm col-md-12 col-lg-12 text-center">
                            <p>{mensagemPrincipal}</p>
                        </div>
                        <div className="col-sm col-md-12 col-lg-12 text-center">
                            <Button onClick={acaoBtnCancelar} className="me-2" variant="contained" color="error">{labelBtnCancelar}</Button>
                            <Button onClick={acaoBtnConfirmar} variant="contained" color="primary">{labelBtnConfirmar}</Button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default ModalConfirmacao