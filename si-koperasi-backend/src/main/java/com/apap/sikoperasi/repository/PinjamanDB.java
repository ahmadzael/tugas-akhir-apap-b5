package com.apap.sikoperasi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apap.sikoperasi.model.AnggotaModel;
import com.apap.sikoperasi.model.PinjamanModel;

@Repository
public interface PinjamanDB extends JpaRepository<PinjamanModel,Long>{

	List<PinjamanModel> findByAnggota(Optional<AnggotaModel> anggota);
}
