/**
 * Created by Administrator on 2017/6/7.
 */
/*百度地图方案*/
/*上海、北京、广州的经纬度坐标*/
/*const x_Shanghai = 121.48;
const y_Shanghai = 31.22;
const x_Beijing = 116.46;
const y_Beijing = 	39.92;
const x_Guangzhou = 113.27;
const y_Guangzhou = 23.13;

let mapMaker; //地图记号点

/!*初始化地图*!/
let bm = new BMap.Map("container");
bm.centerAndZoom(new BMap.Point(108.955663,34.471147), 5);
// bm.enableScrollWheelZoom();

let points = [new BMap.Point(x_Shanghai,y_Shanghai),
    new BMap.Point(x_Beijing,y_Beijing),
    new BMap.Point(x_Guangzhou,y_Guangzhou)
];




 transaltecallback = function (data) {
    // 回调函数中进行记号点的绘制
    // console.log(data);
    if(data.status === 0){
        for (let i = 0; i < data.points.length; i++) {
            mapMaker = new BMap.Marker(data.points[i]);
            bm.addOverlay(mapMaker);
            bm.setCenter(data.points[i]); //记号点添加至地图

            //记号点添加点击事件监听，获取对应坐标的城市名称
            mapMaker.addEventListener('onmouseover',function (e) {
                let point = parseInt(e.point.lng);
                if(point ===parseInt(x_Beijing)){
                    $('#cityName').html('北京');
                    $('#cityDisc').html('逸动北京中心，包含了解放军301总医院、积水潭医院、国家体育总局')
                }
                else if(point ===parseInt(x_Shanghai)) {
                    $('#cityName').html('上海');
                    $('#cityDisc').html('逸动上海中心，包含了华山医院、第九人民医院、第六人民医院')
                }
                else if(point === parseInt(x_Guangzhou)){
                    $('#cityName').html('广州');
                    $('#cityDisc').html('逸动广州中心，包含了华山医院、第九人民医院、第六人民医院')

                }

            });
        }

    }
};


let convertor = new BMap.Convertor();
convertor.translate(points, 1, 5, transaltecallback);*/

