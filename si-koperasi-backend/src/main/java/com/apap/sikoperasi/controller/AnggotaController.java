package com.apap.sikoperasi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.PinjamanModel;
import com.apap.sikoperasi.model.UserModel;
import com.apap.sikoperasi.service.AnggotaService;
import com.apap.sikoperasi.service.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AnggotaController {
	@Autowired
	private AnggotaService anggotaService;
	
	@Autowired
	private UserService userservice;
	
	@GetMapping("/getAlluser")
	public List<AnggotaModel> getAllAnggota(){
		return anggotaService.getAllAnggota();
	}
	
	@GetMapping("/")
	String Hello(){
		return "SIKOPERASI-BACKEND RUNNING";
	}
	
	@PostMapping("/adduser")
	public UserModel addUser(@RequestBody UserModel newUser){
		return userservice.addUser(newUser);
	}
	
	@PostMapping("/addanggota")
	public AnggotaModel addAnggota(@RequestBody AnggotaModel newAnggota){
		return anggotaService.addAnggota(newAnggota);
	}
	
	@PutMapping("/updateAnggota/{anggotaID}")
	public String updateAnggota(@PathVariable long anggotaID, @RequestBody AnggotaModel newAnggota) {
		AnggotaModel anggota = anggotaService.getAnggotaByID(anggotaID).get();
		if (anggota.equals(null)) {
			return "error";
		}
		
		anggota.setNama(newAnggota.getNama());
		anggota.setAlamat(newAnggota.getAlamat());
		anggota.setNia(newAnggota.getNia());
		anggota.setPengurus(newAnggota.isPengurus());
		anggota.setTanggalLahir(newAnggota.getTanggalLahir());
		anggota.setTelepon(newAnggota.getTelepon());
		anggota.setTempatLahir(newAnggota.getTempatLahir());
		anggota.setUser(newAnggota.getUser());

		return "berhasil";
		
	}
	

	
//	@GetMapping("/anggota/{uuid}")
//	public UserModel getAnggotaByUUID(@PathVariable String uuid) {
//		return null;
//	}
	
	
	
}
