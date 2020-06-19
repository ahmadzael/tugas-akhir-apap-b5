package com.apap.sikoperasi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apap.sikoperasi.model.PinjamanModel;

@Repository
public interface PinjamanDB extends JpaRepository<PinjamanModel,Long>{
}
