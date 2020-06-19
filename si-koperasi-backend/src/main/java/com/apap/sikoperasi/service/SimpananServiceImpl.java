package com.apap.sikoperasi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apap.sikoperasi.model.SimpananModel;
import com.apap.sikoperasi.repository.SimpananDB;

@Service
@Transactional
public class SimpananServiceImpl implements SimpananService {
	@Autowired
	private SimpananDB simpananDB;

	@Override
	public SimpananModel addSimpanan(SimpananModel simpanan) {
		// TODO Auto-generated method stub
		return simpananDB.save(simpanan);
	}

	@Override
	public List<SimpananModel> getSimpananByID(String id) {

		return simpananDB.findAll();
	}

}
