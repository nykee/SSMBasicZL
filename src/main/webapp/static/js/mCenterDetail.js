/**
 * Created by Administrator on 2017/6/19.
 */
// require('../css/mCenterDetail.css');
//import医院描述
import {HD} from './store/hospital-desc';
import {SHHS,D9RM,D6RM,SHTY,SHJT,GZJQ,HNLG,XGZW,H301,JST,GJTY} from './store/hosp-data';
let age = [];
let type =[];
let typeV=[];
let ageV=[];
let genderV=[];
let operation =[];
let operationV=[];
let gender= [];
//获取上一页面中A标签点击传入的querystring
let url  = location.search;
//获取等号后的子字符串
let hospName = '';
let hospital=url.substr(url.indexOf('=')+1);
if (url.indexOf("?") !== -1) {
    createDomWizHName(hospital);
}
// var hospName='';
/*根据医院名称动态拼接dom*/
function createDomWizHName(hName) {
    let p = document.createElement("p");
    let span = document.createElement("span");
    let img = document.createElement("img");

    switch (hName){
        case 'SHHS':
            hospName = "华山医院";
            span.innerHTML = hospName;
            p.innerHTML=HD.SHHS;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/hsyy.png';
            age=SHHS.getAge();
            type=SHHS.getType();
            operation=SHHS.getOperation();
            gender = SHHS.getGender();
            break;
        case '301':
            hospName = "解放军301总医院";
            span.innerHTML = hospName;
            p.innerHTML = HD.H301;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/301.png';
            age=H301.getAge();
            type=H301.getType();
            operation=H301.getOperation();
            gender = H301.getGender();
            break;
        case 'D9RM':
            hospName = "上海市第九人民医院";
            span.innerHTML = hospName;
            p.innerHTML = HD.D9RM;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/9rm.png';
            age=D9RM.getAge();
            type=D9RM.getType();
            operation=D9RM.getOperation();
            gender = D9RM.getGender();
            break;
        case 'D6RM':
            hospName = "上海市第六人民医院";
            span.innerHTML = hospName;
            p.innerHTML = HD.D6RM;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/6rm.jpg';
            age=D6RM.getAge();
            type=D6RM.getType();
            operation=D6RM.getOperation();
            gender = D6RM.getGender();
            break;
        case 'GZJQ':
            hospName = "广州军区总医院";
           span.innerHTML = hospName;
            p.innerHTML = HD.GZJQ;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/gzjy.png';
            age=GZJQ.getAge();
            type=GZJQ.getType();
            operation=GZJQ.getOperation();
            gender = GZJQ.getGender();
            break;
        case 'GJTY':
            hospName = "国家体育总局";
            span.innerHTML = hospName;
            p.innerHTML = HD.GJTY;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/nstc.png';
            age=GJTY.getAge();
            type=GJTY.getType();
            operation=GJTY.getOperation();
            gender = GJTY.getGender();
            break;
        case 'JST':
            hospName = "积水潭医院";
            span.innerHTML = hospName;
            p.innerHTML = HD.JST;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/jst.png';
            age=JST.getAge();
            type=JST.getType();
            operation=JST.getOperation();
            gender = JST.getGender();
            break;
        case 'XGZW':
            hospName = '香港威尔士亲王医院';
            span.innerHTML = hospName;
            p.innerHTML = HD.XGZW;
            $('#hName>a').html(hospName);
            img.src ='../images/mCenter/wales.png';
            age=XGZW.getAge();
            type=XGZW.getType();
            operation=XGZW.getOperation();
            gender = XGZW.getGender();
            break;


        default:console.log('error:');
    }

    $('.desc-title').append(img).append(span);
    $('.desc-content').append(p);
    $('.dataZone-title').html('查看'+hospName+'上传的数据');
    // console.log(age);
    // console.log(type);
    // console.log(t);
    // console.log(gender);
    // console.log(operation);

    for(let i in type){
        typeV.push(type[i].value);
    }
    for(let i in age){
        ageV.push(age[i].value);
    }
    for(let i in gender){
        genderV.push(gender[i].value);
    }
    for(let i in operation){
        operationV.push(operation[i].value);
    }

}
let pieChart  = echarts.init(document.getElementById('chart-container-pie'));
let barChart = echarts.init(document.getElementById('chart-container-bar'));
let lineChart =echarts.init(document.getElementById('chart-container-line'));
let pieOption ;
let barOption;
let lineOption;

