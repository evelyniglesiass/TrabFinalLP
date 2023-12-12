package com.example.deputados.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.deputados.Dto.DeputadoDTO;
import com.example.deputados.Dto.EventoDTO;
import com.example.deputados.Models.Deputado;
import com.example.deputados.Models.Evento;
import com.example.deputados.Repository.DeputadoRepository;
import com.example.deputados.Repository.EventoRepository;

@Service
public class DeputadoService {

	@Autowired
	private DeputadoRepository depRepo;

	@Autowired
	private EventoRepository eveRepo;

	public Deputado criar(Deputado deputado) {
		return depRepo.save(deputado);
	}

	public List<DeputadoDTO> listar() {
		return DeputadoDTO.converterLista(depRepo.findAll());
	}

	public Deputado listarPorId(int id) {
		return depRepo.findAllById(id);
	}

	public ResponseEntity<?> fazerInscricao(int dep, int eve) {

		Deputado deputado = depRepo.findAllById(dep);
		Evento evento = eveRepo.findAllById(eve);

		if (deputado.getEventos().contains(evento)) {
			if (evento.getDeputados().contains(deputado)) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Inscrição já existente");
			} else {
				deputado.getEventos().add(evento);
				evento.getDeputados().add(deputado);
				eveRepo.save(evento);
				depRepo.save(deputado);

				return new ResponseEntity<>("Inscrição realizada com sucesso", HttpStatus.OK);
			}
		} else {
			deputado.getEventos().add(evento);
			evento.getDeputados().add(deputado);
			eveRepo.save(evento);
			depRepo.save(deputado);

			return new ResponseEntity<>("Inscrição realizada com sucesso", HttpStatus.OK);
		}
	}

	public ResponseEntity<?> editarInscricao(int dep, int eve, int eveNovo) {

		Deputado deputado = depRepo.findAllById(dep);
		Evento evento = eveRepo.findAllById(eve);
		Evento eventoNovo = eveRepo.findAllById(eveNovo);

		if (deputado.getEventos().contains(evento)) {
			if (deputado.getEventos().contains(eventoNovo)) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Inscrição já existente");
			} else {
				deputado.getEventos().remove(evento);
				evento.getDeputados().remove(deputado);
				deputado.getEventos().add(eventoNovo);
				evento.getDeputados().add(deputado);
				eveRepo.save(evento);
				depRepo.save(deputado);

				return new ResponseEntity<>("Inscrição realizada com sucesso", HttpStatus.OK);
			}
		} else {
			return new ResponseEntity<>("Inscrição não existe", HttpStatus.OK);
		}
	}

	public ResponseEntity<?> excluirInscricao(int dep, int eve) {

		Deputado deputado = depRepo.findAllById(dep);
		Evento evento = eveRepo.findAllById(eve);

		deputado.getEventos().remove(evento);
		evento.getDeputados().remove(deputado);
		eveRepo.save(evento);
		depRepo.save(deputado);

		return new ResponseEntity<>("Inscrição excluída com sucesso", HttpStatus.OK);
	}

	public List<EventoDTO> listarInscricoes(int id) {
		return EventoDTO.converterLista(eveRepo.listarInscricoesDeputado(id));
	}
}
