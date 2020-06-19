package com.apap.sikoperasi.service;

import java.util.List;
import java.util.Optional;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.PinjamanModel;

public interface PinjamanService {
	PinjamanModel addPinjaman(PinjamanModel pinjaman);
	List<PinjamanModel> getPinjamanByAnggota(Optional<AnggotaModel> anggota);
	PinjamanModel getPinjamanByID(int id);
	PinjamanModel updatePinjaman(PinjamanModel pinjaman,int id);
	List<PinjamanModel> getPinjamanByAnggota(AnggotaModel anggota);
}
