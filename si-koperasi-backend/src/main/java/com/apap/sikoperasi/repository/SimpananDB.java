package com.apap.sikoperasi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apap.sikoperasi.model.SimpananModel;

@Repository
public interface SimpananDB extends JpaRepository<SimpananModel,Long>{

}