// require('../css/mCenter-largeScreen.css');
// require('../css/mCenter-smallScreen.css');
/*import {nav} from './components/nav';
console.log(nav);
$(function () {
    $(nav).insertBefore('#main-container');
});*/
if(sessionStorage.isLogin){
    // console.log($('.nav navbar-nav navbar-right'));
    var a =document.createElement('a');
    $(a).html('欢迎！'+sessionStorage.uname);
    $('#nav-right').html('').append(a);

}
else{

}
console.log(sessionStorage.uname);
/*Echart方案*/
document.getElementById('chart-container').innerHTML = '';
var myChart  = echarts.init(document.getElementById('chart-container'));
var option = {
    /*地图用到的数据，Object形式*/
    series: [
        {
            name: 'Map',
            type: 'map',
            // roam: true,//鼠标滚轮缩放
            // hoverable:true,//鼠标经过高亮
            mapLocation: {
                x: 'left',
                y: 'top',
                height: 600
            },


            selectedMode: 'single',
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#025192',
                    color: '#003156',
                    label: {
                        show: false
                    }
                },
                emphasis: { // 选中样式
                    borderWidth: 2,
                    borderColor: '#fff',
                    color: '#32cd32',
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            },
            data: [
                {
                    name: '广东',
                    itemStyle: {
                        normal: {
                            color: '#2F99E5',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 15
                                }
                            }
                        },
                        emphasis: { // 选中样式
                            borderWidth: 2,
                            borderColor: '#fff',
                            color: '#32cd32',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                },
                {
                    name: '上海',
                    itemStyle: {
                        normal: {
                            color: '#2F99E5',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12
                                }
                            }
                        },
                        emphasis: { // 选中样式
                            borderWidth: 2,
                            borderColor: '#fff',
                            color: '#32cd32',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                },
                {
                    name: '北京',
                    itemStyle: {
                        normal: {
                            color: '#2F99E5',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12
                                }
                            }
                        },
                        emphasis: { // 也是选中样式
                            borderWidth: 2,
                            borderColor: '#fff',
                            color: '#32cd32',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                },

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
                        value: 1
                    },
                    {
                        name: '上海',
                         value: 2
                    },
                    {
                        name:'广州',
                        value:3
                    },
                    {
                        name:'合肥',
                        value:4
                    },
                    {
                        name:'武汉',
                        value:5
                    },
                    {
                        name:'长沙',
                        value:6
                    },
                    {
                        name:'贵阳',
                        value:7
                    },
                    {
                        name:'成都',
                        value:8
                    },
                    {
                        name:'长春',
                        value:9
                    },
                    {
                        name:'济南',
                        value:10
                    }
                ],
            },
            /*地图标注线*/
            markLine : {
                smooth:true,
                symbol: ['none', 'circle'],
                symbolSize : 1,
                effect : {
                    show: false,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:2,
                        borderColor:'rgba(30,144,255,0.5)'
                    }
                },
                data : [
                    [{name:'北京'},{name:'上海'}],
                    [{name:'北京'},{name:'贵阳'}],
                    [{name:'北京'},{name:'广州'}],
                    [{name:'北京'},{name:'长沙'}],
                    [{name:'北京'},{name:'成都'}],
                    [{name:'北京'},{name:'合肥'}],
                    [{name:'北京'},{name:'长春'}],
                    [{name:'北京'},{name:'济南'}],
                    [{name:'北京'},{name:'武汉'}],

                    [{name:'上海'},{name:'北京'}],
                    [{name:'上海'},{name:'贵阳'}],
                    [{name:'上海'},{name:'广州'}],
                    [{name:'上海'},{name:'长沙'}],
                    [{name:'上海'},{name:'成都'}],
                    [{name:'上海'},{name:'合肥'}],
                    [{name:'上海'},{name:'长春'}],
                    [{name:'上海'},{name:'济南'}],
                    [{name:'上海'},{name:'武汉'}],

                    [{name:'广州'},{name:'北京'}],
                    [{name:'广州'},{name:'贵阳'}],
                    [{name:'广州'},{name:'上海'}],
                    [{name:'广州'},{name:'长沙'}],
                    [{name:'广州'},{name:'成都'}],
                    [{name:'广州'},{name:'合肥'}],
                    [{name:'广州'},{name:'长春'}],
                    [{name:'广州'},{name:'济南'}],
                    [{name:'广州'},{name:'武汉'}],
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
myChart.setOption(option,true);

/*echart事件监听的回调函数，这里操作dom切换多中心的显示与隐藏*/
function eConsole(param) {
    // let mes = '['+ param.type + ']';
    if (typeof param.seriesIndex != 'undefined') {
        // mes += 'name: ' + param.name;
        if(param.name === '广东'){
            // $('#mCenterInfo div').hide();
            $('.guangdongInfo').addClass('activeBorder').siblings().removeClass('activeBorder');
        }
        else if(param.name === '上海'){
            // $('#mCenterInfo div').hide();
            $('.shanghaiInfo').addClass('activeBorder').siblings().removeClass('activeBorder');

        }
        else if(param.name === '北京'){
            // $('#mCenterInfo div').hide();
            $('.beijingInfo').addClass('activeBorder').siblings().removeClass('activeBorder');
        }
        else{
            console.log($("#mCenterInfo div[class *='activeBorder']"));
            $("#mCenterInfo div[class *='activeBorder']").removeClass('activeBorder')
        }
    }
    // console.log(param);
}
/*使用echart实例的on方法进行监听*/
myChart.on(echarts.config.EVENT.HOVER,eConsole);
window.onresize = myChart.resize ;
window.onresize(chatResize());

$('#gotoBtn').on('click',function () {

    let hospSel =$('#hospitalSel option:selected').val();
    location.href ='../views/mCenterDetail.html?hospital='+hospSel;


});



function chatResize() {
    var win_width = $(window).width();
    if(win_width<768){
        $('#chart-container').addClass('height300');
    }
}
$(chatResize());











