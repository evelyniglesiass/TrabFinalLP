import '../../App.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../components/Modal.css';
import { useListarTodosEventos } from '../../hooks/eventos/listarTodosEventos.hook';
import { useFazerInscricao } from '../../hooks/eventos/fazerInscricao.hook';
import { useCadastrarEvento } from '../../hooks/eventos/cadastrarEvento.hook';

Modal.setAppElement("#root");

const Inscricao = ({deputado}) => {

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
        deputado: deputado.id,
        evento: 0
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
        const textoOpcaoSelecionada = event.target.options[event.target.selectedIndex].text;
        setTexto(textoOpcaoSelecionada);


        console.log(texto)
    }

    const { fazerInscricao } = useFazerInscricao();
    const { cadastrarEvento } = useCadastrarEvento();

    async function onSubmit(event) {
        event.preventDefault();
        
        if (texto != "") {
            await cadastrarEvento(formInput.evento, texto);
            setTexto("")
        }

        await fazerInscricao(formInput.deputado, formInput.evento);     

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
                    <form>
                        <select className='select-input select' name='evento' onChange={handleChange}>
                            <option value="0" disabled selected>Evento</option>
                            {eventos ? 
                                eventos.map((e, num) => (
                                    <option key={num} value={e.id}>{e.id} - {e.descricaoTipo}</option>
                                ))
                            : 
                                null
                            }
                        </select>

                        <div>
                            <button className='button button-modal inscricao' onClick={onSubmit}>Inscrever</button>
                            <button className='button button-modal inscricao' onClick={closeModal}>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default Inscricao