import React from 'react';
import Modal from 'react-bootstrap/Modal';
function ModalLoad({ carregando = false, mensagem = "Carregando..." }) {
    return (
        <Modal show={carregando} centered size="sm">
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                </div>
                <p className='text-center m-0 p-0'>{mensagem}</p>
            </Modal.Body>
        </Modal>
    );
}

export default ModalLoad;
