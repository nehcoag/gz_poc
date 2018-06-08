/*渲染3D金字塔*/
initTwModel("mainCvshd");

/*金字塔页面图表初始化*/
/*左上折线图*/
var ltChart = echarts.init(document.getElementById('ltChart'));
ltChart.setOption(foldLineOption);
/*左中柱形图*/
var lmChart = echarts.init(document.getElementById('lmChart'));
lmChart.setOption(barOption);
/*左下柱形图*/
var lbChart = echarts.init(document.getElementById('lbChart'));
lbChart.setOption(barOption);
/*右上柱形图*/
var rtChart = echarts.init(document.getElementById('rtChart'));
rtChart.setOption(barOption);
/*右中左柱形图*/
var rmlChart = echarts.init(document.getElementById('rmlChart'));
rmlChart.setOption(barOption);
/*右中右柱形图*/
var rmrChart = echarts.init(document.getElementById('rmrChart'));
rmrChart.setOption(barOption);
/*右下左柱形图*/
var rblChart = echarts.init(document.getElementById('rblChart'));
rblChart.setOption(barOption);
/*右下右柱形图*/
var rbrChart = echarts.init(document.getElementById('rbrChart'));
rbrChart.setOption(barOption);
/**
 * 在页面节点中渲染金字塔;
 * @param dom:节点ID;
 * @returns *;
 */
