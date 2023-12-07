package com.example.deputados.Models;

import java.util.ArrayList;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Deputado {

	@Id
	private Long id;
	private String nome;
	private String siglaPartido;
	private String siglaUf;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "inscricoes", joinColumns = { @JoinColumn(name = "deputado_id") }, inverseJoinColumns = {
			@JoinColumn(name = "evento_id") })
	private java.util.List<Evento> eventos = new ArrayList<>();

}
