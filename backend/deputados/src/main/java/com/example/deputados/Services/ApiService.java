package com.example.deputados.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
 
@Service
public class ApiService {
	
	@Autowired
	private RestTemplate restTemplate;
	
	public String getDeputados() {
		String url = "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome";
		ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
		String responseBody = responseEntity.getBody();
		
		return responseBody;
		
	}

	public String getEventos() {
		String url = "https://dadosabertos.camara.leg.br/api/v2/eventos";
		ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
		String responseBody = responseEntity.getBody();
		
		return responseBody;
		
	}
}

