﻿(function () {
    require.config({
        paths: {
            echarts: 'echarts2/doc/example/www/js'
        },
        packages: [
            {
                name: 'BMap',
                location: 'echarts2/extension/BMap/src',
                main: 'main'
            }
        ]
    });

    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
    function (echarts, BMapExtension) {
        $('#features-charts-01').css({
    
        });

        // 初始化地图
        var BMapExt = new BMapExtension($('#features-charts-01')[0], BMap, echarts,{
            enableMapClick: false
        });
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();

        var startPoint = {
            x: 106.55441,
            y: 29.56975
        };

        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 12);
        map.enableScrollWheelZoom(true);
        
        var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push(geoCoord.concat(data[i].value));
            }
        }
        return res;
        };

        var option = {

            title : {
                text: 'poi统计',
                subtext: 'data from PM25.in',
                x:'center'
            },
            tooltip : {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                x:'left',
                data:['pm2.5']
            },
            dataRange: {
                min : 0,
                max : 1,
                calculable : true,
                color: ['maroon','purple','red','orange','yellow','lightgreen']
            },
            toolbox: {
                show : true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name: 'all',
                    type: 'map',
                    mapType: 'none',
                    hoverable: false,
                    roam:true,
                    data : [],
                    markPoint : {
                        symbolSize: 5,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                        itemStyle: {
                            normal: {
                                borderColor: '#87cefa',
                                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                                label: {
                                    show: false
                                }
                            },
                            emphasis: {
                                borderColor: '#1e90ff',
                                borderWidth: 5,
                                label: {
                                    show: false
                                }
                            }
                        },
                        data : [
                            {name : 'object_1', value : 0.188235294118},
                            {name : 'object_2', value : 0.1},
                            {name : 'object_3', value : 0.464705882353},
                            {name : 'object_4', value : 0.0294117647059},
                            {name : 'object_5', value : 0.335294117647},
                            {name : 'object_6', value : 0.205882352941},
                            {name : 'object_7', value : 0.535294117647},
                            {name : 'object_8', value : 0.170588235294},
                            {name : 'object_9', value : 0.152941176471},
                            {name : 'object_10', value : 0.623529411765},
                            {name : 'object_11', value : 0.4},
                            {name : 'object_12', value : 0.311764705882},
                            {name : 'object_13', value : 0.376470588235},
                            {name : 'object_14', value : 0.0823529411765},
                            {name : 'object_15', value : 0.276470588235},
                            {name : 'object_16', value : 0.729411764706},
                            {name : 'object_17', value : 0.394117647059},
                            {name : 'object_18', value : 0.364705882353},
                            {name : 'object_19', value : 0.676470588235},
                            {name : 'object_20', value : 0.311764705882},
                            {name : 'object_21', value : 0.194117647059},
                            {name : 'object_22', value : 0.217647058824},
                            {name : 'object_23', value : 0.0294117647059},
                            {name : 'object_24', value : 0.441176470588},
                            {name : 'object_25', value : 0.905882352941},
                            {name : 'object_26', value : 0.782352941176},
                            {name : 'object_27', value : 0.635294117647},
                            {name : 'object_28', value : 0.335294117647},
                            {name : 'object_29', value : 0.135294117647},
                            {name : 'object_30', value : 0.0588235294118},
                            {name : 'object_31', value : 0.405882352941},
                            {name : 'object_32', value : 0.141176470588},
                            {name : 'object_33', value : 0.582352941176},
                            {name : 'object_34', value : 0.811764705882},
                            {name : 'object_35', value : 0.764705882353},
                            {name : 'object_36', value : 0.841176470588},
                            {name : 'object_37', value : 0.652941176471},
                            {name : 'object_38', value : 0.435294117647},
                            {name : 'object_39', value : 0.358823529412},
                            {name : 'object_40', value : 0.335294117647},
                            {name : 'object_41', value : 0.1},
                            {name : 'object_42', value : 0.211764705882},
                            {name : 'object_43', value : 0.164705882353},
                            {name : 'object_44', value : 0.494117647059},
                            {name : 'object_45', value : 0.8},
                            {name : 'object_46', value : 0.870588235294},
                            {name : 'object_47', value : 0.935294117647},
                            {name : 'object_48', value : 0.9},
                            {name : 'object_49', value : 0.847058823529},
                            {name : 'object_50', value : 0.817647058824},
                            {name : 'object_51', value : 0.576470588235},
                            {name : 'object_52', value : 0.235294117647},
                            {name : 'object_53', value : 0.476470588235},
                            {name : 'object_54', value : 0.617647058824},
                            {name : 'object_55', value : 0.152941176471},
                            {name : 'object_56', value : 0.682352941176},
                            {name : 'object_57', value : 0.864705882353},
                            {name : 'object_58', value : 0.894117647059},
                            {name : 'object_59', value : 0.976470588235},
                            {name : 'object_60', value : 0.970588235294},
                            {name : 'object_61', value : 1.0},
                            {name : 'object_62', value : 0.876470588235},
                            {name : 'object_63', value : 0.858823529412},
                            {name : 'object_64', value : 0.529411764706},
                            {name : 'object_65', value : 0.264705882353},
                            {name : 'object_66', value : 0.194117647059},
                            {name : 'object_67', value : 0.0647058823529},
                            {name : 'object_68', value : 0.823529411765},
                            {name : 'object_69', value : 0.688235294118},
                            {name : 'object_70', value : 0.917647058824},
                            {name : 'object_71', value : 0.964705882353},
                            {name : 'object_72', value : 0.988235294118},
                            {name : 'object_73', value : 0.982352941176},
                            {name : 'object_74', value : 0.758823529412},
                            {name : 'object_75', value : 0.741176470588},
                            {name : 'object_76', value : 0.594117647059},
                            {name : 'object_77', value : 0.517647058824},
                            {name : 'object_78', value : 0.705882352941},
                            {name : 'object_79', value : 0.241176470588},
                            {name : 'object_80', value : 0.888235294118},
                            {name : 'object_81', value : 0.794117647059},
                            {name : 'object_82', value : 0.852941176471},
                            {name : 'object_83', value : 0.958823529412},
                            {name : 'object_84', value : 0.994117647059},
                            {name : 'object_85', value : 0.952941176471},
                            {name : 'object_86', value : 0.788235294118},
                            {name : 'object_87', value : 0.564705882353},
                            {name : 'object_88', value : 0.605882352941},
                            {name : 'object_89', value : 0.588235294118},
                            {name : 'object_90', value : 0.1},
                            {name : 'object_91', value : 0.423529411765},
                            {name : 'object_92', value : 0.723529411765},
                            {name : 'object_93', value : 0.747058823529},
                            {name : 'object_94', value : 0.776470588235},
                            {name : 'object_95', value : 0.835294117647},
                            {name : 'object_96', value : 0.882352941176},
                            {name : 'object_97', value : 0.911764705882},
                            {name : 'object_98', value : 0.752941176471},
                            {name : 'object_99', value : 0.523529411765},
                            {name : 'object_100', value : 0.694117647059},
                            {name : 'object_101', value : 0.647058823529},
                            {name : 'object_102', value : 0.370588235294},
                            {name : 'object_103', value : 0.0823529411765},
                            {name : 'object_104', value : 0.276470588235},
                            {name : 'object_105', value : 0.770588235294},
                            {name : 'object_106', value : 0.629411764706},
                            {name : 'object_107', value : 0.6},
                            {name : 'object_108', value : 0.658823529412},
                            {name : 'object_109', value : 0.7},
                            {name : 'object_110', value : 0.941176470588},
                            {name : 'object_111', value : 0.923529411765},
                            {name : 'object_112', value : 0.323529411765},
                            {name : 'object_113', value : 0.294117647059},
                            {name : 'object_114', value : 0.735294117647},
                            {name : 'object_115', value : 0.288235294118},
                            {name : 'object_116', value : 0.123529411765},
                            {name : 'object_117', value : 0.429411764706},
                            {name : 'object_118', value : 0.552941176471},
                            {name : 'object_119', value : 0.541176470588},
                            {name : 'object_120', value : 0.805882352941},
                            {name : 'object_121', value : 0.511764705882},
                            {name : 'object_122', value : 0.829411764706},
                            {name : 'object_123', value : 0.929411764706},
                            {name : 'object_124', value : 0.488235294118},
                            {name : 'object_125', value : 0.170588235294},
                            {name : 'object_126', value : 0.447058823529},
                            {name : 'object_127', value : 0.0411764705882},
                            {name : 'object_128', value : 0.0705882352941},
                            {name : 'object_129', value : 0.711764705882},
                            {name : 'object_130', value : 0.670588235294},
                            {name : 'object_131', value : 0.717647058824},
                            {name : 'object_132', value : 0.547058823529},
                            {name : 'object_133', value : 0.182352941176},
                            {name : 'object_134', value : 0.664705882353},
                            {name : 'object_135', value : 0.558823529412},
                            {name : 'object_136', value : 0.0235294117647},
                            {name : 'object_137', value : 0.0705882352941},
                            {name : 'object_138', value : 0.505882352941},
                            {name : 'object_139', value : 0.294117647059},
                            {name : 'object_140', value : 0.947058823529},
                            {name : 'object_141', value : 0.382352941176},
                            {name : 'object_142', value : 0.611764705882},
                            {name : 'object_143', value : 0.476470588235},
                            {name : 'object_144', value : 0.1},
                            {name : 'object_145', value : 0.335294117647},
                            {name : 'object_146', value : 0.452941176471},
                            {name : 'object_147', value : 0.0117647058824},
                            {name : 'object_148', value : 0.382352941176},
                            {name : 'object_149', value : 0.258823529412},
                            {name : 'object_150', value : 0.270588235294},
                            {name : 'object_151', value : 0.570588235294},
                            {name : 'object_152', value : 0.411764705882},
                            {name : 'object_153', value : 0.417647058824},
                            {name : 'object_154', value : 0.123529411765},
                            {name : 'object_155', value : 0.223529411765},
                            {name : 'object_156', value : 0.641176470588},
                            {name : 'object_157', value : 0.247058823529},
                            {name : 'object_158', value : 0.5},
                            {name : 'object_159', value : 0.323529411765},
                            {name : 'object_160', value : 0.0176470588235},
                            {name : 'object_161', value : 0.305882352941},
                            {name : 'object_162', value : 0.252941176471},
                            {name : 'object_163', value : 0.147058823529},
                            {name : 'object_164', value : 0.229411764706},
                            {name : 'object_165', value : 0.0823529411765},
                            {name : 'object_166', value : 0.00588235294118},
                            {name : 'object_167', value : 0.452941176471},
                            {name : 'object_168', value : 0.0411764705882},
                            {name : 'object_169', value : 0.470588235294},
                            {name : 'object_170', value : 0.0529411764706}
                        ]
                    },
                    geoCoord: {
                        'object_1':[106.5922, 29.2002],
                        'object_2':[106.85, 29.2],
                        'object_3':[106.5922, 29.2453],
                        'object_4':[106.6438, 29.2453],
                        'object_5':[106.6955, 29.2453],
                        'object_6':[106.7471, 29.2453],
                        'object_7':[106.7986, 29.2453],
                        'object_8':[106.85, 29.2452],
                        'object_9':[106.9015, 29.2451],
                        'object_10':[106.5922, 29.2904],
                        'object_11':[106.6438, 29.2904],
                        'object_12':[106.6955, 29.2905],
                        'object_13':[106.7471, 29.2905],
                        'object_14':[106.7986, 29.2904],
                        'object_15':[106.85, 29.2903],
                        'object_16':[106.3349, 29.3361],
                        'object_17':[106.5408, 29.3357],
                        'object_18':[106.5922, 29.3356],
                        'object_19':[106.6438, 29.3355],
                        'object_20':[106.6955, 29.3356],
                        'object_21':[106.7471, 29.3356],
                        'object_22':[106.7986, 29.3355],
                        'object_23':[106.85, 29.3354],
                        'object_24':[106.3865, 29.3812],
                        'object_25':[106.5408, 29.3808],
                        'object_26':[106.5922, 29.3807],
                        'object_27':[106.6438, 29.3807],
                        'object_28':[106.6955, 29.3807],
                        'object_29':[106.7471, 29.3807],
                        'object_30':[106.7986, 29.3807],
                        'object_31':[106.85, 29.3806],
                        'object_32':[106.9015, 29.3805],
                        'object_33':[106.3865, 29.4264],
                        'object_34':[106.438, 29.4263],
                        'object_35':[106.4894, 29.4262],
                        'object_36':[106.5408, 29.426],
                        'object_37':[106.5922, 29.4258],
                        'object_38':[106.6438, 29.4258],
                        'object_39':[106.6955, 29.4258],
                        'object_40':[106.7471, 29.4259],
                        'object_41':[106.7986, 29.4258],
                        'object_42':[106.85, 29.4257],
                        'object_43':[106.9015, 29.4256],
                        'object_44':[106.3349, 29.4714],
                        'object_45':[106.3865, 29.4715],
                        'object_46':[106.438, 29.4714],
                        'object_47':[106.4894, 29.4713],
                        'object_48':[106.5408, 29.4711],
                        'object_49':[106.5922, 29.4709],
                        'object_50':[106.6438, 29.4709],
                        'object_51':[106.6955, 29.471],
                        'object_52':[106.7471, 29.471],
                        'object_53':[106.7986, 29.4709],
                        'object_54':[106.85, 29.4708],
                        'object_55':[106.9015, 29.4707],
                        'object_56':[106.3349, 29.5166],
                        'object_57':[106.3865, 29.5166],
                        'object_58':[106.438, 29.5166],
                        'object_59':[106.4894, 29.5164],
                        'object_60':[106.5408, 29.5162],
                        'object_61':[106.5923, 29.5161],
                        'object_62':[106.6438, 29.516],
                        'object_63':[106.6955, 29.5161],
                        'object_64':[106.7471, 29.5161],
                        'object_65':[106.7986, 29.516],
                        'object_66':[106.85, 29.5159],
                        'object_67':[106.9015, 29.5158],
                        'object_68':[106.3349, 29.5617],
                        'object_69':[106.3865, 29.5617],
                        'object_70':[106.438, 29.5617],
                        'object_71':[106.4895, 29.5615],
                        'object_72':[106.5408, 29.5613],
                        'object_73':[106.5923, 29.5612],
                        'object_74':[106.6438, 29.5611],
                        'object_75':[106.6955, 29.5612],
                        'object_76':[106.7471, 29.5612],
                        'object_77':[106.7986, 29.5612],
                        'object_78':[106.8501, 29.561],
                        'object_79':[106.9015, 29.561],
                        'object_80':[106.3349, 29.6068],
                        'object_81':[106.3865, 29.6068],
                        'object_82':[106.438, 29.6068],
                        'object_83':[106.4895, 29.6066],
                        'object_84':[106.5408, 29.6064],
                        'object_85':[106.5923, 29.6063],
                        'object_86':[106.6438, 29.6063],
                        'object_87':[106.6955, 29.6063],
                        'object_88':[106.7471, 29.6063],
                        'object_89':[106.7986, 29.6063],
                        'object_90':[106.8501, 29.6062],
                        'object_91':[106.9015, 29.6061],
                        'object_92':[106.3349, 29.6519],
                        'object_93':[106.3865, 29.652],
                        'object_94':[106.438, 29.6519],
                        'object_95':[106.4895, 29.6517],
                        'object_96':[106.5408, 29.6515],
                        'object_97':[106.5923, 29.6514],
                        'object_98':[106.6438, 29.6514],
                        'object_99':[106.6955, 29.6514],
                        'object_100':[106.7471, 29.6514],
                        'object_101':[106.7986, 29.6514],
                        'object_102':[106.8501, 29.6513],
                        'object_103':[106.9015, 29.6512],
                        'object_104':[106.9531, 29.6512],
                        'object_105':[106.3349, 29.697],
                        'object_106':[106.3865, 29.6971],
                        'object_107':[106.4381, 29.697],
                        'object_108':[106.4895, 29.6969],
                        'object_109':[106.5408, 29.6967],
                        'object_110':[106.5923, 29.6965],
                        'object_111':[106.6438, 29.6965],
                        'object_112':[106.6955, 29.6965],
                        'object_113':[106.7471, 29.6966],
                        'object_114':[106.7986, 29.6965],
                        'object_115':[106.8501, 29.6964],
                        'object_116':[106.9015, 29.6963],
                        'object_117':[106.9531, 29.6963],
                        'object_118':[106.3865, 29.7422],
                        'object_119':[106.4381, 29.7421],
                        'object_120':[106.4895, 29.742],
                        'object_121':[106.5408, 29.7418],
                        'object_122':[106.5923, 29.7416],
                        'object_123':[106.6438, 29.7416],
                        'object_124':[106.6955, 29.7416],
                        'object_125':[106.7471, 29.7417],
                        'object_126':[106.7986, 29.7416],
                        'object_127':[106.8501, 29.7415],
                        'object_128':[106.9015, 29.7414],
                        'object_129':[106.9531, 29.7414],
                        'object_130':[106.4381, 29.7872],
                        'object_131':[106.4895, 29.7871],
                        'object_132':[106.5408, 29.7869],
                        'object_133':[106.5923, 29.7867],
                        'object_134':[106.6438, 29.7867],
                        'object_135':[106.6955, 29.7867],
                        'object_136':[106.7471, 29.7868],
                        'object_137':[106.7986, 29.7867],
                        'object_138':[106.8501, 29.7866],
                        'object_139':[106.9015, 29.7865],
                        'object_140':[106.4381, 29.8323],
                        'object_141':[106.4895, 29.8322],
                        'object_142':[106.5408, 29.832],
                        'object_143':[106.5923, 29.8318],
                        'object_144':[106.6438, 29.8318],
                        'object_145':[106.6955, 29.8318],
                        'object_146':[106.7471, 29.8319],
                        'object_147':[106.7986, 29.8318],
                        'object_148':[106.8501, 29.8317],
                        'object_149':[106.9015, 29.8316],
                        'object_150':[106.5408, 29.8771],
                        'object_151':[106.5923, 29.8769],
                        'object_152':[106.6439, 29.8769],
                        'object_153':[106.6955, 29.877],
                        'object_154':[106.7471, 29.877],
                        'object_155':[106.7986, 29.8769],
                        'object_156':[106.8501, 29.8768],
                        'object_157':[106.9016, 29.8767],
                        'object_158':[106.5923, 29.922],
                        'object_159':[106.6439, 29.922],
                        'object_160':[106.6955, 29.9221],
                        'object_161':[106.7471, 29.9221],
                        'object_162':[106.7986, 29.922],
                        'object_163':[106.8501, 29.9219],
                        'object_164':[106.9016, 29.9218],
                        'object_165':[106.6439, 29.9671],
                        'object_166':[106.6955, 29.9672],
                        'object_167':[106.7471, 29.9672],
                        'object_168':[106.7987, 29.9671],
                        'object_169':[106.6439, 30.0122],
                        'object_170':[106.6955, 30.0123]
                    }
                }
            ]
        };

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        BMapExt.setOption(option);



        
    }
);
})();