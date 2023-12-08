import { useState } from 'react';
import { useExcluirInscricao } from '../../hooks/eventos/excluirInscricao.hook';
import Modal from 'react-modal';
import '../components/Modal.css';

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
        <div>
            <button onClick={openModal} className='button'>Excluir</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal excluir"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Deseja excluir esta inscrição?</h2>                
                <div>
                    <form >

                        <div>
                            <button type='submit' onClick={onClick} className='button button-modal'>Sim</button>
                            <button className='button button-modal' onClick={closeModal}>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirInscricao