package com.apap.sikoperasi.service;

import java.util.List;

import com.apap.sikoperasi.model.SimpananModel;

public interface SimpananService {
	SimpananModel addSimpanan(SimpananModel simpanan);

	List<SimpananModel> getSimpananByID(String id);

}
