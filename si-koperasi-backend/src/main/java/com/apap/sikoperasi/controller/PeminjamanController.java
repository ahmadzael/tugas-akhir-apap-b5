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
	private AnggotaService anggotaService;
	
	
	  @GetMapping("/GetPinjamanPerUser") public List<PinjamanModel>
	  GetPinjamanPerUser(@PathVariable long idAnggota){ 
		  Optional<AnggotaModel> anggota = anggotaService.getAnggotaByID(idAnggota);
		  return pinjamanService.getPinjamanByAnggota(anggota); 
		  }
	 
	
	@GetMapping("/GetPinjamanByID")
	public PinjamanModel getPinjamanByID(@PathVariable int pinjamanID){
		return pinjamanService.getPinjamanByID(pinjamanID);
	}
	
	@PostMapping("/addPinjaman")
	public PinjamanModel addPinjaman(@RequestBody PinjamanModel newPinjaman){
		return pinjamanService.addPinjaman(newPinjaman);
	}
	
	@PutMapping("/updatePinjaman/{pinjamanId}")
	public String updatePinjaman(@PathVariable int pinjamanID, @RequestBody PinjamanModel newPinjaman){
		PinjamanModel loan = pinjamanService.getPinjamanByID(pinjamanID);
		if (loan.equals(null)) {
			return "error boi";
		}
		
		loan.setJumlahPengembalian(newPinjaman.getJumlahPengembalian());
		loan.setStatus(newPinjaman.getStatus());
		loan.setTanggalDisetujui(newPinjaman.getTanggalDisetujui());
		loan.setTanggalPengembalian(newPinjaman.getTanggalPengembalian());
		loan.setJumlahPengembalian(newPinjaman.getJumlahPengembalian());
		
		pinjamanService.updatePinjaman(loan, pinjamanID);
		
		return "updated";
	}

}
