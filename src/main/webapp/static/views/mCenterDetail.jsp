<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/7/4
  Time: 10:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>逸动多中心</title>
    <meta name=”renderer” content=”webkit|ie-comp|ie-stand” />
    <meta http-equiv="X-UA-Compatible" content="IE=8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
    <!--通用样式-->
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/mCenterDetail.css">
    <!--BootStrap-->
    <link href="../plugins/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<!--头部导航-->
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img class="img-responsive center-block" src="../images/inno1.png" style="height: 50px" alt=""></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li ><a href="../../index.jsp">首页 <span class="sr-only">(current)</span></a></li>
                <li><a href="./mCenter.html">多中心展示</a></li>
                <li><a href="./controlCenter.html">管理中心</a></li>

            </ul>

            <ul class="nav navbar-nav navbar-right" id="nav-right">
                <li><a href="loginAndReg.html"><span class="glyphicon glyphicon-log-in"></span>登录</a></li>
                <li><a href="./loginAndReg.html?action=reg"><span class="glyphicon glyphicon-user"></span>注册</a></li>

            </ul>
        </div>
    </div>
</nav>
<div class="main-container container-fluid">
    <div id="hos-nav">
        <ol class="breadcrumb">
            <li><a href="./mCenter.html">多中心展示</a></li>
            <li  id="hName" class="active "><a href="#">301</a></li>

        </ol>
    </div>
    <!--医院描述-->
    <div class="hospitalDesc" id="hospitalDesc">
        <!--根据传入的医院名称动态加载-->
        <div class="desc-title">

        </div>
        <div class="desc-content">

        </div>
    </div>
    <div class="dataZone">
        <h4 class="dataZone-title"></h4>

        <div class="dataZone-function">
            <i>请选择查看方式:</i>
            <select name="sort" id="dataZone-typeSelect">
                <option value="病种" selected="selected">按病种查看</option>
                <option value="年龄">按年龄查看</option>
                <option value="性别">按性别查看</option>
                <option value="手术">按手术前后查看</option>
            </select>
            <!--<select name="chart" id="dataZone-chartSelect">
                <option value=""></option>
            </select>-->
            <span id="dataZone-btn" class="btn btn-primary">确定</span>
        </div>
        <div class="dataZone-content">
            <div id="chart-container-pie" class="chart-container fl" style="width: 400px;height: 600px"></div>
            <div id="chart-container-bar" class="chart-container fl" style="width: 400px;height: 600px"></div>
            <div id="chart-container-line" class="chart-container fl" style="width: 400px;height: 600px"></div>
            <div class="clearfix"></div>
        </div>

    </div>

</div>


<footer class="container-fluid">
    <div class="row bottomNav">
        <div class="fastEntrance col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <ul>
                <li class="bottomNav_title"><span>快速入口</span></li>
                <li><a href="../views/mCenter.html">多中心</a></li>
                <li><a href="../views/loginAndReg.html">管理页面</a></li>
            </ul>
        </div>
        <div class="serviceSupport col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <ul>
                <li class="bottomNav_title"><span>云平台咨询</span></li>
                <li><a href="">咨询内容1</a></li>
                <li><a href="">咨询内容2</a></li>
                <li><a href="">咨询内容3</a></li>
            </ul>
        </div>
        <div class="contactUs col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul >
                <li class="bottomNav_title">
                    <span class="ctUSLink">联系我们</span>
                </li>
                <li>
                    <a href="/contact.html">地址：上海市漕河泾开发区松江高科技园<br>莘砖公路518号11栋1004室</a>
                </li>
                <li class="li_2">电话：021-37027535 37027537<br/>传真：021-67690739<br/><a href="mailto:info@innomotion.biz">E-mail：info@innomotion.biz</a><br /><a
                        href="ttp://www.innomotion.biz">http://www.innomotion.biz</a></li>
            </ul>
        </div>

    </div>
    <div class="row LogoAndCR">

        <div class="copyright  col-lg-10">
            <ul>
                <li>上海逸动医学科技有限公司</li>
                <li>Copyright &copy; 2012-2017 Shanghai Innomotion Medical Inc. All Rights Reserved</li>
            </ul>
        </div>
        <div class="bottomLogo  col-lg-2 ">
            <img src="../images/inno1.png" alt="">
        </div>
    </div>
</footer>
<!--工具类库-->
<script src="../plugins/jquery.min.js"></script>
<script  src="../plugins/echarts.min.js"></script>
<script src="../plugins/bootstrap-3.3.7-dist/js/bootstrap.js"></script>

<script src="../../dist/mCenterDetail.bundle.js"></script>
</body>
</html>
