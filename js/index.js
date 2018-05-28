/*模块一的两个组合图*/
echarts.init(document.getElementById('swp_1MidE')).setOption(barOption);
echarts.init(document.getElementById('swp_1BtmE')).setOption(barOption);
/*模块二顶部的三个饼图*/
Highcharts.chart('pieEct_1', pieOption);
Highcharts.chart('pieEct_2', pieOption);
Highcharts.chart('pieEct_3', pieOption);
/*模块二中部的三个环图*/
Highcharts.chart('annularEct_1', annularOption);
Highcharts.chart('annularEct_2', annularOption);
Highcharts.chart('annularEct_3', annularOption);
/*模块二底部的三个2D圆角柱形图*/
echarts.init(document.getElementById('radiusEct_1')).setOption(radiusBarOption);
echarts.init(document.getElementById('radiusEct_2')).setOption(radiusBarOption);
echarts.init(document.getElementById('radiusEct_3')).setOption(radiusBarOption);
/*模块三组合图和折线图*/
echarts.init(document.getElementById('swp_3TopE')).setOption(barOption);
echarts.init(document.getElementById('swp_3MidE')).setOption(foldLineOption);
/*模块四组六个折线图*/
echarts.init(document.getElementById('swp_4E_1')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_2')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_3')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_4')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_5')).setOption(foldLineOption);
echarts.init(document.getElementById('swp_4E_6')).setOption(foldLineOption);
/*左上角LED灯牌效果*/
$('.counter').countUp();

/*3D地图*/
var normalCity = [{name: '广东', value: [1, 10]}, {name: '江西', value: [3, 20]}, {
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
var mapName = '全国';
var geoCoordMap01 = {};
var mapFeatures = echarts.getMap(mapName).geoJson.features;
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap01[name] = v.properties.cp;

});
var convertData01 = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap01[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
var cityS = [
    {name: '北京关区', value: [200,1]},
    {name: '成都关区', value: [190,2]},
    {name: '大连海关', value: [180,3]},
    {name: '福州关区', value: [170,4]},
    {name: '拱北关区', value: [160,5]},
    {name: '广州海关', value: [150,6]},
    {name: '贵阳海关', value: [140,7]},
    {name: '哈尔滨区', value: [130,8]},
    {name: '海口关区', value: [120,9]},
    {name: '杭州关区', value: [110,10]},
    {name: '合肥海关', value: [195,11]},
    {name: '呼特关区', value: [95,12]},
    {name: '黄埔关区', value: [85,13]},
    {name: '济南海关', value: [75,14]},
    {name: '江门关区', value: [65,15]},
    {name: '昆明关区', value: [55,16]},
    {name: '拉萨海关', value: [45,17]},
    {name: '兰州关区', value: [35,18]},
    {name: '满洲里关', value: [25,19]},
    {name: '南昌关区', value: [15,20]},
    {name: '南京海关', value: [195,21]},
    {name: '南宁关区', value: [185,22]},
    {name: '宁波关区', value: [175,23]},
    {name: '青岛海关', value: [165,24]},
    {name: '厦门关区', value: [155,25]},
    {name: '汕头海关', value: [145,26]},
    {name: '上海海关', value: [135,27]},
    {name: '深圳海关', value: [125,28]},
    {name: '沈阳关区', value: [115,29]},
    {name: '石家庄区', value: [105,30]},
    {name: '太原海关', value: [95,31]},
    {name: '天津关区', value: [195,32]},
    {name: '乌关区', value: [75,33]},
    {name: '武汉海关', value: [95,34]},
    {name: '西安关区', value: [85,35]},
    {name: '西宁关区', value: [195,36]},
    {name: '银川海关', value: [65,37]},
    {name: '湛江关区', value: [195,38]},
    {name: '长春关区', value: [95,39]},
    {name: '长沙关区', value: [45,40]},
    {name: '郑州关区', value: [35,41]},
    {name: '重庆关区', value: [5,42]}
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
            });
        }
    }
    return res;
};
var mapChart = echarts.init(document.getElementById('mapEcharts'));
var min = 1, max = 42;
var mapOption = {
    tooltip: {
        formatter: function (params) {
            if(params.seriesType=="map3D"){
                return;
            }else if(params.seriesType=="scatter3D"){
                var content = '',
                    content = params.name + params.value[2];
                return content;
            }

        }
    },
    visualMap: [{
        show: false,
        min: min,
        max: max,
        itemWidth: '12',
        itemHeight: '80',
        orient: 'vertical',
        inverse: true,
        dimension: 0,
        seriesIndex: [0],
        inRange: {
            color: ['#257cff', '#baeaff']
        },
        textStyle: {
            color: '#fff',
            fontSize: '10'
        },
        calculable: true,
        left: "4%"
    }, {
        show: true,
        min: min,
        max: max,
        itemWidth: '12',
        itemHeight: '80',
        orient: 'vertical',
        inverse: true,
        dimension: 3,
        seriesIndex: [1],
        inRange: {
            color: ['#00467F', '#A5CC82']
        },
        textStyle: {
            color: '#fff',
            fontSize: '10'
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
                fontSize: 8,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
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
            boxDepth: 60,
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
                    fontSize: 14,
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
                    borderColor: 'rgba(255,255,255,0,3)',
                    color: '#b9e9ff'
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
            symbol: 'pin',
            data: convertData(cityS),
            // symbolSize:20,
            symbolSize: function (val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    show: true,
                    textStyle:{
                        color:"#374b6c",
                        fontSize:12,
                        borderWidth:0,
                        backgroundColor: 'transparent'
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9'
                }
            }
        }]
};
mapChart.setOption(mapOption);
/*3D地图点击事件，点击后升高*/
mapChart.on('click', function (params) {
    log(params)
    city = JSON.parse(JSON.stringify(normalCity));
    city.forEach(function (obj, inx) {
        if (obj.name == params.data.name) {
            obj.height = 3;
        }
    });
    mapOption.series.data = city;
    mapChart.setOption(mapOption);
});
