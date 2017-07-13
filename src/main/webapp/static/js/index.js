/**
 * Created by Administrator on 2017/6/15.
 */
// require('../css/index.css');
// require('../css/common.css');
// require('../plugins/bootstrap-3.3.7-dist/css/bootstrap.min.css');
console.log(sessionStorage.uname);
console.log(sessionStorage.isLogin);
$(function () {
    if(sessionStorage.isLogin){
        // console.log($('.nav navbar-nav navbar-right'));
        let a =document.createElement('a');
        $(a).html('欢迎！'+sessionStorage.uname);
        $('#nav-right').html('').append(a);

    }
    else{

    }
});

/*云平台功能构成切换*/
$('.functionName ul li a').on('click',function (e) {
    e.preventDefault();
    //通过获取点击目标的data-index属性来控制下方描述框的显示与隐藏
    let idx = $(e.target).attr('data-index');
    if ($(e.target).hasClass('myActive')){
        return 0;
    }
    else{
        $('.functionName ul li a div').removeClass('myActive');
        $(e.target).addClass('myActive');
        $('.functionDetail>div').eq(idx).show().siblings().hide();
    }


});

/*云计算云存储神经网络 具体描述项目 hover时加背景色及边框*/
$('.functionDetail>div>ul>li').on('mouseover',function () {
    $(this).addClass('addBG');
    $(this).children('s').show();
}).on('mouseleave',function () {
    $(this).removeClass('addBG');
    $(this).children('s').hide();
});

//todo 抽象出2个函数，根据不同设备宽度，传入不同的top数据
let deviceW = $(window).width();
$('.slide-items a').on('mouseover',function () {
    //更换背景色
    // console.log(e.target);

    console.log(deviceW);
    if(deviceW >768){
        $(this).children('.mask').children('.bg').css({'background':'#1AC8E1','opacity':'0.7'});
        //描述层animate变更top属性达到上移效果
        $(this).children('.mask').children('.content').stop().animate({'top':'100px'}, 200);
        //变更描述和查看详情的透明度
        $(this).children('.mask').children('.content').children('.item-desc').stop().animate({'opacity':'1'}, 400);
        $(this).children('.mask').children('.content').children('.item-link').stop().animate({'opacity':'1'}, 400);
    }
    else{
        $(this).children('.mask').children('.bg').css({'background':'#1AC8E1','opacity':'0.7'});
        //描述层animate变更top属性达到上移效果
        $(this).children('.mask').children('.content').stop().animate({'top':'30px'}, 200);
        //变更描述和查看详情的透明度
        $(this).children('.mask').children('.content').children('.item-desc').stop().animate({'opacity':'1'}, 400);
        $(this).children('.mask').children('.content').children('.item-link').stop().animate({'opacity':'1'}, 400);
    }



}).on('mouseout',function () {
    if(deviceW >768) {
        $('.bg').css({'background': '#161A1D', 'opacity': '0.5'});
        $(this).children('.mask').children('.content').stop().animate({'top': '160px'}, 400);
        $(this).children('.mask').children('.content').children('.item-desc').stop().animate({'opacity': '0'}, 400);
        $(this).children('.mask').children('.content').children('.item-link').stop().animate({'opacity': '0'}, 400);
    }
    else{
        $('.bg').css({'background': '#161A1D', 'opacity': '0.5'});
        $(this).children('.mask').children('.content').stop().animate({'top': '100px'}, 400);
        $(this).children('.mask').children('.content').children('.item-desc').stop().animate({'opacity': '0'}, 400);
        $(this).children('.mask').children('.content').children('.item-link').stop().animate({'opacity': '0'}, 400);
    }
});

/*查看详情按钮鼠标悬停变色*/
$('.item-link').on('mouseover',function () {
    $(this).addClass('whiteBG')
}).on('mouseout',function () {
    $(this).removeClass('whiteBG')
});

$('.market ul>li>a').on('mouseover',function (e) {
    $($(this).prev().children()).addClass('myTransform');
   console.log($(this).prev().children()) ;
}).on('mouseout',function (e) {
    $($(this).prev().children()).removeClass('myTransform');
});

$('.regNowRow_btn').on('mouseover',function () {
    $(this).addClass('whiteBG');
    $(this).css({'cursor':'pointer'});
}).on('mouseout',function () {
    $(this).removeClass('whiteBG')
});
$('#regNow_2mcenter').on('click',function () {
    location.href='./src/views/mCenter.html';
});
$('#regNowRow_regbtn').on('click',function () {
    location.href='./src/views/loginAndReg.html?action=reg';
});

/*逸动云骨科中心echarts展示*/
let chart = echarts.init(document.getElementById('chart-container'));
let option = {
    /*地图用到的数据，Object形式*/
    series: [
        {
            name: 'Map',
            type: 'map',
            // roam: true,//鼠标滚轮缩放
            hoverable:false,//鼠标经过高亮
            mapLocation: {
                x: 'center',
                y: 'center',
                // height: 600
            },


            selectedMode: false,
            itemStyle: {
                normal: {
                    // borderWidth: 2,
                    // borderColor: '#025192',
                    color: '#003156',
                    label: {
                        show: false
                    }
                },

            },
            data: [




            ],
            /*地图标注点*/
            markPoint: {
                itemStyle: {
                    normal: {
                        color: '#00c1de'
                    }
                },
                effect:{
                    show: true,
                    type: 'scale',
                    loop: true,
                    period: 15,
                    scaleSize : 2,
                    bounceDistance: 10,
                    color : null,
                    shadowColor : null,
                    shadowBlur : 0

                },
                data: [
                    {
                        name: '北京',

                    },
                    {
                        name: '上海',

                    },
                    {
                        name:'广州',

                    },
                    {
                        name:'合肥',

                    },
                    {
                        name:'武汉',

                    },
                    {
                        name:'长沙',

                    },
                    {
                        name:'贵阳',

                    },
                    {
                        name:'成都',

                    },
                    {
                        name:'长春',

                    },
                    {
                        name:'济南',

                    }
                ],
            },


            /*用到的城市的经纬度坐标geoCoord*/
            geoCoord: {
                '上海': [121.4648, 31.2891],
                '北京':[116.46, 39.92],
                '广州':[113.27, 23.13],
                '合肥':[117.27,31.86],
                '武汉':[114.31,30.52],
                '长沙':[113.00,28.21],
                '贵阳':[106.71,26.57],
                '成都':[104.07,30.67],
                '长春':[125.35,43.88],
                '济南':[116.98,36.67]
            }
        }
    ]

};
chart.setOption(option,true);

function  toMcenter() {
    location.href='./src/views/mCenter.html';
}
chart.on(echarts.config.EVENT.CLICK,toMcenter);
function chatResize() {
    let win_width = $(window).width();
    if(win_width<768){
        $('#chart-container').addClass('height300');
    }
}
window.onresize = chart.resize ;
window.onresize(chatResize());

$(chatResize());


