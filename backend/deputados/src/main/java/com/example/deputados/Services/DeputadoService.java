package com.example.deputados.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.deputados.Models.Deputado;
import com.example.deputados.Repository.DeputadoRepository;

@Service
public class DeputadoService {

		@Autowired
		private DeputadoRepository depRepo;
		
		public List<Deputado> listar() {
			return depRepo.findAll();
		}
		
		public Deputado criar(Deputado deputado) {
			return depRepo.save(deputado);
		}
}

