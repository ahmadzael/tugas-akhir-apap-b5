package com.apap.sikoperasi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.JenisSimpananModel;
import com.apap.sikoperasi.model.SimpananModel;
import com.apap.sikoperasi.repository.JenisSimpananDB;
import com.apap.sikoperasi.repository.SimpananDB;

@Service
@Transactional
public class SimpananServiceImpl implements SimpananService {
	@Autowired
	private SimpananDB simpananDB;
	
	@Autowired 
	private JenisSimpananDB jenisSimpananDB;

	@Override
	public SimpananModel addSimpanan(SimpananModel simpanan) {
		// TODO Auto-generated method stub
		return simpananDB.save(simpanan);
	}

	@Override
	public Optional<SimpananModel> getSimpananByID(long id) {

		return simpananDB.findById(id);
	}

	@Override
	public List<SimpananModel> getSimpananPerAnggota(AnggotaModel anggota) {
		
		return simpananDB.findByPenyetor(anggota);
	}

	@Override
	public List<JenisSimpananModel> getAllJenisSimpanan() {
		// TODO Auto-generated method stub
		return jenisSimpananDB.findAll();
	}

	@Override
	public Optional<JenisSimpananModel> getJenisSimpananByID(long id) {
		
		return jenisSimpananDB.findById(id);
	}

}
