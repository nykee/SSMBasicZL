package biz.inno.service;

import biz.inno.entity.User;

/**
 * Created by Administrator on 2017/7/4.
 */
public interface UserService {

    //检验用户登录
    User checkLogin(String username, String password);

//    注册
    int register(String username, String password);

    //检查用户名是否重复
    User chkUname(String username);

    
}
