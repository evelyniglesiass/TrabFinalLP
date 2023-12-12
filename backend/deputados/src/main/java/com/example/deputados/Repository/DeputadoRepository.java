package com.example.deputados.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.deputados.Models.Deputado;

public interface DeputadoRepository extends JpaRepository<Deputado, Long> {

    Deputado findAllById(int id);

}
