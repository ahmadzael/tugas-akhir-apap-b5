package com.apap.sikoperasi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apap.sikoperasi.model.SimpananModel;
import com.apap.sikoperasi.service.SimpananService;

@RestController
public class SimpananController {
	@Autowired
	private SimpananService simpananService;
	
	@GetMapping("/getsimpanan/{id}")
	public List<SimpananModel> getSimpananByID(@PathVariable String id){
		return simpananService.getSimpananByID(id);
	}
	
	@PostMapping("/addsimpanan")
	public SimpananModel addSimpanan(@RequestBody SimpananModel newSimpanan){
		return simpananService.addSimpanan(newSimpanan);
	}
	
	@PutMapping("/updateSimpanan/{id}")
}