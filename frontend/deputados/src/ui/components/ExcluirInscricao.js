import { useState } from 'react';
import { useExcluirInscricao } from '../../hooks/eventos/excluirInscricao.hook';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

// Component para excluir vagas
const ExcluirInscricao = ({inscricao}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {excluirInscricao} = useExcluirInscricao();

    async function onClick(event){
        event.preventDefault();

        await excluirInscricao(inscricao.id);
        
    }

    return (
        <div >
            <button onClick={openModal}>🗑️</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2>Deseja excluir sua inscricao?</h2>                
                <div>
                    <form >

                        <div>
                            <button type='submit' onClick={onClick}>Sim</button>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirInscricao