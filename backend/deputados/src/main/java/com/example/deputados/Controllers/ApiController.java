package com.example.deputados.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.deputados.Dto.DeputadoDTO;
import com.example.deputados.Models.Deputado;
import com.example.deputados.Models.Evento;
import com.example.deputados.Services.ApiService;
import com.example.deputados.Services.DeputadoService;
import com.google.gson.Gson;

@RestController
public class ApiController {

	@Autowired
	private ApiService apiService;

	@Autowired
	private DeputadoService depService;

	@GetMapping("/eventos")
	public List<Evento> getEventos() {
		String data = apiService.getEventos();

		JSONObject jsnobject = new JSONObject(data);
		JSONArray jsonArray = jsnobject.getJSONArray("dados");
		ArrayList<Evento> listdata = new ArrayList<Evento>();

		for (int i = 0; i < jsonArray.length(); i++) {
			Evento eve = new Gson().fromJson(jsonArray.get(i).toString(), Evento.class);

			listdata.add(eve);
		}

		return listdata;
	}

	@GetMapping("/clone")
	public List<DeputadoDTO> clone() {
		String data = apiService.getDeputados();

		JSONObject jsnobject = new JSONObject(data);
		JSONArray jsonArray = jsnobject.getJSONArray("dados");

		for (int i = 0; i < jsonArray.length(); i++) {
			Deputado dep = new Gson().fromJson(jsonArray.get(i).toString(), Deputado.class);
			depService.criar(dep);
		}

		return depService.listar();
	}

}
