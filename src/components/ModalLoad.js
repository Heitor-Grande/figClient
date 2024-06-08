import React from 'react';

function ModalLoad({ carregando = false, mensagem = "Carregando..." }) {
    return (
        <div className='position-absolute top-50 start-50 translate-middle w-100 h-100 bg-light' hidden={!carregando}>
            <div className="card w-50 m-auto top-50">
                <div className='card-body'>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status"></div>
                    </div>
                    <p className='text-center m-0 p-0'>{mensagem}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalLoad;
