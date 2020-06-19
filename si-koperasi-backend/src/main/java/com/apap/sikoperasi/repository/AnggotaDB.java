package com.apap.sikoperasi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apap.sikoperasi.model.AnggotaModel;

@Repository
public interface AnggotaDB extends JpaRepository<AnggotaModel,Long>{


}
