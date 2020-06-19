package com.apap.sikoperasi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.PinjamanModel;
import com.apap.sikoperasi.repository.PinjamanDB;

@Service
@Transactional
public class PinjamanServiceImpl implements PinjamanService {
	@Autowired
	private PinjamanDB pinjamanDB;
	
	@Override
	public PinjamanModel addPinjaman(PinjamanModel pinjaman) {
		// TODO Auto-generated method stub
		return pinjamanDB.save(pinjaman);
	}

	@Override
	public List<PinjamanModel> getPinjamanByAnggota(AnggotaModel anggota) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<PinjamanModel> getPinjamanByID(long id) {
		// TODO Auto-generated method stub
		return pinjamanDB.findById(id);
	}

	@Override
	public PinjamanModel updatePinjaman(PinjamanModel pinjaman, int id) {
		return pinjamanDB.save(pinjaman);
	}

	@Override
	public List<PinjamanModel> getPinjamanByAnggota(Optional<AnggotaModel> anggota) {
		// TODO Auto-generated method stub
		return pinjamanDB.findByAnggota(anggota);
	}

	@Override
	public List<PinjamanModel> getAllPinjaman() {
		// TODO Auto-generated method stub
		return pinjamanDB.findAll();
	}

}
