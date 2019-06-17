package com.zngz.service;

import com.zngz.bean.User;


public interface UserService {
	
	User findUserbyUsername(String username);

	void insertUserByUserName(String username, String password, String email);

}
