/*折线图可配置参数*/
var colorList = [['#a769ee', '#e65e20', '#eab217'], ['#778899', '#4682B4', '#00FA9A']];
var colorSelect = 0;
/*折线图配置项*/
var foldLineOption = {
    title: {
        show: false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    dataZoom: [{
        show: true,
        realtime: true,
        start: 20,
        end: 80,
        handleSize: '0%',
        backgroundColor: '#1d4092',
        height: setFontzie(5),
        width: setFontzie(100),
        borderColor: "rgba(0,0,0,0)",
        handleStyle: {
            shadowBlur: 2,
            background: "#ddd",
            shadowColor: "#ddd",
        },
        showDataShadow: false,
        fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: '#1a43dd'
        }, {
            offset: 1,
            color: '#34b4ff'
        }]),
        showDetail: false,
        bottom: 0
    }, {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 60,
    }],
    legend: {
        show: 'false',
        icon: 'circle',
        itemWidth: setFontzie(14),
        itemHeight: setFontzie(5),
        itemGap: setFontzie(13),
        data: ['广州', '海关', '大楼'],
        right: '2%',
        top: '-5%',
        textStyle: {
            fontSize: setFontzie(8),
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '1%',
        right: '2%',
        bottom: '15%',
        top: '20%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        },
        axisLabel: {
            margin: setFontzie(10),
            textStyle: {
                fontSize: setFontzie(8),
                color: '#fff'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        splitNumber: 2,
        axisLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        },
        axisLabel: {
            margin: setFontzie(10),
            textStyle: {
                fontSize: setFontzie(8),
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        }
    }],
    series: [{
        name: '广州',
        type: 'line',
        lineStyle: {
            normal: {
                width: 1
            }
        },
        itemStyle: {
            normal: {
                color: colorList[colorSelect][0]
            }
        },
        data: [96.3, 46.4, 87.5, 95.6, 68.1, 94.8, 59.6, 94.1, 80.1, 52.4, 75.8, 94.7]
    }, {
        name: '海关',
        type: 'line',
        lineStyle: {
            normal: {
                width: setFontzie(1)
            }
        },
        itemStyle: {
            normal: {
                color: colorList[colorSelect][1]
            }
        },
        data: [77.3, 69.2, 99.3, 30.0, 99.6, 90.6, 50.0, 91.5, 69.8, 67.5, 70.4, 84.9]
    }, {
        name: '大楼',
        type: 'line',
        lineStyle: {
            normal: {
                width: setFontzie(1)
            }
        },
        itemStyle: {
            normal: {
                color: colorList[colorSelect][2]
            }
        },
        data: [84.2, 81.0, 67.5, 72.1, 43.7, 88.5, 91.9, 41.8, 79.7, 87.6, 92.9, 0]
    }]
};
/*组合图（饼图、折线图、散点图）配置项*/
var paperDataURI = 'data:image/png;base64,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';
// var paperDataURI = 'data:image/png;base64,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';
var barOption = {
    grid: {
        left: '1%',
        right: '1%',
        bottom: '10%',
        top: '20%',
        containLabel: true
    },
    legend: {
        icon: 'circle',
        itemWidth: setFontzie(14),
        itemHeight: setFontzie(5),
        itemGap: setFontzie(13),
        data: ['关区分析'],
        right: '2%',
        textStyle: {
            fontSize: setFontzie(10),
            color: '#F1F1F3'
        }
    },
    xAxis: [{
        data: ['广州', '海关', '大楼', '广州', '海关', '大楼', '广州', '海关', '大楼'],
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        },
        axisLabel: {
            margin: setFontzie(10),
            textStyle: {
                fontSize: setFontzie(8),
                color: '#fff'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        position: 'left',
        axisTick: {
            show: false
        },
        splitNumber: 2,
        axisLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        },
        axisLabel: {
            margin: setFontzie(10),
            textStyle: {
                fontSize: setFontzie(8),
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        }
    }, {
        type: 'value',
        position: 'right',
        axisTick: {
            show: false
        },
        splitNumber: 2,
        axisLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        },
        axisLabel: {
            margin: setFontzie(10),
            textStyle: {
                fontSize: setFontzie(8),
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(193,193,191,0.5)'
            }
        }
    }],
    animationEasing: 'linear',
    series: [{
        type: 'pictorialBar',
        name: '关区分析',
        hoverAnimation: true,
        yAxisIndex: 0,
        symbol: 'image://' + paperDataURI,
        symbolRepeat: true,
        symbolSize: [20, 10],
        symbolOffset: [0, 10],
        symbolMargin: '-48%',
        animationDelay: function (dataIndex, params) {
            return params.index * 5;
        },
        symbolRepeatDirection: 'end',
        data: [1300, 800, 700, 1300, 800, 700, 1300, 800, 700]
    }, {
        name: '时间',
        type: 'line',
        yAxisIndex: 1,
        label: {
            normal: {
                show: false
            }
        },
        lineStyle: {
            normal: {
                width: setFontzie(2),
                color: '#a56ef0'
            }
        },
        data: [1300, 800, 700, 1300, 800, 700, 1300, 800, 700]
    }, {
        name: '姓名',
        type: 'line',
        yAxisIndex: 1,
        label: {
            normal: {
                show: false
            }
        },
        lineStyle: {
            normal: {
                width: setFontzie(2),
                color: '#eeaf12'
            }
        },
        data: [1200, 700, 800, 1400, 700, 600, 1400, 900, 900]
    },
        {
            symbolSize: setFontzie(14),
            symbol: 'image://../img/scatter.png',
            data: [1300, 800, 700, 1300, 800, 700, 1300, 800, 700],
            type: 'scatter'
        }]
};
/*饼图配置项*/
var pieOption = {
    credits: {
        enabled: false
    },
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        },
        backgroundColor: 'rgba(0,0,0,0)'
    },
    colors: ['#68daff', '#01a3eb', '#ecf37f', '#fa8550', '#474eff'],
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            // allowPointSelect: true,
            cursor: 'pointer',
            depth: 15,
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        type: 'pie',
        name: '占比',
        size: '90%',
        center: ['50%', '70%'],
        data: [
            {
                name: 'Firefox',
                y:45.0,
                sliced: true, // 突出显示这个点（扇区），用于强调。
            },
            ['IE', 26.8],
            ['Chrome', 36.8],
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
        ]
    }]
};
/*环图配置项*/
var annularOption = {
    credits: {
        enabled: false
    },
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        },
        backgroundColor: 'rgba(0,0,0,0)'
    },
    colors: ['#54c7ff', '#f29144', '#e5526c', '#3de8be', '#474eff'],
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        pie: {
            innerSize: '90%',
            depth: 12,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'center',
        floating: true,
        itemDistance: 5,
        itemStyle: {
            color: '#fff',
            fontSize: setFontzie(6)+"px"
        },
        symbolRadius: 0,
        symbolHeight: 5,
        itemHoverStyle: {
            color: "#fff"
        }
    },
    series: [{
        name: '金额',
        size: '90%',
        center: ['50%', '25%'],
        data: [
            {
                name: '香蕉',
                y:8,
                sliced: true, // 突出显示这个点（扇区），用于强调。
            },
            ['猕猴桃', 3],
            ['桃子', 1],
            ['橘子', 6],
        ]
    }]
};
/*圆角柱形图配置项*/
var radiusBarOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        confine: true,
        formatter: '{b}'
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '0%',
        top: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: false
    },
    yAxis: {
        inverse: true,
        type: 'category',
        data: ["陆运运输", "航空运输", "水路运输", "其他方式"],
        //隐藏标尺线
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(193,193,191,0.5)"
            }
        },
        //去掉刻度线
        axisTick: {
            show: false,
        },
        //去掉刻度
        axisLabel: {
            interval: 0,
            fontSize: setFontzie(8),
            color: '#fff',
            //限制显示字数或者说控制换行
            formatter: function (params) {
                if (params.length > 6) {
                    var newStr = params.substr(0, 6);
                    newStr += "...";
                    return newStr
                } else {
                    return params
                }
            }
        }
    },
    series: [
        {
            name: '2011年',
            barWidth: setFontzie(12),
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 50, 50, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#32b7fa' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#1a3eda' // 100% 处的颜色
                    }], false)
                }
            },
            data: [40, 30, 30, 20]
        },
    ]
};

