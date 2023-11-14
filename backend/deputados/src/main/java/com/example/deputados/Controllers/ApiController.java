package com.example.deputados.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.deputados.Models.Deputado;
import com.example.deputados.Models.Evento;
import com.example.deputados.Services.ApiService;
import com.example.deputados.Services.DeputadoService;
import com.example.deputados.Services.EventoService;
import com.google.gson.Gson;

@RestController
public class ApiController {
	
	@Autowired
	private ApiService apiService;
	@Autowired
	private DeputadoService depService;
	
	@GetMapping(value = "/deputados",  produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Deputado> getDeputados()  {
		return depService.listar();
	}

	@GetMapping("/eventos/{id}")
	public List<Evento> getEventos(@PathVariable Integer id)  {
		String data = apiService.getEventos(id);

		JSONObject jsnobject = new JSONObject(data);  
        JSONArray jsonArray = jsnobject.getJSONArray("dados"); 
		ArrayList<Evento> listdata = new ArrayList<Evento>();

		for(int i = 0; i<jsonArray.length(); i++) {
	        Evento dep = new Gson().fromJson(jsonArray.get(i).toString(), Evento.class);
	        listdata.add(dep);
        }

		return listdata;
	}
	
	@GetMapping("/clone")
	public List<Deputado> clone() {
		String data = apiService.getDeputados();
		
        JSONObject jsnobject = new JSONObject(data);  
        JSONArray jsonArray = jsnobject.getJSONArray("dados");  
        //ArrayList<Object> listdata = new ArrayList<Object>();  	

        for(int i = 0; i<jsonArray.length(); i++) {
	        Deputado dep = new Gson().fromJson(jsonArray.get(i).toString(), Deputado.class);
	        depService.criar(dep);
        }
		return depService.listar();
	}
	
}
