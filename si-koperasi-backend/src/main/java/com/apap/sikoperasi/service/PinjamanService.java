package com.apap.sikoperasi.service;

import java.util.List;
import java.util.Optional;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.PinjamanModel;

public interface PinjamanService {
	PinjamanModel addPinjaman(PinjamanModel pinjaman);
	List<PinjamanModel> getPinjamanByAnggota(Optional<AnggotaModel> anggota);
	Optional<PinjamanModel> getPinjamanByID(long pinjamanID);
	PinjamanModel updatePinjaman(PinjamanModel pinjaman,int id);
	List<PinjamanModel> getPinjamanByAnggota(AnggotaModel anggota);
	
	List<PinjamanModel> getAllPinjaman();
}
