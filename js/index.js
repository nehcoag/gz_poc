//计算六个折线图的容器的宽度
var sixLineWidth = $("body").width() * 0.98 * 0.1635;
$("#sixLine>.foldSixContain").width(sixLineWidth);
$("#lzsCon>div").width(sixLineWidth);
$("#sixLineTab").tabs("#sixLine");
$("#liangzhishuiUl").tabs("#lzsCon");

/*模块一的两个组合图*/
var barCharts01 = echarts.init(document.getElementById('swp_1MidE'));
barCharts01.setOption(barOption);
echarts.init(document.getElementById('swp_1BtmE')).setOption(barOption);
//组合图动起来
// var barInt=setInterval(
//     function () {
//     var data01=barOption.xAxis[0].data;
//     var data=barOption.series[0].data;
//     var dataline=barOption.series[1].data;
//     var datascatter=barOption.series[2].data;
//     var data01Length=data01.length;
//     if(firstTimeBar){
//         if(barIndex==baseXdataBar.length-(data01Length)){
//             firstTimeBar=false;
//             barIndex=0;
//             data01.shift();
//             data01.push(baseXdataBar[barIndex]);
//             data.shift();
//             data.push(basedataBar[barIndex]);
//             dataline.shift();
//             dataline.push(basedataBar[barIndex]);
//             datascatter.shift();
//             datascatter.push(basedataBar[barIndex])
//         }else{
//             data01.shift();
//             data01.push(baseXdataBar[barIndex+data01Length]);
//             data.shift();
//             data.push(basedataBar[barIndex+data01Length]);
//             dataline.shift();
//             dataline.push(basedataBar[barIndex+data01Length]);
//             datascatter.shift();
//             datascatter.push(basedataBar[barIndex+data01Length]);
//         }
//     }else{
//         if(barIndex==baseXdataBar.length){
//             barIndex=0;
//             data01.shift();
//             data01.push(baseXdataBar[barIndex]);
//             data.shift();
//             data.push(basedataBar[barIndex]);
//             dataline.shift();
//             dataline.push(basedataBar[barIndex]);
//             datascatter.shift();
//             datascatter.push(basedataBar[barIndex]);
//         }else{
//             data01.shift();
//             data01.push(baseXdataBar[barIndex]);
//             data.shift();
//             data.push(basedataBar[barIndex]);
//             dataline.shift();
//             dataline.push(basedataBar[barIndex]);
//             datascatter.shift();
//             datascatter.push(basedataBar[barIndex]);
//         }
//     }
//     console.log(data);
//     barIndex++;
//     barCharts01.setOption({
//         xAxis: [{
//             data: data01
//         }],
//         series:[{
//             data:data
//         },{
//             data:dataline
//         },
//             {
//                 data:datascatter
//             },
//         ]
//     });
// }, 2000);
var barIndex01 = 0;
var firstTimeBar01 = true;
echartsRun(barCharts01, barOption, baseXdataBar, basedataArr, barIndex01, firstTimeBar01, "intval0");
// var barInt=setInterval(function () {
//     echartsRun(barCharts01,barOption,baseXdataBar,basedataArr)
// }, 2000);
$("#barStop").click(function () {
    $(this).hide();
    $("#barStart").show();
    clearInterval(intval0);
    barCharts01.setOption({
        xAxis: [{
            data: baseXdataBar
        }],
        series: [{
            data: basedataBar
        },
            {
                data: basedataBar01
            }, {
                data: basedataBar02
            },
        ]
    });
});
$("#barStart").click(function () {
    $(this).hide();
    $("#barStop").show();
    echartsRun(barCharts01, barOption, baseXdataBar, basedataArr, barIndex01, firstTimeBar01, "intval0")
    // barInt=setInterval(function () {
    //     echartsRun(barCharts01,barOption,baseXdataBar,basedataArr)
    // }, 2000);
});
/*模块二顶部的三个饼图*/
var chart01 = Highcharts.chart('pieEct_1', pieOption);
var chart02 = Highcharts.chart('pieEct_2', pieOption);
var chart03 = Highcharts.chart('pieEct_3', pieOption);
var count = 0;
/*模块二中部的三个环图*/
var chart04 = Highcharts.chart('annularEct_1', annularOption);
var chart05 = Highcharts.chart('annularEct_2', annularOption);
var chart06 = Highcharts.chart('annularEct_3', annularOption);

