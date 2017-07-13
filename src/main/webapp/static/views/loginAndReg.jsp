<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/7/4
  Time: 10:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>逸动云登录</title>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="" />
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>

    <link rel="stylesheet" href="../css/loginAndReg.css" type="text/css" media="all" />
</head>
<body>
<div class="logo"><img src="../images/logo.png" alt="上海逸动医院科技有限公司"></div>
<div class="container">
    <!--<h1>逸动云平台登录</h1>-->
    <div class="signin">
        <form action="">
            <p class="welcome">欢迎登陆逸动云</p>
            <input type="text" class="user" value="111111" placeholder="请输入用户名"  id="uname"/>
            <input type="password" class="pass" value="123456" placeholder="请输入密码" id="pwd" />
            <div  class="reg_help" style="visibility: hidden"><span>登陆建议</span></div>
            <label>
                <input type="checkbox" value="rmbMe" /> 记住我
            </label>
            <input id="login" type="submit" value="登录" />
            <input id="to_reg" type="submit" value="立即注册">
        </form>
    </div>
    <div class="reg" style="display: none">
        <form action="">
            <p class="welcome">欢迎注册逸动云</p>
            <input type="text" class="user" value="" placeholder="请输入用户名,3-15位"  id="uname_reg"/>
            <input type="password" class="pass" value="" placeholder="请输入密码" id="pwd_reg" />
            <input type="password" class="pass" value="" placeholder="请再次输入密码" id="pwd_reg_chk" />
            <!--<input id="to_login" type="submit" value="登录" />-->
            <div  class="reg_help" style="visibility: hidden"><span>注册建议</span></div>
            <div class="reg_chk">
                <input type="checkbox"><i>我已阅读并同意相关<a href="">服务条款</a></i>
            </div>
            <input id="reg" type="submit" value="同意并注册">
        </form>
    </div>
</div>
<div class="footer">
    <p>Copyright &copy; 2012-2017 <a href="http://www.innomotion.biz">上海逸动医疗科技有限公司.</a> All Rights Reserved</p>
</div>
<script src="../plugins/jquery.min.js"></script>
<script src="../../dist/loginAndReg.bundle.js"></script>
<!--<script src="../js/login-Reg.js"></script>-->
</body>
</html>
