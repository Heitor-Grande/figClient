import React from 'react';

function ModalLoad({ carregando = false, mensagem = "Carregando..." }) {
    return (
        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-light' hidden={!carregando}>
            <div className="card w-50">
                <div className='card-body'>
                    <div className="d-flex justify-content-center mb-3">
                        <div className="spinner-border" role="status"></div>
                    </div>
                    <p className='text-center m-0'>{mensagem}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalLoad;
