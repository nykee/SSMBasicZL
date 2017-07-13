package biz.inno.service.Impl;

import biz.inno.dao.UserDao;
import biz.inno.entity.User;
import biz.inno.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2017/7/4.
 */
@Service
public class UserServiceImpl implements UserService {

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private UserDao userDao;

    /*
     * 检验用户登录业务
     *
     */
    public User checkLogin(String username, String password ) {
        System.out.println(username);
        User user = userDao.findByUsername(username);
//        System.out.println(user);
        if(user != null && user.getPassword().equals(password)){

            return user;
        }
        return null;
    }
    public int register(String username, String password){
        int affectedRows = userDao.registerByUsernameAndPassword(username, password);
//        System.out.println(affectedRows);
        if(affectedRows>0 ){
            return affectedRows;
        }
        return 0;
    }
    public User chkUname(String username) {
        User user = userDao.findByUsername(username);
//        System.out.println(user);
        if (user != null) {

            return user;
        }
        return null;
    }
}

