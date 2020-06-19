package com.apap.sikoperasi.service;

import java.util.List;
import java.util.Optional;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.UserModel;

public interface AnggotaService {
	AnggotaModel addAnggota(AnggotaModel newAnggota);
	List<AnggotaModel> getAllAnggota();
	Optional<AnggotaModel> getAnggotaByID(long idAnggota);


}
