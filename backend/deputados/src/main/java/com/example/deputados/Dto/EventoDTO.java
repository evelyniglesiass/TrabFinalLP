package com.example.deputados.Dto;

import java.util.List;
import java.util.stream.Collectors;

import com.example.deputados.Models.Deputado;
import com.example.deputados.Models.Evento;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventoDTO {

    private Long id;
	private String descricaoTipo;

    public EventoDTO(Evento evento) {
        this.id = evento.getId();
        this.descricaoTipo = evento.getDescricaoTipo();
    }

    public static List<EventoDTO> converterLista(List<Evento> listaEvento) {
        return listaEvento.stream().map(EventoDTO::new).collect(Collectors.toList());
    }
    
}
