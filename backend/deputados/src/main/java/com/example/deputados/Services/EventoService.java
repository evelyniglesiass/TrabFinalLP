package com.example.deputados.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.deputados.Models.Evento;
import com.example.deputados.Repository.EventoRepository;

@Service
public class EventoService {
    
    @Autowired
		private EventoRepository eveRepo;
		
		public Evento criar(Evento evento) {

			if (eveRepo.existsById(evento.getId()) == false) {
            	return eveRepo.save(evento);
        	} else {
				return evento;
			}
			
		}

}