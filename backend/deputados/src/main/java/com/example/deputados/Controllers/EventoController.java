package com.example.deputados.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.deputados.Models.Evento;
import com.example.deputados.Services.EventoService;

@RestController
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    private EventoService eveSer;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Evento cadastrar(@RequestBody Evento evento) {
        return eveSer.criar(evento);
    }
    
}
