package com.apap.sikoperasi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.PinjamanModel;
import com.apap.sikoperasi.service.AnggotaService;
import com.apap.sikoperasi.service.PinjamanService;

@RestController
public class PeminjamanController {
	@Autowired
	private PinjamanService pinjamanService;
	
	@Autowired
	private AnggotaService anggotaService;
	
	
	@GetMapping("/getPinjamanPerUser") public List<PinjamanModel>
	GetPinjamanPerUser(@PathVariable long idAnggota){ 
	  Optional<AnggotaModel> anggota = anggotaService.getAnggotaByID(idAnggota);
	  return pinjamanService.getPinjamanByAnggota(anggota); 
  	}
	
	 
	@GetMapping("/getAllPinjaman")
	public List<PinjamanModel> getPinjamanByID(){
		return pinjamanService.getAllPinjaman();
	}
		
	@GetMapping("/getPinjamanByID/{pinjamanID}")
	public PinjamanModel getPinjamanByID(@PathVariable long pinjamanID){
		return pinjamanService.getPinjamanByID(pinjamanID).get();
	}
	
	@PostMapping("/addPinjaman/{anggotaID}")
	public PinjamanModel addPinjaman(@PathVariable int anggotaID,@RequestBody PinjamanModel newPinjaman){
		AnggotaModel anggota = anggotaService.getAnggotaByID(anggotaID).get();
		newPinjaman.setAnggota(anggota);
		return pinjamanService.addPinjaman(newPinjaman);
	}
	
	@PutMapping("/updatePinjaman/{anggotaID}")
	public PinjamanModel updatePinjaman(@PathVariable int anggotaID, @RequestBody PinjamanModel newPinjaman){
		PinjamanModel pinjam = pinjamanService.getPinjamanByID(newPinjaman.getId()).get();
		AnggotaModel anggota = anggotaService.getAnggotaByID(anggotaID).get();
		/*
		 * if (pinjam.equals(null)) { return "error boi"; }
		 */
		
		pinjam.setJumlahPengembalian(newPinjaman.getJumlahPengembalian());
		pinjam.setStatus(newPinjaman.getStatus());
		pinjam.setTanggalDisetujui(newPinjaman.getTanggalDisetujui());
		pinjam.setTanggalPengembalian(newPinjaman.getTanggalPengembalian());
		pinjam.setJumlahPengembalian(newPinjaman.getJumlahPengembalian());
		pinjam.setAnggota(anggota);
		
		
		
		
		return pinjamanService.addPinjaman(pinjam);
	}

}


