import '../../App.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../components/Modal.css';
import { useListarTodosEventos } from '../../hooks/eventos/listarTodosEventos.hook';
import { useEditarInscricao } from '../../hooks/eventos/editarInscricao.hook';
import { useCadastrarEvento } from '../../hooks/eventos/cadastrarEvento.hook';

Modal.setAppElement("#root");

const EditarInscricao = ({id, evento, listar}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [texto, setTexto] = useState("");

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [eventos, setEventos] = useState([])

    const { listarTodosEventos } = useListarTodosEventos();

    useEffect(() => {
        async function listar() {
    
          const response = await listarTodosEventos();
          setEventos(response) 
    
        }
    
        listar();
    }, [])

    const [formInput, setFormInput] = useState({
        deputado: id,
        evento: 0
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
        const textoOpcaoSelecionada = event.target.options[event.target.selectedIndex].text;
        setTexto(textoOpcaoSelecionada);
    }

    const { editarInscricao } = useEditarInscricao();
    const { cadastrarEvento } = useCadastrarEvento();

    async function onSubmit(event) {
        event.preventDefault();
        
        if (texto != "") {
            await cadastrarEvento(formInput.evento, texto);
            setTexto("")
        }

        await editarInscricao(formInput.deputado, evento.id, formInput.evento);   

        listar()

    }

    return (    
        <div>
            <button onClick={openModal} className='btn button button-modal'>Editar</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal inscrição"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Editar inscrição</h2>                
                <div>
                    <form>
                        <select className='select-input select' name='evento' onChange={handleChange}>
                            <option value="" disabled selected>Evento</option>
                            {eventos ? 
                                eventos.map((e, num) => (
                                    <option key={num} value={e.id}>{e.id} - {e.descricaoTipo}</option>
                                ))
                            : 
                                null
                            }
                        </select>

                        <div>
                            <button className='button button-modal inscricao' onClick={onSubmit}>Editar</button>
                            <button className='button button-modal inscricao' onClick={closeModal}>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default EditarInscricao