package com.example.deputados.Dto;

import java.util.List;
import java.util.stream.Collectors;

import com.example.deputados.Models.Deputado;

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
public class DeputadoDTO {

    private Long id;
    private String nome;
    private String siglaPartido;
    private String siglaUf;

    public DeputadoDTO(Deputado deputado) {
        this.id = deputado.getId();
        this.nome = deputado.getNome();
        this.siglaPartido = deputado.getSiglaPartido();
        this.siglaUf = deputado.getSiglaUf();
    }

    public static List<DeputadoDTO> converterLista(List<Deputado> listaDeputado) {
        return listaDeputado.stream().map(DeputadoDTO::new).collect(Collectors.toList());
    }

}