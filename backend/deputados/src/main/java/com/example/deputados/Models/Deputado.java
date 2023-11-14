package com.example.deputados.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
	
}
