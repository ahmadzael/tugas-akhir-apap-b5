package com.apap.sikoperasi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apap.sikoperasi.model.UserModel;

@Repository
public interface UserDB extends JpaRepository<UserModel,Long> {

}
