package biz.inno.filter;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Administrator on 2017/7/12.
 */
public class LoginHandlerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        String requestURI = request.getRequestURI();
        if(requestURI.indexOf("controlCenter.html")>0){
            //判断请求url是否为controlCenter页面
            //return false表示拦截，不向下执行
            //return true表示放行
            HttpSession session = request.getSession();

            //从session中取出用户身份信息
            String username = (String) session.getAttribute("username");
            System.out.println(username);
            if(username!=null){
                //用户名不为空则放行
                return true;
            }
            else {
                request.getRequestDispatcher("/static/views/loginAndReg.html").forward(request,response);
                return false;
            }
        }
        else {
            return  true;

        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object o, Exception e) throws Exception {

    }
}
