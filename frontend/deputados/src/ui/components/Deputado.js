import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Inscricao from './Inscricao';

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

                                            <section>
                                                <button onClick={openModal}>•••</button>

                                                <Modal
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                                                    contentLabel="Deputado"
                                                    overlayClassName="modal-overlay"
                                                    className="modal-content">

                                                    <h1>{deputado.nome}</h1>
                                                    <hr/>
                                                    <p>{deputado.siglaPartido}</p>
                                                    <p>{deputado.siglaUf}</p>

                                                    <Link to={`/eventos/${deputado.id}`}>Ver eventos</Link>
                                                    <Inscricao deputado={deputado}/>

                                                </Modal>
                                                
                                            </section>
                                        ]))
    }, [deputado])

    return(
        <div>
            {deputadoTag}
        </div>
    )
}

export default Deputado