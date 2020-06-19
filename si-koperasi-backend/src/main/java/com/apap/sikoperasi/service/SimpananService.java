package com.apap.sikoperasi.service;

import java.util.List;
import java.util.Optional;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.JenisSimpananModel;
import com.apap.sikoperasi.model.SimpananModel;

public interface SimpananService {
	List<JenisSimpananModel> getAllJenisSimpanan();
	Optional<JenisSimpananModel> getJenisSimpananByID(long id);
	
	SimpananModel addSimpanan(SimpananModel simpanan);

	Optional<SimpananModel> getSimpananByID(long simpananID);
	List<SimpananModel>getSimpananPerAnggota(AnggotaModel anggota);

}
