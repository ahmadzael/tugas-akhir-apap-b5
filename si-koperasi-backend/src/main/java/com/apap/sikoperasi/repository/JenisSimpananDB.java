package com.apap.sikoperasi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apap.sikoperasi.model.JenisSimpananModel;

@Repository
public interface JenisSimpananDB extends JpaRepository<JenisSimpananModel,Long>{

}
