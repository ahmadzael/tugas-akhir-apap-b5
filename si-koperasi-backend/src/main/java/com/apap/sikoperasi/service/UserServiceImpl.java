package com.apap.sikoperasi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apap.sikoperasi.model.UserModel;
import com.apap.sikoperasi.repository.UserDB;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDB userDB;
	
	@Override
	public UserModel addUser(UserModel user) {
		return userDB.save(user);
		
	}

	/*
	 * @Override public UserModel getUserByUUID(String uuid) { return
	 * userDB.getUserByUUID(uuid); }
	 */

}