//饼图轮播方法
var intval = setInterval(function () {
    var r = count % chart01.series[0].data.length;//0 1 2 3 4 5
    chart01.series[0].data[r].slice(false);
    count++;
    var s = count % chart01.series[0].data.length;
    chart01.series[0].data[s].slice(true);
    chart01.tooltip.refresh(chart01.series[0].data[s]);
}, 1000);

function clickPie(e) {
    clearInterval(intval);
    $.each(chart01.series[0].data, function (index, value) {
        value.slice(false);
    });
}

$("#pieEct_2").click(function () {
    $.each(chart01.series[0].data, function (index, value) {
        value.slice(false);
    });
    intval = setInterval(function () {
        var r = count % chart01.series[0].data.length;//0 1 2 3 4 5
        chart01.series[0].data[r].slice(false);
        count++;
        var s = count % chart01.series[0].data.length;
        chart01.series[0].data[s].slice(true);
    }, 1000);
});

var count01 = 0;
var intval01 = setInterval(function () {
    var r = count01 % chart04.series[0].data.length;//0 1 2 3 4 5
    chart04.series[0].data[r].slice(false);
    count01++;
    var s = count01 % chart04.series[0].data.length;
    chart04.series[0].data[s].slice(true);
}, 1000);

function clickPie01(e) {
    clearInterval(intval01);
    $.each(chart04.series[0].data, function (index, value) {
        value.slice(false);
    });
}

