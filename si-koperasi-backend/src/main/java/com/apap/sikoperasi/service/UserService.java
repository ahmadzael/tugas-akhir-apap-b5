package com.apap.sikoperasi.service;

import com.apap.sikoperasi.model.UserModel;

public interface UserService {
	UserModel addUser(UserModel user);
	
	
	UserModel getUserByUsername(String username);
	
	//UserModel getUserByUUID(String uuid);
}
