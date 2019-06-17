package com.zngz.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zngz.bean.User;
import com.zngz.mapper.UserMapper;
import com.zngz.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	
	public User findUserbyUsername(String username) {
		// TODO Auto-generated method stub
		return userMapper.findUserbyUsername(username);
	}

	public void insertUserByUserName(String username, String password, String email) {
		// TODO Auto-generated method stub
		userMapper.insertUserByUserName(username,password,email);
	}

}
