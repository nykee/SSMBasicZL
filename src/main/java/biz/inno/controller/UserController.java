package biz.inno.controller;

import biz.inno.entity.User;
import biz.inno.service.UserService;
import biz.inno.utils.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpSession;

/**
 * Created by Administrator on 2017/7/4.
 */
@Controller
@RequestMapping("/user")

//这里用了@SessionAttributes，可以直接把model中的user(也就key)放入其中
//这样保证了session中存在user这个对象
@SessionAttributes("user")
public class UserController {

    @Autowired
    private UserService userService;




    @RequestMapping(value="/checkLogin")
    @ResponseBody
    public Msg checkLogin(User user, Model model,HttpSession session){
        //调用service方法
        String username = user.getUsername();
//        System.out.println("用户名称："+username);
        user = userService.checkLogin(username,user.getPassword());
//        System.out.println("用户"+user);
        //若有user则添加到model里并且跳转到成功页面
        if(user != null){
            System.out.println("查询到了");
            session.setAttribute("user",user);
            session.setAttribute("username", username);
            model.addAttribute("user",user);
           /* String[]   names   =   session.getValueNames();
            for   (int   i   =   0;   i   <   names.length;   i++)   {
                System.out.println(names[i] + ","   +   session.getValue(names[i]));
            }*/

            return Msg.success();
        }
        else {
            System.out.println("查询失败");
             return Msg.fail();
        }

    }



    //注销方法
    @RequestMapping("/logout")
    @ResponseBody
    public Msg logout(HttpSession session){
        //通过session.invalidata()方法来注销当前的session
//        session.invalidate();
        session.removeAttribute("user");
        session.removeAttribute("username");
//        session.invalidate();
        return Msg.success();
    }

    @RequestMapping("/register")
    @ResponseBody
    public Msg register(User user,  Model model){
        int count = userService.register(user.getUsername(), user.getPassword());
        if(count >0){
            model.addAttribute("user",user);


            return Msg.success();
        }
        else {
            return Msg.fail();
        }
    }



    @RequestMapping("/chkUname")
    @ResponseBody
    public Msg chkUname(User user){
        user = userService.chkUname(user.getUsername());
        if(user != null){
//


            return Msg.fail();
        }

        else {
            return Msg.success();
        }
    }

}
