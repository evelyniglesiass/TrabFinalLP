package com.example.deputados.Models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
public class Evento {

	@Id
	private Long id;
	private String descricaoTipo;

	@ManyToMany(mappedBy = "eventos", cascade = CascadeType.ALL)
	private List<Deputado> deputados = new ArrayList<>();

}