$("#annularEct_2").click(function () {
    $.each(chart04.series[0].data, function (index, value) {
        value.slice(false);
    });
    intval01 = setInterval(function () {
        var r = count01 % chart04.series[0].data.length;//0 1 2 3 4 5
        chart04.series[0].data[r].slice(false);
        count01++;
        var s = count01 % chart04.series[0].data.length;
        chart04.series[0].data[s].slice(true);
    }, 1000);
});
/*模块二底部的三个2D圆角柱形图*/
echarts.init(document.getElementById('radiusEct_1')).setOption(radiusBarOption);
echarts.init(document.getElementById('radiusEct_2')).setOption(radiusBarOption);
echarts.init(document.getElementById('radiusEct_3')).setOption(radiusBarOption);
/*模块三组合图和折线图*/
echarts.init(document.getElementById('swp_3TopE')).setOption(barOption);
echarts.init(document.getElementById('swp_3MidE')).setOption(foldLineOption);
/*模块四组六个折线图*/
var lineCharts01 = echarts.init(document.getElementById('swp_4E_1'));
lineCharts01.setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_2')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_3')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_4')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_5')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_6')).setOption(foldLineOption);
//折线图动起来
var indexLine = 0;
//判断是不是第一次循环
var firstTimeLine = true;
/*var lineInt=setInterval(function () {
    var data01=foldLineOption.xAxis[0].data;
    var data=foldLineOption.series[0].data;
    var data01Length=data01.length;
    //如果是第一次循环
    if(firstTime){
        //第一批的前五个循环完了之后
        if(i==baseXdata.length-(data01Length)){
            firstTime=false;
            i=0;
            data01.shift();
            data01.push(baseXdata[i]);
            data.shift();
            data.push(basedata[i])
        }else{
            //第一批的前五个循环完了之前
            data01.shift();
            data01.push(baseXdata[i+data01Length]);
            data.shift();
            data.push(basedata[i+data01Length]);
        }
    }else{
        //如果第一次的所有都循环完了
        if(i==baseXdata.length){
            i=0;
            data01.shift();
            data01.push(baseXdata[i]);
            data.shift();
            data.push(basedata[i])
        }else {
            //第一次的还没循环完
            data01.shift();
            data01.push(baseXdata[i]);
            data.shift();
            data.push(basedata[i]);
        }
    }
    i++;
    lineCharts01.setOption({
        xAxis: [{
            data: data01
        }],
        series:[{
                data:data
            }]
    });
}, 1000);*/
echartsRun(lineCharts01, foldLineOption, baseXdata, basedataLineArr, indexLine, firstTimeLine, "intval1");
// var lineInt=setInterval(function () {
//     echartsRun(lineCharts01,foldLineOption,baseXdata,basedataLineArr)
// }, 1000);
$("#lineStop").click(function () {
    $(this).hide();
    $("#lineStart").show();
    clearInterval(intval1);
    lineCharts01.setOption({
        xAxis: [{
            data: baseXdata
        }],
        series: [{
            data: basedata
        }, {
            data: basedata01
        }, {
            data: basedata02
        },
        ]
    });
});
$("#lineStart").click(function () {
    $(this).hide();
    $("#lineStop").show();
    echartsRun(lineCharts01, foldLineOption, baseXdata, basedataLineArr, indexLine, firstTimeLine, "intval1");
    // lineInt=setInterval(function () {
    //     echartsRun(lineCharts01,foldLineOption,baseXdata,basedataLineArr)
    // }, 1000);
});
/*左上角LED灯牌效果*/
var ledLightOptions = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.'
};
var ledSpanVal = [78359, 2824, 223245, 57876, 34345, 26435];
var ledSpanValTemp = [78259, 2724, 223345, 57976, 33245, 25435];
ledSpanVal.forEach(function (obj, inx) {
    new CountUp('ledSpan_' + (inx + 1), 0, obj, 0, 2, ledLightOptions).start();
});
/*setTimeout(function(){
    ledSpanVal.forEach(function(obj,inx){
        new CountUp('ledSpan_'+(inx+1), obj, ledSpanValTemp[inx], 0, 2, ledLightOptions).start();
    });
},4000);*/
/*3D地图*/
var normalCity = [
    {name: '广东', value: [1, 10]}, {name: '江西', value: [3, 20]}, {
    name: '福建',
    value: [5, 30]
}, {name: '浙江', value: [7, 40]}, {name: '湖南', value: [9, 50]}, {
    name: '上海',
    value: [11, 120]
}, {name: '广西', value: [13, 60]}, {name: '云南', value: [15, 70]}, {
    name: '贵州',
    value: [17, 80]
}, {name: '重庆', value: [19, 90]}, {name: '四川', value: [21, 100]}, {
    name: '安徽',
    value: [23, 110]
}, {name: '江苏', value: [25, 130]}, {name: '河南', value: [27, 140]}, {
    name: '山东',
    value: [29, 150]
}, {name: '陕西', value: [31, 160]}, {name: '青海', value: [33, 170]}, {
    name: '西藏',
    value: [43, 180]
}];
var city = [
    {name: '广东', value: [1, 10]}, {name: '江西', value: [2, 20]}, {
        name: '福建',
        value: [3, 30]
    },{
        name: '河北',
        value: [4, 180]
    },{
        name: '北京',
        value: [5, 180]
    },{
        name: '天津',
        value: [6, 180]
    },{
        name: '山西',
        value: [7, 180]
    }, {name: '浙江', value: [8, 40]}, {name: '湖南', value: [9, 50]}, {
        name: '上海',
        value: [10, 120]
    }, {name: '广西', value: [11, 60]}, {name: '云南', value: [12, 70]}, {
        name: '贵州',
        value: [13, 80]
    }, {name: '重庆', value: [14, 90]}, {name: '四川', value: [15, 100]}, {
        name: '安徽',
        value: [16, 110]
    }, {name: '江苏', value: [17, 130]}, {name: '河南', value: [18, 140]}, {
        name: '山东',
        value: [19, 150]
    }, {name: '陕西', value: [20, 160]},{
        name: '甘肃',
        value: [21, 180]
    },{
        name: '辽宁',
        value: [22, 180]
    },{
        name: '吉林',
        value: [23, 180]
    },{
        name: '黑龙江',
        value: [24, 180]
    }, {name: '青海', value: [25, 170]},{
        name: '内蒙古',
        value: [26, 180]
    },{
        name: '宁夏',
        value: [27, 180]
    },{
        name: '新疆',
        value: [28, 180]
    }, {
        name: '西藏',
        value: [29, 180]
    },{
        name: '湖北',
        value: [30, 180]
    }];
