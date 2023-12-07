package com.example.deputados.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.deputados.Models.Evento;

public interface EventoRepository extends JpaRepository<Evento, Long>{

    Evento findAllById(int id);

    @Query(value = "Select * From evento Left Join inscricoes On evento.id = evento.evento_id Where evento.id = inscricoes.evento_id And inscricoes.deputado_id = :id", nativeQuery = true)
     List<Evento> listarInscricoesDeputado(int id); // listar eventos de um deputado / passar id do deputado

}
