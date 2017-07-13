<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/6/22
  Time: 16:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>逸动云-骨科云平台领先者！</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
    <!--[if lt IE 9]>
    <script src="./static/plugins/html5.min.js"></script>
    <script src="./static/plugins/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="./static/css/common.css">
    <link rel="stylesheet" href="./static/css/index.css">
    <link href="./static/plugins/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
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
            <a class="navbar-brand" href="#"><img class="img-responsive center-block" src="././static/images/inno1.png" style="height: 50px" alt=""></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li ><a href="javascript:void 0" >首页 <span class="sr-only">(current)</span></a></li>
                <li><a href="./static/views/mCenter.html">多中心展示</a></li>
                <li><a href="./static/views/controlCenter.html">管理中心</a></li>


            </ul>

            <ul class="nav navbar-nav navbar-right" id="nav-right">
                <li><a href="./static/views/loginAndReg.html"><span class="glyphicon glyphicon-log-in"></span>登录</a></li>
                <li><a href="./static/views/loginAndReg.html?action=reg" id="regBtn"><span class="glyphicon glyphicon-user"></span>注册</a></li>

            </ul>
        </div>
    </div>
</nav>
<!--页面主体-->
<div class="main-content ">

    <!--boot轮播-->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->

        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="./static/images/index/silde-banner4.jpg" alt="...">
                <div class="carousel-caption">
                    <h3>逸动大数据</h3>
                    <p>逸动医学依托北上广及全国各地的多中心建立骨科、关节大数据！</p>
                </div>
            </div>
            <div class="item">

                <img src="./static/images/index/silde-banner3.jpg" alt="...">
                <div class="carousel-caption">
                    <h3>逸动云计算</h3>
                    <p>逸动多中心上传的数据通过云计算处理大数据</p>
                </div>
            </div>
            <div class="item">
                <img src="./static/images/index/silde-banner5.jpg" alt="...">
                <div class="carousel-caption">
                    <h3>逸动神经网络</h3>
                    <p>建立骨科关节测试模型，数据分析更科学高效！</p>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div class="container-fluid funcZone">
        <!--平台简介-->
        <div id="platformIntro" class="platformIntro row">
            <h3 class="col-xs-12 col-sm-12 col-md-12">逸动云平台--安全、稳定的云平台</h3>
            <p class="col-xs-12 col-sm-12 col-md-12"><a href="./static/views/mCenter.html">依托逸动多中心架设，集云计算、云存储、网络、安全、大数据与神经网络，让骨科诊疗更快速有效</a></p>
        </div>
        <!--平台功能-->
        <div id="platformFunction" class="platformFunction">
            <div class="functionName">
                <ul class="row">
                    <li class="col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-4">
                        <a href="#yjs" >
                            <div class="funcImg" data-index="0"></div>
                            <div class="funcTitle myActive" data-index="0">云计算</div>
                        </a>
                    </li>
                    <li class="col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-4">
                        <a href="#ycc">
                            <div class="funcImg" data-index="1"></div>
                            <div class="funcTitle" data-index="1">云存储</div>

                        </a>
                    </li>
                    <li class="col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-4">
                        <a href="#sjwl">
                            <div class="funcImg" data-index="2"></div>
                            <div class="funcTitle" data-index="2">神经网络</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="functionDetail row">
                <div id="calDetail" class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >

                    <ul class="row">
                        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span class="">云计算提供了最可靠、最安全的数据存储中心</span><s>&gt;</s></li>
                        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span class="">云计算对用户端的设备要求最低</span><s>&gt;</s></li>
                        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span>增强的计算能力</span><s>&gt;</s></li>
                        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-12"><span>无限的存储容量</span><s>&gt;</s></li>
                    </ul>


                </div>
                <div id="storeDetail" class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="display: none">
                    <ul class="row">
                        <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><span>存储管理自动化、智能化，所有的存储资源被整合到一起</span><s>&gt;</s></li>
                        <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><span>提高存储效率、提高了存储空间的利用率，同时具备负载均衡、故障冗余功能</span><s>&gt;</s></li>
                        <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><span>实现规模效应和弹性扩展，降低运营成本，避免资源浪费</span><s>&gt;</s></li>
                    </ul>

                </div>
                <div id="NeuralDetail " class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="display: none">
                    <ul class="row">
                        <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><span>自学习功能</span><s>&gt;</s></li>
                        <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><span>联想存储功能</span><s>&gt;</s></li>
                        <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><span>高速寻找优化解的能力</span><s>&gt;</s></li>
                    </ul>


                </div>
            </div>
        </div>
        <!--平台解决方案-->
        <div id="platformSolution" class="platformSolution" >
            <div class="row platformSolutionDesc">
                <h3>与逸动医疗其他产品联动，给予客户不同的解决方案！</h3>
            </div>
            <div class="slide-container">
                <div class="slide-body">
                    <ul class="slide-content row">
                        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-12 slide-items">
                            <a href="javascript:void 0">
                                <img  class="itemBG" src="/static/images/index/slideBG1.jpg" alt="">
                                <div class="mask">
                                    <div class="bg"></div>
                                    <div class="content">
                                        <div class="item-img-panel">
                                            <img  class="item-img" src="" alt="">
                                            <img  class="item-img-hover" src="" alt="">
                                        </div>
                                        <p class="line-panel">
                                            <i class="item-line"></i>
                                        </p>
                                        <h3 class="item-title">运动医学解决方案</h3>
                                        <p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>
                                        <span class="item-link">查看详情</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li  class="col-lg-3 col-md-3 col-sm-3 col-xs-12 slide-items">
                            <a href="javascript:void 0">
                                <img class="itemBG" src="./static/images/index/slideBG2.jpg" alt="">
                                <div class="mask">
                                    <div class="bg"></div>
                                    <div class="content">
                                        <div class="item-img-panel">
                                            <img  class="item-img" src="" alt="">
                                            <img  class="item-img-hover" src="" alt="">
                                        </div>
                                        <p class="line-panel">
                                            <i class="item-line"></i>
                                        </p>
                                        <h3 class="item-title">骨科影像学解决方案</h3>
                                        <p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>
                                        <span class="item-link">查看详情</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-12 slide-items">
                            <a href="javascript:void 0">
                                <img class="itemBG" src="./static/images/index/slideBG3.jpg" alt="">
                                <div class="mask">
                                    <div class="bg"></div>
                                    <div class="content">
                                        <div class="item-img-panel">
                                            <img  class="item-img" src="" alt="">
                                            <img  class="item-img-hover" src="" alt="">
                                        </div>
                                        <p class="line-panel">
                                            <i class="item-line"></i>
                                        </p>
                                        <h3 class="item-title">数字导航解决方案</h3>
                                        <p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>
                                        <span class="item-link">查看详情</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="col-lg-3 col-md-3 col-sm-3 col-xs-12 slide-items">
                            <a href="javascript:void 0">
                                <img class="itemBG img-responsive" src=" ./static/images/index/slideBG4.jpg" alt="">
                                <div class="mask">
                                    <div class="bg"></div>
                                    <div class="content">
                                        <div class="item-img-panel">
                                            <img  class="item-img" src="" alt="">
                                            <img  class="item-img-hover" src="" alt="">
                                        </div>
                                        <p class="line-panel">
                                            <i class="item-line"></i>
                                        </p>
                                        <h3 class="item-title">医疗云平台解决方案</h3>
                                        <p class="item-desc">运动医学解决方案描述运动医学解决方案描述运动医学解决方案描述</p>
                                        <span class="item-link">查看详情</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--平台目标市场-->
        <div id="market"  class="market">
            <div class="row marketDesc">
                <h3 class="col-lg-12 col-md-12 col-sm-12 col-xs-12">精确定位，发散市场，逸动云能为各种类型的市场提供服务</h3>
            </div>
            <ul class="row">
                <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div><img src="./static/images/index/ky.png" alt="">
                    </div>
                    <a href="javascript:void 0" class="marketTitle"><span>科研评估</span></a>
                </li>
                <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div>
                        <img src="./static/images/index/kf.png" alt="">
                    </div>
                    <a href="javascript:void 0" class="marketTitle"><span>关节康复</span></a>
                </li>
                <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div>
                        <img src="./static/images/index/mz.png" alt="">
                    </div>
                    <a href="javascript:void 0" class="marketTitle"><span>门诊辅助</span></a>
                </li>
            </ul>
            <ul class="row">
                <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div>
                        <img src="./static/images/index/yd.png" alt="">
                    </div>
                    <a href="javascript:void 0" class="marketTitle"><span>运动训练</span></a>
                </li>
                <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div>
                        <img src="./static/images/index/js.png" alt="">
                    </div>
                    <a href="javascript:void 0" class="marketTitle"><span>军事训练</span></a>
                </li>
                <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div>
                        <img src="./static/images/index/tj.png" alt="">
                    </div>
                    <a href="javascript:void 0" class="marketTitle"><span>体检项目</span></a>
                </li>
            </ul>
        </div>
        <!--分割线-->
        <div class="line"></div>
        <!--逸动多中心显示chart-->
        <div id="map" >
            <div class="row">

                <h3 class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">逸动云分布全国的骨科中心</h3>
                <div id="chart-container"  class="  col-lg-12 col-md-12 col-sm-12 col-xs-12" style="height:500px"></div>

            </div>
        </div>
        <!--立刻注册按钮及点击查看多中心按钮-->
        <div id="regNowRow" class="row">
            <div class="col-lg-offset-4 col-lg-4"><span class="regNowRow_btn"  id="regNow_2mcenter">点击查看逸动多中心</span><span class="regNowRow_btn" id="regNowRow_regbtn">免费注册</span></div>

        </div>


    </div>
</div>



<!--页面尾部-->
<footer class="container-fluid">
    <div class="row bottomNav">
        <div class="fastEntrance col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <ul>
                <li class="bottomNav_title"><span>快速入口</span></li>
                <li><a href="./static/views/mCenter.html">多中心</a></li>
                <li><a href="./static/views/controlCenter.html">管理页面</a></li>
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
                    <a href="javascript:void 0">地址：上海市漕河泾开发区松江高科技园<br>莘砖公路518号11栋1004室</a>
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
            <img src="./static/images/inno1.png" alt="">
        </div>
    </div>


</footer>
<!--工具类js引入-->
<script src="./static/plugins/jquery.min.js"></script>
<script src="./static/plugins/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
<script  src="./static/plugins/echarts-all.js"></script>
<script src="./dist/index.bundle.js"></script>
</body>
</html>
<%--
<html>
<body>
<h2>Hello World!</h2>
</body>
</html>--%>
