import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Inscricao from './Inscricao';
import '../components/Modal.css';

Modal.setAppElement("#root");

const Deputado = ({deputado}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div>
            
            <div>
                <button onClick={openModal} className='feed-items'>{deputado.nome}</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal Deputado"
                    overlayClassName="modal-overlay"
                    className="modal-content">

                    <h2 className='titulo-modal'>{deputado.nome}</h2>
                    <p><strong>Partido: </strong>{deputado.siglaPartido}</p>
                    <p><strong>Estado: </strong>{deputado.siglaUf}</p>

                    <div>
                        <Inscricao deputado={deputado}/>
                        <button className='btn button button-modal'><Link to={`/eventos/${deputado.id}`}>Ver eventos</Link></button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Deputado