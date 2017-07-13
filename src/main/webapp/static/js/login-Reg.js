/**
 * Created by Administrator on 2017/6/5.
 */
/*根据首页注册按钮传递的参数，页面初始化是隐藏登录框，显示注册框*/

// require('../css/loginAndReg.css');
var url  = location.search;
if (url.indexOf("?") !== -1) {
    console.log(url.indexOf('='));
    var action=url.substr(url.indexOf('=')+1);
    if(action === "reg"){
        $('.signin').hide();
        $('.reg').show();
        $(document.title = '逸动云平台注册');
    }
}
/*定时器更换bgm*/
let body = document.body;
let imgArray = ['../images/Index_bg2.jpg','../images/bg.jpg'];
let i = -1;
setInterval(function () {
    i++;
    i %= imgArray.length;
    body.style.backgroundImage = 'url(' + imgArray[i] + ')';
},10000);

/*ajax请求验证登录*/
function login() {
    let uname = $('#uname').val();
    let pwd  = $('#pwd').val();
    console.log('点击登录按钮了');
    console.log(uname,pwd);
    $.ajax({
        url:'http://localhost:8081/userAction/login',
        type:'POST',
        dataType:'jsonp',
        contentType : "application/json; charset=utf-8",
        data:{username:uname,password:pwd},
        success:function (res) {
            console.log(res);
            if(res && (res === '查询成功')){
                window.location.href = '../../index.html';
            }
            else if(res ==='查询失败'){
                $('.reg_help').css({'visibility':'visible'});
                $('.reg_help span').html('密码或用户名错误，请重新输入')
            }
            sessionStorage.uname = uname;
            sessionStorage.isLogin = true;
        }
    })

}
$('#login').on('click',function (e) {
    e.preventDefault();
    login();
});
$('#reg').on('click',function (e) {
    e.preventDefault();
    reg();
});
/*点击注册按钮，隐藏登录框，显示注册框*/
$('#to_reg').on('click',function (e) {
    e.preventDefault();
    $('.signin').hide('slow');
    $('.reg').show('slow');
    document.title = '逸动云注册';
});
function reg() {
    let uname = $('#uname_reg').val();
    let pwd  = $('#pwd_reg').val();

    $.ajax({
        url:'/reg',
        type:'POST',
        data:{username:uname,password:pwd},
        success:function (res) {
            console.log(res);
            if(res && (res === '插入成功')){
                alert('注册成功！');
                $('.reg').hide('slow');
                $('.signin').show('slow');

            }

        }
    })

}