function initTwModel(dom) {
    var dom_intersected, dom_oriColor;
    var WIDTH = document.getElementById(dom).offsetWidth;
    var HEIGHT = document.getElementById(dom).offsetHeight;
    //默认参数设置
    var VIEW_ANGLE = 20,//25
        ASPECT = WIDTH / HEIGHT,
        NEAR = 1,
        FAR = 10000;
    /* 初始化3D面板 */
    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer({/*alpha: true,*/ antialias: true,logarithmicDepthBuffer:true});
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
    renderer.setSize(WIDTH, HEIGHT);
    document.getElementById(dom).appendChild(renderer.domElement);
    /* 灯光 */
    var ambientLight = new THREE.AmbientLight("#ffffff");
    scene.add(ambientLight);
    var spotLight = new THREE.DirectionalLight(0xffffff);
    spotLight.position.set(100, 500, 400);
    spotLight.castShadow = false;
    scene.add(spotLight);
    /*相机*/
    var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    camera.position.set(0, 1000, 4000);
    // camera.rotation.x = -0.2;//-0.2
    scene.add(camera);
    /*鼠标控制*/
    var controls = new THREE.OrbitControls(camera);
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = 1.47;
    controls.minDistance = 1;
    controls.maxDistance = 4000;
    // camera.position.set( 0, 500, 1000 );
    controls.addEventListener('change', render);
    /*渲染*/
    function render() {
        renderer.render(scene, camera);
    }
    var jsonPY={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 49,
                "normals": 66,
                "colors": 0,
                "uvs": 136,
                "triangles": 66,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [-500.0,25.0,500.0,500.0,25.0,500.0,500.0,25.0,-500.0,-500.0,25.0,-500.0,-404.082,216.835,404.082,404.082,216.835,404.082,404.082,216.835,-404.082,-404.082,216.835,-404.082,-395.918,233.165,395.918,395.918,233.165,395.918,395.918,233.165,-395.918,-395.918,233.165,-395.918,-304.082,416.835,304.082,304.082,416.835,304.082,304.082,416.835,-304.082,-304.082,416.835,-304.082,-295.918,433.165,295.918,295.918,433.165,295.918,295.918,433.165,-295.918,-295.918,433.165,-295.918,-204.082,616.835,204.082,204.082,616.835,204.082,204.082,616.835,-204.082,-204.082,616.835,-204.082,-195.918,633.165,195.918,195.918,633.165,195.918,195.918,633.165,-195.918,-195.918,633.165,-195.918,-104.082,816.835,104.082,104.082,816.835,104.082,104.082,816.835,-104.082,-104.082,816.835,-104.082,0.0,1025.0,0.0,-95.9175,833.165,95.9175,95.9175,833.165,95.9175,95.9175,833.165,-95.9175,-95.9175,833.165,-95.9175,-625.0,0.0,625.0,625.0,0.0,625.0,-625.0,0.0,-625.0,625.0,0.0,-625.0,-625.0,25.0,625.0,625.0,25.0,625.0,-625.0,25.0,-625.0,625.0,25.0,-625.0,-625.0,0.0,625.0,625.0,0.0,625.0,-625.0,0.0,-625.0,625.0,0.0,-625.0],

        "normals": [0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0,0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0,0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0,0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,-1.0,0.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0],

        "colors": [],

        "uvs": [[0.0623519,0.273292,0.018291,0.18517,0.477653,0.18517,0.433592,0.273292,0.0623519,0.273516,0.018291,0.185394,0.477653,0.185394,0.433592,0.273516,0.0623519,0.27345,0.018291,0.185328,0.477653,0.185328,0.433592,0.27345,0.0635159,0.273347,0.0195416,0.185399,0.478001,0.185399,0.434027,0.273347,0.477203,0.114952,0.477203,0.221499,0.370656,0.221499,0.370656,0.114952,0.01,0.244068,0.01,0.112459,0.141609,0.112459,0.141609,0.244068,0.900179,0.440181,0.586949,0.617923,0.900179,0.352675,0.587306,0.618194,0.533286,0.510597,0.875283,0.341118,0.875283,0.449612,0.587306,0.617569,0.766789,0.449612,0.587306,0.618819,0.766789,0.341118,0.533808,0.511198,0.533808,0.510574,0.987685,0.352675,0.533808,0.511823,0.987685,0.440181,0.995086,0.510574,0.941588,0.617569,0.995086,0.511198,0.941588,0.618194,0.995086,0.511823,0.941588,0.618819,0.995987,0.510597,0.942324,0.617923,0.262613,0.452613,0.102792,0.638207,0.262613,0.338485,0.103024,0.638281,0.0355312,0.503685,0.493125,0.339386,0.493125,0.449409,0.103024,0.637069,0.383102,0.449409,0.103024,0.638274,0.383102,0.339386,0.0357526,0.503738,0.0357526,0.502526,0.376741,0.338485,0.0357526,0.503731,0.376741,0.452613,0.469287,0.502526,0.402015,0.637069,0.469287,0.503738,0.402015,0.638281,0.469287,0.503731,0.402015,0.638274,0.468998,0.503685,0.401737,0.638207,0.875991,0.7839,0.643718,0.993679,0.875991,0.674711,0.64409,0.991576,0.541435,0.789114,0.862661,0.672174,0.862661,0.782522,0.64409,0.991529,0.752313,0.782522,0.64409,0.992906,0.752313,0.672174,0.541975,0.787346,0.541975,0.787299,0.98518,0.674711,0.541975,0.788676,0.98518,0.7839,0.977672,0.787299,0.875557,0.991529,0.977672,0.787346,0.875557,0.991576,0.977672,0.788676,0.875557,0.992906,0.977847,0.789114,0.875564,0.993679,0.32902,0.991824,0.0180836,0.99663,0.184571,0.702926,0.0180836,0.836223,0.329102,0.990234,0.185547,0.703125,0.329102,0.991211,0.17849,0.836223,0.329102,0.990234,0.17849,0.99663,0.185547,0.703125,0.472656,0.703125,0.472656,0.703125,0.185547,0.702148,0.472656,0.702148,0.473469,0.702926,0.54594,0.109428,0.754524,0.109428,0.754524,0.318012,0.54594,0.318012,0.99,0.0446964,0.502533,0.0446964,0.502533,0.0349471,0.99,0.0349471,0.99,0.0945905,0.502533,0.0945905,0.502533,0.0848412,0.99,0.0848412,0.99,0.0197493,0.502533,0.0197493,0.502533,0.01,0.99,0.01,0.99,0.0696435,0.502533,0.0696435,0.502533,0.0598941,0.99,0.0598941,0.887194,0.222661,0.993404,0.222661,0.887194,0.328871,0.993404,0.328871]],

        "faces": [42,1,5,4,0,14,15,12,0,0,0,42,4,0,1,0,12,13,14,1,1,1,42,2,6,5,0,2,3,0,2,2,2,42,5,1,2,0,0,1,2,3,3,3,42,3,7,6,0,10,11,8,4,4,4,42,6,2,3,0,8,9,10,5,5,5,42,0,4,7,0,6,7,4,6,6,6,42,7,3,0,0,4,5,6,7,7,7,42,3,2,1,0,21,22,23,8,8,8,42,1,0,3,0,23,20,21,9,9,9,42,6,7,4,0,17,18,19,10,10,10,42,4,5,6,0,19,16,17,11,11,11,42,9,13,12,0,46,47,25,12,12,12,42,12,8,9,0,25,28,46,13,13,13,42,10,14,13,0,40,41,31,14,14,14,42,13,9,10,0,31,36,40,15,15,15,42,11,15,14,0,44,45,33,16,16,16,42,14,10,11,0,33,38,44,17,17,17,42,8,12,15,0,42,43,27,18,18,18,42,15,11,8,0,27,35,42,19,19,19,42,11,10,9,0,26,37,39,20,20,20,42,9,8,11,0,39,24,26,21,21,21,42,14,15,12,0,30,32,34,22,22,22,42,12,13,14,0,34,29,30,23,23,23,42,17,21,20,0,70,71,49,24,24,24,42,20,16,17,0,49,52,70,25,25,25,42,18,22,21,0,64,65,55,26,26,26,42,21,17,18,0,55,60,64,27,27,27,42,19,23,22,0,68,69,57,28,28,28,42,22,18,19,0,57,62,68,29,29,29,42,16,20,23,0,66,67,51,30,30,30,42,23,19,16,0,51,59,66,31,31,31,42,19,18,17,0,50,61,63,32,32,32,42,17,16,19,0,63,48,50,33,33,33,42,22,23,20,0,54,56,58,34,34,34,42,20,21,22,0,58,53,54,35,35,35,42,25,29,28,0,94,95,73,36,36,36,42,28,24,25,0,73,76,94,37,37,37,42,26,30,29,0,88,89,79,38,38,38,42,29,25,26,0,79,84,88,39,39,39,42,27,31,30,0,92,93,81,40,40,40,42,30,26,27,0,81,86,92,41,41,41,42,24,28,31,0,90,91,75,42,42,42,42,31,27,24,0,75,83,90,43,43,43,42,27,26,25,0,74,85,87,44,44,44,42,25,24,27,0,87,72,74,45,45,45,42,30,31,28,0,78,80,82,46,46,46,42,28,29,30,0,82,77,78,47,47,47,42,32,33,34,0,96,98,111,48,48,48,42,32,34,35,0,102,106,107,49,49,49,42,32,35,36,0,104,109,110,50,50,50,42,32,36,33,0,100,101,108,51,51,51,42,36,35,34,0,99,103,105,52,52,52,42,34,33,36,0,105,97,99,53,53,53,42,41,42,44,0,112,113,114,54,54,54,42,44,43,41,0,114,115,112,55,55,55,42,37,38,42,0,116,117,118,56,56,56,42,42,41,37,0,118,119,116,57,57,57,42,38,40,44,0,120,121,122,58,58,58,42,44,42,38,0,122,123,120,59,59,59,42,40,39,43,0,124,125,126,60,60,60,42,43,44,40,0,126,127,124,61,61,61,42,39,37,41,0,128,129,130,62,62,62,42,41,43,39,0,130,131,128,63,63,63,42,45,46,48,0,132,133,135,64,64,64,42,48,47,45,0,135,134,132,65,65,65]

    };
    var jsonpyBase={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 8,
                "normals": 10,
                "colors": 0,
                "uvs": 20,
                "triangles": 10,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [-625.0,0.0,625.0,625.0,0.0,625.0,-625.0,0.0,-625.0,625.0,0.0,-625.0,-625.0,25.0,625.0,625.0,25.0,625.0,-625.0,25.0,-625.0,625.0,25.0,-625.0],

        "normals": [0.0,1.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,-1.0,0.0,0.0],

        "colors": [],

        "uvs": [[0.54594,0.109428,0.754524,0.109428,0.754524,0.318012,0.54594,0.318012,0.99,0.0446964,0.502533,0.0446964,0.502533,0.0349471,0.99,0.0349471,0.99,0.0945905,0.502533,0.0945905,0.502533,0.0848412,0.99,0.0848412,0.99,0.0197493,0.502533,0.0197493,0.502533,0.01,0.99,0.01,0.99,0.0696435,0.502533,0.0696435,0.502533,0.0598941,0.99,0.0598941]],

        "faces": [42,4,5,7,0,0,1,2,0,0,0,42,7,6,4,0,2,3,0,1,1,1,42,0,1,5,0,4,5,6,2,2,2,42,5,4,0,0,6,7,4,3,3,3,42,1,3,7,0,8,9,10,4,4,4,42,7,5,1,0,10,11,8,5,5,5,42,3,2,6,0,12,13,14,6,6,6,42,6,7,3,0,14,15,12,7,7,7,42,2,0,4,0,16,17,18,8,8,8,42,4,6,2,0,18,19,16,9,9,9]

    };
    var jsonpyGround={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 4,
                "normals": 2,
                "colors": 0,
                "uvs": 4,
                "triangles": 2,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [-625.0,0.0,625.0,625.0,0.0,625.0,-625.0,0.0,-625.0,625.0,0.0,-625.0],

        "normals": [0.0,1.0,0.0,0.0,1.0,0.0],

        "colors": [],

        "uvs": [[0.887194,0.222661,0.993404,0.222661,0.887194,0.328871,0.993404,0.328871]],

        "faces": [42,0,1,3,0,0,1,3,0,0,0,42,3,2,0,0,3,2,0,1,1,1]

    };
    var jsonpyF01={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 8,
                "normals": 12,
                "colors": 0,
                "uvs": 24,
                "triangles": 12,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [-500.0,25.0,500.0,500.0,25.0,500.0,500.0,25.0,-500.0,-500.0,25.0,-500.0,-404.082,216.835,404.082,404.082,216.835,404.082,404.082,216.835,-404.082,-404.082,216.835,-404.082],

        "normals": [0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0],

        "colors": [],

        "uvs": [[0.0623519,0.273292,0.018291,0.18517,0.477653,0.18517,0.433592,0.273292,0.0623519,0.273516,0.018291,0.185394,0.477653,0.185394,0.433592,0.273516,0.0623519,0.27345,0.018291,0.185328,0.477653,0.185328,0.433592,0.27345,0.0635159,0.273347,0.0195416,0.185399,0.478001,0.185399,0.434027,0.273347,0.477203,0.114952,0.477203,0.221499,0.370656,0.221499,0.370656,0.114952,0.01,0.244068,0.01,0.112459,0.141609,0.112459,0.141609,0.244068]],

        "faces": [42,1,5,4,0,14,15,12,0,0,0,42,4,0,1,0,12,13,14,1,1,1,42,2,6,5,0,2,3,0,2,2,2,42,5,1,2,0,0,1,2,3,3,3,42,3,7,6,0,10,11,8,4,4,4,42,6,2,3,0,8,9,10,5,5,5,42,0,4,7,0,6,7,4,6,6,6,42,7,3,0,0,4,5,6,7,7,7,42,3,2,1,0,21,22,23,8,8,8,42,1,0,3,0,23,20,21,9,9,9,42,6,7,4,0,17,18,19,10,10,10,42,4,5,6,0,19,16,17,11,11,11]

    };
    var jsonpyF02={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 8,
                "normals": 12,
                "colors": 0,
                "uvs": 24,
                "triangles": 12,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [-395.918,233.165,395.918,395.918,233.165,395.918,395.918,233.165,-395.918,-395.918,233.165,-395.918,-304.082,416.835,304.082,304.082,416.835,304.082,304.082,416.835,-304.082,-304.082,416.835,-304.082],

        "normals": [0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0],

        "colors": [],

        "uvs": [[0.900179,0.440181,0.586949,0.617923,0.900179,0.352675,0.587306,0.618194,0.533286,0.510597,0.875283,0.341118,0.875283,0.449612,0.587306,0.617569,0.766789,0.449612,0.587306,0.618819,0.766789,0.341118,0.533808,0.511198,0.533808,0.510574,0.987685,0.352675,0.533808,0.511823,0.987685,0.440181,0.995086,0.510574,0.941588,0.617569,0.995086,0.511198,0.941588,0.618194,0.995086,0.511823,0.941588,0.618819,0.995987,0.510597,0.942324,0.617923]],

        "faces": [42,1,5,4,0,22,23,1,0,0,0,42,4,0,1,0,1,4,22,1,1,1,42,2,6,5,0,16,17,7,2,2,2,42,5,1,2,0,7,12,16,3,3,3,42,3,7,6,0,20,21,9,4,4,4,42,6,2,3,0,9,14,20,5,5,5,42,0,4,7,0,18,19,3,6,6,6,42,7,3,0,0,3,11,18,7,7,7,42,3,2,1,0,2,13,15,8,8,8,42,1,0,3,0,15,0,2,9,9,9,42,6,7,4,0,6,8,10,10,10,10,42,4,5,6,0,10,5,6,11,11,11]

    };
    var jsonpyF03={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 8,
                "normals": 12,
                "colors": 0,
                "uvs": 24,
                "triangles": 12,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [-295.918,433.165,295.918,295.918,433.165,295.918,295.918,433.165,-295.918,-295.918,433.165,-295.918,-204.082,616.835,204.082,204.082,616.835,204.082,204.082,616.835,-204.082,-204.082,616.835,-204.082],

        "normals": [0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0],

        "colors": [],

        "uvs": [[0.262613,0.452613,0.102792,0.638207,0.262613,0.338485,0.103024,0.638281,0.0355312,0.503685,0.493125,0.339386,0.493125,0.449409,0.103024,0.637069,0.383102,0.449409,0.103024,0.638274,0.383102,0.339386,0.0357526,0.503738,0.0357526,0.502526,0.376741,0.338485,0.0357526,0.503731,0.376741,0.452613,0.469287,0.502526,0.402015,0.637069,0.469287,0.503738,0.402015,0.638281,0.469287,0.503731,0.402015,0.638274,0.468998,0.503685,0.401737,0.638207]],

        "faces": [42,1,5,4,0,22,23,1,0,0,0,42,4,0,1,0,1,4,22,1,1,1,42,2,6,5,0,16,17,7,2,2,2,42,5,1,2,0,7,12,16,3,3,3,42,3,7,6,0,20,21,9,4,4,4,42,6,2,3,0,9,14,20,5,5,5,42,0,4,7,0,18,19,3,6,6,6,42,7,3,0,0,3,11,18,7,7,7,42,3,2,1,0,2,13,15,8,8,8,42,1,0,3,0,15,0,2,9,9,9,42,6,7,4,0,6,8,10,10,10,10,42,4,5,6,0,10,5,6,11,11,11]

    };
    var jsonpyF04={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 8,
                "normals": 12,
                "colors": 0,
                "uvs": 24,
                "triangles": 12,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [-195.918,633.165,195.918,195.918,633.165,195.918,195.918,633.165,-195.918,-195.918,633.165,-195.918,-104.082,816.835,104.082,104.082,816.835,104.082,104.082,816.835,-104.082,-104.082,816.835,-104.082],

        "normals": [0.0,0.447214,0.894427,0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0],

        "colors": [],

        "uvs": [[0.875991,0.7839,0.643718,0.993679,0.875991,0.674711,0.64409,0.991576,0.541435,0.789114,0.862661,0.672174,0.862661,0.782522,0.64409,0.991529,0.752313,0.782522,0.64409,0.992906,0.752313,0.672174,0.541975,0.787346,0.541975,0.787299,0.98518,0.674711,0.541975,0.788676,0.98518,0.7839,0.977672,0.787299,0.875557,0.991529,0.977672,0.787346,0.875557,0.991576,0.977672,0.788676,0.875557,0.992906,0.977847,0.789114,0.875564,0.993679]],

        "faces": [42,1,5,4,0,22,23,1,0,0,0,42,4,0,1,0,1,4,22,1,1,1,42,2,6,5,0,16,17,7,2,2,2,42,5,1,2,0,7,12,16,3,3,3,42,3,7,6,0,20,21,9,4,4,4,42,6,2,3,0,9,14,20,5,5,5,42,0,4,7,0,18,19,3,6,6,6,42,7,3,0,0,3,11,18,7,7,7,42,3,2,1,0,2,13,15,8,8,8,42,1,0,3,0,15,0,2,9,9,9,42,6,7,4,0,6,8,10,10,10,10,42,4,5,6,0,10,5,6,11,11,11]

    };
    var jsonpyF05={

        "metadata":
            {
                "sourceFile": "Pyramid.max",
                "generatedBy": "3ds max ThreeJSExporter",
                "formatVersion": 3.1,
                "vertices": 5,
                "normals": 6,
                "colors": 0,
                "uvs": 16,
                "triangles": 6,
                "materials": 1
            },

        "materials": [
            {
                "DbgIndex" : 0,
                "DbgName"  : "caizhi",
                "colorDiffuse"  : [0.5882, 0.5882, 0.5882],
                "colorAmbient"  : [0.5882, 0.5882, 0.5882],
                "colorSpecular"  : [0.9000, 0.9000, 0.9000],
                "transparency"  : 1.0,
                "specularCoef"  : 10.0,
                "mapDiffuse"    : "TX0.jpg",
                "mapAlpha"    : "TX1.jpg",
                "vertexColors" : false
            }

        ],

        "vertices": [0.0,1025.0,0.0,-95.9175,833.165,95.9175,95.9175,833.165,95.9175,95.9175,833.165,-95.9175,-95.9175,833.165,-95.9175],

        "normals": [0.0,0.447214,0.894427,0.894427,0.447214,0.0,0.0,0.447214,-0.894427,-0.894427,0.447214,0.0,0.0,-1.0,0.0,0.0,-1.0,0.0],

        "colors": [],

        "uvs": [[0.32902,0.991824,0.0180836,0.99663,0.184571,0.702926,0.0180836,0.836223,0.329102,0.990234,0.185547,0.703125,0.329102,0.991211,0.17849,0.836223,0.329102,0.990234,0.17849,0.99663,0.185547,0.703125,0.472656,0.703125,0.472656,0.703125,0.185547,0.702148,0.472656,0.702148,0.473469,0.702926]],

        "faces": [42,0,1,2,0,0,2,15,0,0,0,42,0,2,3,0,6,10,11,1,1,1,42,0,3,4,0,8,13,14,2,2,2,42,0,4,1,0,4,5,12,3,3,3,42,4,3,2,0,3,7,9,4,4,4,42,2,1,4,0,9,1,3,5,5,5]

    };
    var loader = new THREE.JSONLoader();
    var pyobjBase=loader.parse(jsonpyBase,"../models/");
    var pyobjGround=loader.parse(jsonpyGround,"../models/");
    var pyobjF01=loader.parse(jsonpyF01,"../models/");
    var pyobjF02=loader.parse(jsonpyF02,"../models/");
    var pyobjF03=loader.parse(jsonpyF03,"../models/");
    var pyobjF04=loader.parse(jsonpyF04,"../models/");
    var pyobjF05=loader.parse(jsonpyF05,"../models/");
    // console.log(pyobj);
    var geometryBase=pyobjBase.geometry;
    var materialBase = pyobjBase.materials[0];
    var geometryGround=pyobjGround.geometry;
    var materialGround = pyobjGround.materials[0];
    var geometryF01=pyobjF01.geometry;
    var materialF01 = pyobjF01.materials[0];
    var geometryF02=pyobjF02.geometry;
    var materialF02 = pyobjF02.materials[0];
    var geometryF03=pyobjF03.geometry;
    var materialF03 = pyobjF03.materials[0];
    var geometryF04=pyobjF04.geometry;
    var materialF04 = pyobjF04.materials[0];
    var geometryF05=pyobjF05.geometry;
    var materialF05 = pyobjF05.materials[0];
    // material.morphTargets = true;
    var meshBase = new THREE.Mesh( geometryBase, materialBase );
    meshBase.name="meshBase";
    var meshGround = new THREE.Mesh( geometryGround, materialGround );
    meshGround.name="meshGround";
    var meshF01 = new THREE.Mesh( geometryF01, materialF01 );
    meshF01.name="F01";
    var meshF02 = new THREE.Mesh( geometryF02, materialF02 );
    meshF02.name="F02";
    var meshF03 = new THREE.Mesh( geometryF03, materialF03 );
    meshF03.name="F03";
    var meshF04 = new THREE.Mesh( geometryF04, materialF04 );
    meshF04.name="F04";
    var meshF05 = new THREE.Mesh( geometryF05, materialF05 );
    meshF05.name="F05";
    var group = new THREE.Group();
    scene.add(group);
    group.add(meshF01);
    group.add(meshF02);
    group.add(meshF03);
    group.add(meshF04);
    group.add(meshF05);
    group.add(meshBase);
    group.add(meshGround);

    group.position.y = -350;
    var cbarr=group.children.slice(0,5);
    /*动画转圈效果*/
    (function anime() {
        group.rotation.y += 0.005;//所有网格定位
        renderer.render(scene, camera);
        return requestAnimationFrame(anime);
    })();
    console.log(group);
    cbarr[0].scale.set(1.05,1,1.05);
    var inx = 0;
    /*定时轮播*/
    var jztInt=setInterval(function () {
        if (!window.isHover) {
            // console.log(inx);
            cbarr[inx].scale.set(1,1,1);
            inx++;
            if(inx==5){
                inx=0
            }
            cbarr[inx].scale.set(1.05,1,1.05);

        }
    }, 1000);
    $("#mainCvshd").on("mouseover",function () {
        clearInterval(jztInt);
    })
    $("#mainCvshd").on("mouseout",function () {
        for(var i=0;i<5;i++){
            // console.log(baseJzt[i]);
            cbarr[i].scale.set(1,1,1);
        }
        jztInt=setInterval(function () {
            if (!window.isHover) {
                // console.log(inx);
                cbarr[inx].scale.set(1,1,1);
                inx++;
                if(inx==5){
                    inx=0
                }
                cbarr[inx].scale.set(1.05,1,1.05);
            }
        }, 1000);
    })

    renderer.domElement.addEventListener("mousemove", mousemove);
    // renderer.domElement.addEventListener("mouseover", mouseover);
    // renderer.domElement.addEventListener("mouseout", mouseout);
    renderer.domElement.addEventListener("mousedown", mousedown,false);
    //光线投射器
    var raycaster = new THREE.RayCaster();
    var mouse = new THREE.Vector2();

    function mousemove(event) {
        mouse.x = ( (event.clientX-renderer.domElement.getBoundingClientRect().x) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( (event.clientY-renderer.domElement.getBoundingClientRect().y) / renderer.domElement.clientHeight ) * 2 + 1;
        // console.log(mouse.y);
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children[3].children);
        var baseJzt=scene.children[3].children.slice(0,5);
        if(intersects.length>0){
            var curObj=intersects[0].object;
            // console.log(curObj);
            for(var i=0;i<5;i++){
                // console.log(baseJzt[i]);
                baseJzt[i].scale.set(1,1,1);
            }
            curObj.scale.set(1.05,1,1.05);
        }

        /*mouse.x = (e.clientX - 12) / renderer.domElement.clientWidth * 2 - 1;
        mouse.y = -((e.clientY - 12) / renderer.domElement.clientHeight * 2) + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        var ndom_intersected, ndom_oriColor;
        if (intersects.length) {
            ndom_intersected = intersects[0].object;
            ndom_oriColor = ndom_intersected.material.color.getHex();
            ndom_intersected.material.color.set(0xffff00);
            /!*移入鼠标后放大效果*!/
            if (dom_intersected != ndom_intersected) {
                if (dom_intersected) dom_intersected.material.color.set(dom_oriColor);
                dom_intersected = ndom_intersected;
                dom_oriColor = ndom_oriColor;
            }
        } else {
            if (dom_intersected) {
                dom_intersected.material.color.set(dom_oriColor);
                dom_intersected = null;
            }
        }*/
    }

    function mousedown(event) {
        // console.log(renderer.domElement.getBoundingClientRect().x);
        mouse.x = ( (event.clientX-renderer.domElement.getBoundingClientRect().x) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( (event.clientY-renderer.domElement.getBoundingClientRect().y) / renderer.domElement.clientHeight ) * 2 + 1;
        // console.log(mouse);
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children[3].children);
        if (intersects.length) {
            var ndom_intersected = intersects[0].object.name;
            console.log(ndom_intersected);
            if(ndom_intersected=="F05"){
                if(intersects[0].uv.y>0.8116232615602323 && intersects[0].uv.y <0.8565726190220774){
                    console.log(ndom_intersected +"---01");
                }else if(intersects[0].uv.y>0.7557490494372121 && intersects[0].uv.y <0.8008805721822843){
                    console.log(ndom_intersected +"---02");
                }
            }else if(ndom_intersected=="F04"){
                if(intersects[0].uv.y>0.9333481198815632 && intersects[0].uv.y <0.9541918283231423){
                    console.log(ndom_intersected +"---01");
                }else if(intersects[0].uv.y>0.9052302769222472 && intersects[0].uv.y <0.9265937802687336){
                    console.log(ndom_intersected +"---02");
                }else if(intersects[0].uv.y>0.8778217649282317 && intersects[0].uv.y <0.8985244399210702){
                    console.log(ndom_intersected +"---03");
                }else if(intersects[0].uv.y>0.848521311404569 && intersects[0].uv.y <0.870400447964649){
                    console.log(ndom_intersected +"---04");
                }else if(intersects[0].uv.y>0.8219060897016384 && intersects[0].uv.y <0.8416986477382579){
                    console.log(ndom_intersected +"---05");
                }
            }else if(ndom_intersected=="F03"){
                if(intersects[0].uv.y>0.5716267130040921 && intersects[0].uv.y <0.5874431182308251){
                    console.log(ndom_intersected +"---01");
                }else if(intersects[0].uv.y>0.550310440889243 && intersects[0].uv.y <0.5668648421247229){
                    console.log(ndom_intersected +"---02");
                }
            }else if(ndom_intersected=="F02"){
                if(intersects[0].uv.y>0.5701423025088226 && intersects[0].uv.y <0.584323540001351){
                    console.log(ndom_intersected +"---01");
                }else if(intersects[0].uv.y>0.5511979267353508 && intersects[0].uv.y <0.5657971701178586){
                    console.log(ndom_intersected +"---02");
                }
            }else if(ndom_intersected=="F01"){
                console.log(ndom_intersected +"---01");
            }
        }
    }

    function mouseover(event) {
        mouse.x = ( (event.clientX-renderer.domElement.getBoundingClientRect().x) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( (event.clientY-renderer.domElement.getBoundingClientRect().y) / renderer.domElement.clientHeight ) * 2 + 1;
        console.log(mouse.y);
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children[3].children);
        console.log(intersects);
        var curObj=intersects[0].object;
        for(var i=0;i<5;i++){
            intersects[i].scale.set(1,1,1);
        }
        curObj.scale.set(1.2,1.2,1.2);
    }

    function mouseout(e) {
        window.isHover = false;
    }
};


/**
 * 金字塔设置初始颜色;
 * @param 颜色个数;
 * @returns [];
 */
function getRenderColoe(ind) {
    var renderColors = [0x00bb5c, 0x00c9b4, 0x009bdc, 0x006ce5, 0x1010ef];
    if (ind < renderColors.length) return renderColors[ind];
    return renderColors[ind % renderColors.length];
}
/**
 * 金字塔颜色轮播;
 * @param;
 * @returns *;
 */
function loopShadow(cbarr, arr) {

    cbarr[arr[0]].material.opacity=1;
        // cbarr[arr[0]].material.color.set(0xffffff);
    // for (var i = 0; i < arr.length; i++) {
    //     console.log(cbarr[arr[i]]);
    //     cbarr[arr[i]].material.color.getHex();
    //     cbarr[arr[i]].material.color.set(0xffffff);
    // }
}
/**
 * 数组方法拓展函数,两个数组取之间的差集;
 * @param;
 * @returns [];
 */
Array.prototype.minus = function (arr) {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 1;
    }
    for (var j = 0; j < this.length; j++) {
        if (!obj[this[j]]) {
            obj[this[j]] = 1;
            result.push(this[j]);
        }
    }
    return result;
};