package com.zngz.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zngz.bean.User;
import com.zngz.service.UserService;

@Controller
@RequestMapping(value="/user")
public class UserController {
	
	@Autowired
	private UserService userService;

    @ResponseBody
    @RequestMapping(value = "/register",method = RequestMethod.POST,produces = "text/plain;charset=utf-8")
    public String register(HttpServletRequest request,Model model,String register_username,String register_password,String email) {
    	User register_user = userService.findUserbyUsername(register_username);
    	if(register_user == null) {
    		userService.insertUserByUserName(register_username,register_password,email);
    		System.out.println("我已经把用户名，密码，邮箱插入数据库了");
    		return "该用户名可以不存在";
    	}else {   
    		System.out.println("该用户名已经被注册");
    		return "该用户名已经被注册";
    	}
    }
    @ResponseBody
    @RequestMapping(value = "/isRegister",method = RequestMethod.POST,produces = "application/json;charset=utf-8")
    public boolean register(HttpServletRequest request,Model model,String register_username) {
    	User register_user = userService.findUserbyUsername(register_username); 
    	if(register_user == null) { // 如果数据库没有这个注册名，就可以注册
    		return true;
    	}else {
    		return false;
    	}
    }
    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.POST,produces = "application/json;charset=utf-8")
//    上面的produces的内容前后台要匹配
    public boolean login(HttpServletRequest request, Model model, String login_username,String login_password) {
    	User login_user = userService.findUserbyUsername(login_username);
		if(login_user == null) {
//			System.out.println("用户名为空，前台要提示用户名不存在");
			return false;
		}else {

			if(login_user.getPassword().equals(login_password)) {
				return true;
			} 
//			用户名不为空
			return true;
		}
    }
	
	@RequestMapping(value="/index")
	public String firstPage() {
		return "pages/index";
	}
	
	@RequestMapping(value="/registerPage")
	public String registerPage() {
		return "pages/login_register";
	}
}
