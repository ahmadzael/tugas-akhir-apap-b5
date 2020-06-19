package com.apap.sikoperasi.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.JenisSimpananModel;
import com.apap.sikoperasi.model.SimpananModel;
import com.apap.sikoperasi.service.AnggotaService;
import com.apap.sikoperasi.service.SimpananService;

@RestController
public class SimpananController {
	@Autowired
	private SimpananService simpananService;
	
	@Autowired
	private AnggotaService anggotaService;
	
	

	
	@GetMapping("/getSimpanan/{id}")
	public SimpananModel getSimpananByID(@PathVariable long id){
		return simpananService.getSimpananByID(id).get();
	}
	
	@GetMapping("/getSimpananPerAnggota/{idAnggota}")
	public List<SimpananModel> getSimpananPerAnggota(@PathVariable long idAnggota){
		AnggotaModel penyetor = anggotaService.getAnggotaByID(idAnggota).get();
		
		return simpananService.getSimpananPerAnggota(penyetor);
	}
	
	@PostMapping("/addSimpanan")
	public SimpananModel addSimpanan(@RequestBody Saving newSimpanan){
		long idPenyetor = newSimpanan.getIdPenyetor();
		long idpenerima = newSimpanan.getIdPenerima();
		long idJenisSimpanan = newSimpanan.getIdJenisSimpanan();
		AnggotaModel penyetor = anggotaService.getAnggotaByID(idPenyetor).get();
		AnggotaModel penerima = anggotaService.getAnggotaByID(idpenerima).get();
		JenisSimpananModel jenis = simpananService.getJenisSimpananByID(idJenisSimpanan).get();
		
		SimpananModel simpanan = new SimpananModel();
		simpanan.setJumlah(newSimpanan.getJumlah());
		simpanan.setTanggalSetor(newSimpanan.getTanggalSetor());
		simpanan.setPenyetor(penyetor);
		simpanan.setPenerima(penerima);
		simpanan.setJenisSimpanan(jenis);
		return simpananService.addSimpanan(simpanan);

	}
	
	@PutMapping("/updateSimpanan/{simpananID}")
	public SimpananModel updateSimpanan(@PathVariable long simpananID,@RequestBody Saving newSimpanan) {
		long idPenyetor = newSimpanan.getIdPenyetor();
		long idpenerima = newSimpanan.getIdPenerima();
		long idJenisSimpanan = newSimpanan.getIdJenisSimpanan();
		AnggotaModel penyetor = anggotaService.getAnggotaByID(idPenyetor).get();
		AnggotaModel penerima = anggotaService.getAnggotaByID(idpenerima).get();
		JenisSimpananModel jenis = simpananService.getJenisSimpananByID(idJenisSimpanan).get();
		
		SimpananModel saving = simpananService.getSimpananByID(simpananID).get();
		
		
		saving.setJumlah(newSimpanan.getJumlah());
		saving.setPenerima(penerima);
		saving.setPenyetor(penyetor);
		saving.setTanggalSetor(newSimpanan.getTanggalSetor());
		saving.setJenisSimpanan(jenis);
		
		return simpananService.addSimpanan(saving);
		
	}
}

class Saving {
	private int jumlah;
	private Date tanggalSetor;
	private long idPenerima;
	private long idPenyetor;
	private long idJenisSimpanan;
	
	public int getJumlah() {
		return jumlah;
	}
	public void setJumlah(int jumlah) {
		this.jumlah = jumlah;
	}
	public Date getTanggalSetor() {
		return tanggalSetor;
	}
	public void setTanggalSetor(Date tanggalSetor) {
		this.tanggalSetor = tanggalSetor;
	}
	public long getIdPenerima() {
		return idPenerima;
	}
	public void setIdPenerima(long idPenerima) {
		this.idPenerima = idPenerima;
	}
	public long getIdPenyetor() {
		return idPenyetor;
	}
	public void setIdPenyetor(long idPenyetor) {
		this.idPenyetor = idPenyetor;
	}
	public long getIdJenisSimpanan() {
		return idJenisSimpanan;
	}
	public void setIdJenisSimpanan(long idJenisSimpanan) {
		this.idJenisSimpanan = idJenisSimpanan;
	}

}