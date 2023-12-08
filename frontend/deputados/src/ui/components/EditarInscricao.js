import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import '../components/Modal.css';

Modal.setAppElement("#root");

const EditarInscricao = ({deputado}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (    
        <div>
            <button onClick={openModal} className='button button-modal'>Inscrever</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal inscrição"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Inscrever</h2>                
                <div>
                    <form >
                        <select className='select-input' name='curso'>
                            <option value="" disabled selected>Evento</option>
                            <option value="0">Informática</option>
                            <option value="1">Eventos</option>
                            <option value="2">Mecânica</option>
                            <option value="3">Plásticos</option>
                        </select>

                        <div>
                            <button className='button button-modal inscricao'>Inscrever</button>
                            <button className='button button-modal inscricao' onClick={closeModal}>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default EditarInscricao