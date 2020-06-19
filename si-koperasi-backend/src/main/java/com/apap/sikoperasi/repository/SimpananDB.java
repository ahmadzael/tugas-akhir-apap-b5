package com.apap.sikoperasi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.SimpananModel;

@Repository
public interface SimpananDB extends JpaRepository<SimpananModel,Long>{
	List<SimpananModel> findAll();
	List<SimpananModel> findByPenyetor (AnggotaModel penyetor);
}