$('#dataZone-btn').on('click',function () {

    let typeSel = $('#dataZone-typeSelect option:selected').val();
    // console.table(type);
    switch (typeSel){
        case '病种':
            pieOption ={
                title : {
                    text: '按病种查看',
                    // subtext: '纯属虚构',
                    x:'left'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'center',
                    data: ['健康','ACL术前','ACL术后','关节炎','多发韧带损伤','臀肌挛缩']
                },
                series : [
                    {
                        name: '按病种查看',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:type,
                        selectedOffset:50,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                    }
                ]
            };
            barOption = {
                title: {
                    text: '按病种查看'
                },
                // color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['健康','ACL术前','ACL术后','关节炎','多发韧带损伤','臀肌挛缩'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'按病种查看',
                        type:'bar',
                        barWidth: '80%',
                        data:typeV
                    }
                ]
            };
            lineOption = {
                title: {
                    text: '按病种查看'
                },
                tooltip: {
                    trigger: 'axis'
                },
                /*legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },*/
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                /*toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },*/
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['健康','ACL术前','ACL术后','关节炎','多发韧带损伤','臀肌挛缩']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'按病种查看',
                        type:'line',
                        stack: '总量',
                        data:typeV
                    },

                ]
            };

            break;
        case '年龄':
            pieOption={
                title : {
                    text: '按年龄查看',

                    x:'left'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'center',
                    data: ['10-20岁','21-30岁','31-40岁','41-50岁','51-60岁','61-70岁','71-80岁','81-90岁','91-100岁']
                },
                series : [
                    {
                        name: '按年龄查看',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:age,
                        selectedOffset:50,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                    }
                ]
            };
            barOption = {
                // color: ['#3398DB'],
                title: {
                    text: '按年龄查看'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['10-20岁','21-30岁','31-40岁','41-50岁','51-60岁','61-70岁','71-80岁','81-90岁','91-100岁'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'按年龄查看',
                        type:'bar',
                        barWidth: '80%',
                        data:ageV
                    }
                ]
            };
            lineOption = {
                title: {
                    text: '按年龄查看'
                },
                tooltip: {
                    trigger: 'axis'
                },
                /*legend: {
                 data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                 },*/
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                /*toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },*/
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['10-20岁','21-30岁','31-40岁','41-50岁','51-60岁','61-70岁','71-80岁','81-90岁','91-100岁']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'按年龄查看',
                        type:'line',
                        stack: '总量',
                        data:ageV
                    },

                ]
            };

            break;
        case '性别':
            pieOption={
                title : {
                    text: '按性别查看',
                    x:'left'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'center',
                    data: ['女性','男性']
                },
                series : [
                    {
                        name: '按性别查看',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:gender,
                        selectedOffset:50,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                    }
                ]
            };
            barOption = {
                // color: ['#3398DB'],
                title: {
                    text: '按性别查看'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['女性','男性'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'按性别查看',
                        type:'bar',
                        barWidth: '80%',
                        data:genderV
                    }
                ]
            };
            lineOption = {
                title: {
                    text: '按性别查看'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                 data:['女性','男性']
                 },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                /*toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },*/
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['女性','男性']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'按性别查看',
                        type:'line',
                        stack: '总量',
                        data:ageV
                    },

                ]
            };

            break;
        case '手术':
            pieOption={
                title : {
                    text: '按手术前后查看',
                    // subtext: '纯属虚构',
                    x:'left'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'center',
                    data: ['术前','术后']
                },
                series : [
                    {
                        name: '按手术前后查看',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:operation,
                        selectedOffset:50,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                    }
                ]
            };
            barOption = {
                // color: ['#3398DB'],
                title: {
                    text: '按手术前后查看'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['术前','术后'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'按手术前后查看',
                        type:'bar',
                        barWidth: '80%',
                        data:operationV
                    }
                ]
            };
            lineOption = {
                title: {
                    text: '按手术前后查看'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['术前','术后']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                /*toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },*/
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['术前','术后']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'按手术前后查看',
                        type:'line',
                        stack: '总量',
                        data:operationV
                    },

                ]
            };

            break;
        default:
            console.log('error');

    }

    pieChart.setOption(pieOption,true);
    barChart.setOption(barOption,true);
    lineChart.setOption(lineOption,true);

});
$(function () {
    if(sessionStorage.isLogin){
        // console.log($('.nav navbar-nav navbar-right'));
        var a =document.createElement('a');
        $(a).html('欢迎！'+sessionStorage.uname);
        $('#nav-right').html('').append(a);

    }
    else{

    }
});





