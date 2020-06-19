package com.apap.sikoperasi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.UserModel;
import com.apap.sikoperasi.repository.AnggotaDB;

@Service
@Transactional
public class AnggotaServiceImpl implements AnggotaService {
	@Autowired
	private AnggotaDB anggotaDB;

	@Override
	public AnggotaModel addAnggota(AnggotaModel anggota) {
		// TODO Auto-generated method stub
		return anggotaDB.save(anggota);
	}

	@Override
	public List<AnggotaModel> getAllAnggota() {
		// TODO Auto-generated method stub
		return anggotaDB.findAll();
	}

	@Override
	public Optional<AnggotaModel> getAnggotaByID(long idAnggota) {
		return anggotaDB.findById(idAnggota);
	}
	
	
	


}
