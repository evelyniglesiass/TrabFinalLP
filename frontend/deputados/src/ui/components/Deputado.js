import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Inscricao from './Inscricao';
import '../components/Modal.css';

Modal.setAppElement("#root");

const Deputado = ({deputado}) => {
    
    const [deputadoTag, setDeputadoTag]  = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {

        setDeputadoTag([]);

        setDeputadoTag((oldDeputadoTag) => ([...oldDeputadoTag,

                                        <div>
                                            <button onClick={openModal} className='feed-items'>Deputado</button>
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                contentLabel="Modal Deputado"
                                                overlayClassName="modal-overlay"
                                                className="modal-content">

                                                <h2 className='titulo-modal'>{deputado.nome}</h2>
                                                <p>{deputado.siglaPartido}</p>
                                                <p>{deputado.siglaUf}</p>

                                                <div>
                                                    <Inscricao deputado={deputado}/>
                                                    <Link to={`/eventos/${deputado.id}`}>Ver eventos</Link>                                                    <button className='button button-modal'>Ver eventos</button>
                                                </div>

                                            </Modal>
                                        </div>
                                        ]))
    }, [deputado])

    return(
        <div>
            {deputadoTag}
        </div>
    )
}

export default Deputado