var cityS = [
    {name: '北京关区', value: [200, 1]},
    {name: '成都关区', value: [190, 2]},
    {name: '大连海关', value: [180, 3]},
    {name: '福州关区', value: [170, 4]},
    {name: '拱北关区', value: [160, 5]},
    {name: '广州海关', value: [150, 6]},
    {name: '贵阳海关', value: [140, 7]},
    {name: '哈尔滨区', value: [130, 8]},
    {name: '海口关区', value: [120, 9]},
    {name: '杭州关区', value: [110, 10]},
    {name: '合肥海关', value: [195, 11]},
    {name: '呼特关区', value: [95, 12]},
    {name: '黄埔关区', value: [85, 13]},
    {name: '济南海关', value: [75, 14]},
    {name: '江门关区', value: [65, 15]},
    {name: '昆明关区', value: [55, 16]},
    {name: '拉萨海关', value: [45, 17]},
    {name: '兰州关区', value: [35, 18]},
    {name: '满洲里关', value: [25, 19]},
    {name: '南昌关区', value: [15, 20]},
    {name: '南京海关', value: [195, 21]},
    {name: '南宁关区', value: [185, 22]},
    {name: '宁波关区', value: [175, 23]},
    {name: '青岛海关', value: [165, 24]},
    {name: '厦门关区', value: [155, 25]},
    {name: '汕头海关', value: [145, 26]},
    {name: '上海海关', value: [135, 27]},
    {name: '深圳海关', value: [125, 28]},
    {name: '沈阳关区', value: [115, 29]},
    {name: '石家庄区', value: [105, 30]},
    {name: '太原海关', value: [95, 31]},
    {name: '天津关区', value: [195, 32]},
    {name: '乌关区', value: [75, 33]},
    {name: '武汉海关', value: [95, 34]},
    {name: '西安关区', value: [85, 35]},
    {name: '西宁关区', value: [195, 36]},
    {name: '银川海关', value: [65, 37]},
    {name: '湛江关区', value: [195, 38]},
    {name: '长春关区', value: [95, 39]},
    {name: '长沙关区', value: [45, 40]},
    {name: '郑州关区', value: [35, 41]},
    {name: '重庆关区', value: [5, 42]}
];
var geoCoordMap = {
    '北京关区': [116.46, 39.91],
    '成都关区': [104.06, 30.59],
    '大连海关': [121.78, 39.05],
    '福州关区': [119.41, 26.01],
    '拱北关区': [113.55, 22.21],
    '广州海关': [113.32, 23.11],
    '贵阳海关': [106.71, 26.57],
    '哈尔滨区': [126.68, 45.75],
    '海口关区': [110.32, 20.05],
    '杭州关区': [120.13, 30.27],
    '合肥海关': [117.21, 31.77],
    '呼特关区': [111.77, 40.83],
    '黄埔关区': [113.53, 23.06],
    '济南海关': [117, 36.6],
    '江门关区': [113.11, 22.6],
    '昆明关区': [102.71, 25.04],
    '拉萨海关': [91.08, 29.65],
    '兰州关区': [103.7, 36.09],
    '满洲里关': [117.5, 49.58],
    '南昌关区': [115.87, 28.66],
    '南京海关': [118.8, 32.02],
    '南宁关区': [108.39, 22.8],
    '宁波关区': [121.53, 29.87],
    '青岛海关': [120.311, 36.05],
    '厦门关区': [118.08, 24.47],
    '汕头海关': [116.74, 23.37],
    '上海海关': [121.34, 31.18],
    '深圳海关': [114.06, 22.54],
    '沈阳关区': [123.46, 41.74],
    '石家庄区': [114.45, 38.06],
    '太原海关': [112.56, 37.8],
    '天津关区': [117.21, 39.12],
    '乌关区': [87.57, 43.84],
    '武汉海关': [114.2, 30.63],
    '西安关区': [108.89, 34.22],
    '西宁关区': [101.82, 36.59],
    '银川海关': [106.24, 38.47],
    '湛江关区': [110.39, 21.23],
    '长春关区': [125.36, 43.86],
    '长沙关区': [113.01, 28.17],
    '郑州关区': [113.69, 34.78],
    '重庆关区': [106.49, 29.59]

};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                label: {
                    normal: {
                        formatter: function (params) {
                                var content = '',
                                    content = params.name;
                                return content;
                        },
                        position: 'bottom',
                        show: true,
                        textStyle: {
                            color: "#374b6c",
                            fontSize: setFontsize(12),
                            borderWidth: 0,
                            backgroundColor: 'transparent'
                        }
                    },
                    emphasis: {
                        show: true,
                        position: 'bottom',
                        textStyle: {
                            color: "#CD661D",
                            fontSize: setFontsize(16),
                            fontWeight:"bolder",
                            borderWidth: 0,
                            backgroundColor: 'transparent'
                        }
                    }
                },
            });
        }
    }
    return res;
};
var convertDataMark = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                coord: geoCoord,
            });
        }
    }
    return res;
};
console.log(convertDataMark(cityS));
//气泡图数据
var scatterData = convertData(cityS);
console.log(scatterData);
var mapChart = echarts.init(document.getElementById('mapEcharts'));
var min = 1, max = 42;
var mapOption = {
    tooltip: {
        formatter: function (params) {
            if (params.seriesType == "map3D") {
                return;
            } else if (params.seriesType == "scatter3D") {
                var content = '',
                    content = params.name + params.value[2];
                return content;
            }

        }
    },
    visualMap: [
        {
            show: false,
            min: min,
            max: max,
            itemWidth: setFontsize(12),
            itemHeight: setFontsize(80),
            orient: 'vertical',
            inverse: true,
            dimension: 0,
            seriesIndex: [0],
            inRange: {
                color: ['#247bff', '#baeaff']
            },
            textStyle: {
                color: '#fff',
                fontSize: setFontsize(10)
            },
            calculable: true,
            left: "4%"
        }, {
            show: true,
            min: min,
            max: max,
            itemWidth: setFontsize(12),
            itemHeight: setFontsize(80),
            orient: 'vertical',
            inverse: true,
            dimension: 3,
            seriesIndex: [1],
            inRange: {
                color: ['#ffffff', '#ffd259']
            },
            textStyle: {
                color: '#fff',
                fontSize: setFontsize(10)
            },
            calculable: true,
            right: "4%"
        }],
    geo3D: {
        show: false,
        map: '全国',
        roam: true,
        boxWidth: 70,
        top: '-5%',
        itemStyle: {
            color: '#1d5e98',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
        },
        viewControl: {
            autoRotate: false,
            distance: 64,
            minDistance: 40,
            maxDistance: 70
        },
        label: {
            show: false,
            textStyle: {
                color: '#f00', //地图初始化区域字体颜色
                fontSize: setFontsize(8),
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: setFontsize(3),
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 55,
                beta: 10

            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [
        {
            name: '全国',
            type: 'map3D',
            map: '全国',
            data: city,
            boxWidth: 70,
            zlevel: 1,
            selectedMode: 'single',
            //boxHeight:50,
            boxDepth: 80,
            regionHeight: 1,
            top: '-5%',
            //left:'10%',
            light: { //光照阴影
                main: {
                    color: '#f1f1f1', //光照颜色
                    intensity: 1.2, //光照强度
                    shadowQuality: 'high', //阴影亮度
                    shadow: true, //是否显示阴影
                    alpha: 55,
                    beta: 10
                },
                ambient: {
                    intensity: 0.3
                }
            },
            label: {
                show: false,
                // formatter: function (params) {
                //     var content = '',
                //         content = params.name;
                //     return content;
                // },
                textStyle: {
                    color: '#364d6c',
                    fontFamily: '黑体',
                    fontWeight: 'normal',
                    fontSize: setFontsize(14),
                    backgroundColor: 'rgba(0,23,11,0)'
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: false,
                    fontWeight: 'bold',
                    textStyle: {color: "#000"}
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0.8,
                    // borderColor: 'rgba(255,255,255,0,3)',
                    borderColor:"#ffffff",
                    color: '#b9e9ff'
                    // color:"#ffffff"
                }, //阴影效果
                emphasis: {
                    areaColor: '#1773c3'
                }
            },
            viewControl: {
                autoRotate: false,
                distance: 64,
                minDistance: 40,
                maxDistance: 70
            }
        },
        {
            name: '散点',
            type: "scatter3D",
            coordinateSystem: 'geo3D',
            zlevel: 1,
            hoverAnimation: true,
            symbol: 'pin',
            data: scatterData,
            // symbolSize:20,
            symbolSize: function (val) {
                // console.log(val);
                return val[2] / 5;
            },
            /*label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    show: true,
                    textStyle: {
                        color: "#374b6c",
                        fontSize: setFontsize(12),
                        borderWidth: 0,
                        backgroundColor: 'transparent'
                    }
                },
                emphasis: {
                    show: true
                }
            },*/
            itemStyle: {
                normal: {
                    color: '#05C3F9',
                    opacity:1
                },
                emphasis: {
                    color: "#CD661D"
                }
            },
            /*markPoint: {
                symbol: 'emptyCircle',
                //symbolSize : function (v){
                //	return 10 + v/10
                //},
                symbolSize: 8,
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        },
                    },
                    emphasis: {
                        label: {position: 'top'}
                    }
                },
                tooltip: {
                    padding: 10,
                    backgroundColor: 'rgba(125,184,218)',
                    textStyle: {
                        fontSize: 22,
                        color: '#000'
                    }
                },
                data: convertDataMark(cityS)
            }*/
        }]
};
mapChart.setOption(mapOption);
//循环高亮每个气泡
var sdIndex = 0;
var mapInt=setInterval(function () {
    var rsdIndex = sdIndex % scatterData.length;
    mapChart.dispatchAction({
        type: 'downplay',
        // 可选，系列 index，可以是一个数组指定多个系列
        seriesIndex: 1,
        // 可选，数据的 index
        dataIndex: rsdIndex,
    });
    mapOption.series[1].data[rsdIndex].label.normal.textStyle.color="#374b6c";
    mapOption.series[1].data[rsdIndex].label.normal.textStyle.fontWeight="normal";
    mapOption.series[1].data[rsdIndex].label.normal.textStyle.fontSize=setFontsize(12);
    mapOption.series[1].data[rsdIndex].label.normal.formatter=function (params) {
        var content = '',
            content = params.name;
        return content;
    };
    // mapChart.setOption(mapOption);
    sdIndex++;
    var ssdIndex = sdIndex % scatterData.length;
    mapOption.series[1].data[ssdIndex].label.normal.textStyle.color="#CD661D";
    mapOption.series[1].data[ssdIndex].label.normal.textStyle.fontWeight="bolder";
    mapOption.series[1].data[ssdIndex].label.normal.textStyle.fontSize=setFontsize(16);
    mapOption.series[1].data[ssdIndex].label.normal.formatter=function (params) {
        var content = '',
            content = params.name + params.value[2];
        return content;
    };
    mapChart.setOption(mapOption);
    mapChart.dispatchAction({
        type: 'highlight',
        // 可选，系列 index，可以是一个数组指定多个系列
        seriesIndex: 1,
        // 可选，数据的 index
        dataIndex: ssdIndex,
    });
}, 1000);
$("#mapEcharts").on("mouseover",function () {
    // console.log(1111);
        clearInterval(mapInt);
});
$("#mapEcharts").on("mouseout",function () {
    // console.log(2222);
        mapInt=setInterval(function () {
            var rsdIndex = sdIndex % scatterData.length;
            mapChart.dispatchAction({
                type: 'downplay',
                // 可选，系列 index，可以是一个数组指定多个系列
                seriesIndex: 1,
                // 可选，数据的 index
                dataIndex: rsdIndex,
            });
            mapOption.series[1].data[rsdIndex].label.normal.textStyle.color="#374b6c";
            mapOption.series[1].data[rsdIndex].label.normal.textStyle.fontWeight="normal";
            mapOption.series[1].data[rsdIndex].label.normal.textStyle.fontSize=setFontsize(12);
            mapOption.series[1].data[rsdIndex].label.normal.formatter=function (params) {
                var content = '',
                    content = params.name;
                return content;
            };
            // mapChart.setOption(mapOption);
            sdIndex++;
            var ssdIndex = sdIndex % scatterData.length;
            mapOption.series[1].data[ssdIndex].label.normal.textStyle.color="#CD661D";
            mapOption.series[1].data[ssdIndex].label.normal.textStyle.fontWeight="bolder";
            mapOption.series[1].data[ssdIndex].label.normal.textStyle.fontSize=setFontsize(16);
            mapOption.series[1].data[ssdIndex].label.normal.formatter=function (params) {
                var content = '',
                    content = params.name + params.value[2];
                return content;
            };
            mapChart.setOption(mapOption);
            mapChart.dispatchAction({
                type: 'highlight',
                // 可选，系列 index，可以是一个数组指定多个系列
                seriesIndex: 1,
                // 可选，数据的 index
                dataIndex: ssdIndex,
            });
        }, 1000);
});
/*3D地图点击事件，点击后升高*/
/*mapChart.on('click', function (params) {
    log(params)
    city = JSON.parse(JSON.stringify(normalCity));
    city.forEach(function (obj, inx) {
        if (obj.name == params.data.name) {
            obj.height = 3;
        }
    });
    mapOption.series.data = city;
    mapChart.setOption(mapOption);
});*/

//echarts折线图和组合图动起来的公共方法
function echartsRun(echartsobj, echartsoption, baseXdata, basedata, barIndex, firstTimeBar, num) {
    console.log();
    var data01 = baseXdata.slice(0, 5);
    var data01Length = data01.length;
    var seriesCount = echartsoption.series.length;
    for (var p = 0; p < seriesCount; p++) {
        echartsoption.series[p].data = basedata[p].slice(0, 5);
        console.log(echartsoption.series[p].data);
    }
    eval(num + "=" + setInterval(function () {
        // console.log(firstTimeBar);
        if (firstTimeBar) {
            if (barIndex == baseXdata.length - (data01Length)) {
                firstTimeBar = false;
                barIndex = 0;
                data01.shift();
                data01.push(baseXdata[barIndex]);
                for (var r = 0; r < seriesCount; r++) {
                    echartsoption.series[r].data.shift();
                    echartsoption.series[r].data.push(basedata[r][barIndex]);
                }
                // console.log("222++++++" + echartsoption.series[0].data);
            } else {
                //第一次五个以内的循环
                data01.shift();
                data01.push(baseXdata[barIndex + data01Length]);
                for (var h = 0; h < seriesCount; h++) {
                    echartsoption.series[h].data.shift();
                    echartsoption.series[h].data.push(basedata[h][barIndex + data01Length]);
                }
                // console.log("111++++++" + echartsoption.series[0].data);
            }
        }
        else {
            if (barIndex == baseXdata.length) {
                barIndex = 0;
                data01.shift();
                data01.push(baseXdata[barIndex]);
                for (var x = 0; x < seriesCount; x++) {
                    echartsoption.series[x].data.shift();
                    echartsoption.series[x].data.push(basedata[x][barIndex]);
                }
                // console.log("444++++++" + echartsoption.series[0].data);
            } else {
                data01.shift();
                data01.push(baseXdata[barIndex]);
                for (var y = 0; y < seriesCount; y++) {
                    echartsoption.series[y].data.shift();
                    echartsoption.series[y].data.push(basedata[y][barIndex]);
                }
                // console.log("333++++++" + echartsoption.series[0].data);
            }
        }


        barIndex++;
        // console.log(echartsoption.series[0].data);
        // echartsobj.setOption(echartsoption);
        echartsobj.setOption({
            xAxis: [{
                data: data01
            }],
            series: echartsoption.series
        });
    }, 2000));
}



