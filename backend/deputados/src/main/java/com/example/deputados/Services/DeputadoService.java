package com.example.deputados.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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

	public List<Deputado> listar() {
		return depRepo.findAll();
	}

	public Deputado criar(Deputado deputado) {
		return depRepo.save(deputado);
	}

	public Deputado listarPorId(int id) {
		return depRepo.findAllById(id);
	}

	public ResponseEntity<?> fazerInscricao(int dep, int eve) {

		Deputado deputado = depRepo.findAllById(dep);
		Evento evento = eveRepo.findAllById(eve);

		deputado.getEventos().add(evento);
		evento.getDeputados().add(deputado);
		eveRepo.save(evento);
		depRepo.save(deputado);

		return new ResponseEntity<>("Inscrição realizada com sucesso", HttpStatus.OK);
	}

	public ResponseEntity<?> excluirInscricao(int dep, int eve) {

		Deputado deputado = depRepo.findAllById(dep);
		Evento evento = eveRepo.findAllById(eve);

		deputado.getEventos().remove(evento);
		evento.getDeputados().remove(deputado);
		eveRepo.save(evento);
		depRepo.save(deputado);

		return new ResponseEntity<>("Inscrição realizada com sucesso", HttpStatus.OK);
	}

	public List<Evento> listarInscricoes(int id) {
		return eveRepo.listarInscricoesDeputado(id);
	}
}
