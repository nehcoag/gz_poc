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
    var layerNum = 5;//层数
    var layerHeight = 45;//层高
    var layerGaps = 5;//间隔
    var areaNum = 4;//面数
    var VIEW_ANGLE = 20,//25
        ASPECT = WIDTH / HEIGHT,
        NEAR = 0.1,
        FAR = 10000;
    /* 初始化3D面板 */
    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
    renderer.setSize(WIDTH, HEIGHT);
    document.getElementById(dom).appendChild(renderer.domElement);
    /* 灯光 */
    var ambientLight = new THREE.AmbientLight("#050505");
    scene.add(ambientLight);
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 500, 400);
    spotLight.castShadow = false;
    scene.add(spotLight);
    /*相机*/
    var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    camera.position.set(0, 100, 1000);
    // camera.rotation.x = -0.2;//-0.2
    scene.add(camera);
    /*鼠标控制*/
    var controls = new THREE.OrbitControls(camera);
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = 6.28;
    controls.minDistance = 10;
    controls.maxDistance = 1000;
    // camera.position.set( 0, 500, 1000 );
    controls.addEventListener('change', render);
    /*渲染*/
    function render() {
        renderer.render(scene, camera);
    }
    /* 显示对象 */
    var cbarr = [];
    var edges = [];
    for (var i = 0; i < layerNum; i++) {
        if(i == 0 || i==1){

        }
        var oriy = i * (-layerHeight - layerGaps);
        var meshPositon = oriy + 130;
        var lenxa = Math.abs(oriy) * 0.7;
        var lenxb = Math.abs(-oriy + layerHeight) * 0.7;
        //圆柱体模型
        var cylinder = new THREE.CylinderGeometry(lenxa, lenxb, layerHeight, areaNum, 1, false, 0, Math.PI * 2);
        // console.log(lenxb)
        var materials = [];
        var material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('../img/'+(i+1)+'jinzita.png'),
            transparent: false,
            opacity: 1
        });
        var mesh = new THREE.Mesh(cylinder, material);
        /*白色网格*/
        var edge = new THREE.EdgesHelper(mesh, 0xffffff);
        edge.position.set(0, meshPositon, 0);//单个网格定位
        edge.rotation.set(0, -8, 0);//单个网格旋转
        scene.add(edge);
        edges.push(edge);//将单个网格PUSH到白色网格数组
        mesh.position.set(0, meshPositon, 0);
        mesh.rotation.set(0, -8, 0);
        mesh.castShadow = true;
        scene.add(mesh);
        cbarr.push(mesh);
    }
    /*动画转圈效果*/
    if (cbarr.length > 0) {
        (function anime() {
            for (var j = 0; j < cbarr.length; j++) {
                cbarr[j].rotation.y += 0.005;
                edges[j].rotation.y += 0.005;//所有网格定位
            }
            renderer.render(scene, camera);
            return requestAnimationFrame(anime);
        })()
    }
    renderer.domElement.addEventListener("mousemove", mousemove);
    renderer.domElement.addEventListener("mouseover", mouseover);
    renderer.domElement.addEventListener("mouseout", mouseout);
    renderer.domElement.addEventListener("mousedown", mousedown);
    //光线投射器
    var raycaster = new THREE.RayCaster();
    var mouse = new THREE.Vector2();

    function mousemove(e) {
        mouse.x = (e.clientX - 12) / renderer.domElement.clientWidth * 2 - 1;
        mouse.y = -((e.clientY - 12) / renderer.domElement.clientHeight * 2) + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        var ndom_intersected, ndom_oriColor;
        if (intersects.length) {
            ndom_intersected = intersects[0].object;
            ndom_oriColor = ndom_intersected.material.color.getHex();
            ndom_intersected.material.color.set(0xffff00);
            /*移入鼠标后放大效果*/
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
        }
    }

    function mousedown(e) {
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length) {
            var ndom_intersected = intersects[0].object;
            console.log(ndom_intersected)
            if (ndom_intersected.id == 12) {
                console.log("1")
            } else if (ndom_intersected.id == 14) {
                console.log("2")
            }
        }
    }

    function mouseover(e) {
        window.isHover = true;
        loopShadow(cbarr, [0, 1, 2, 3, 4]);
    }

    function mouseout(e) {
        window.isHover = false;
    }

    var inx = 4;
    /*定时轮播*/
    setInterval(function () {
        if (!window.isHover) {
            /*数组取差集*/
            var diffId = [0, 1, 2, 3, 4].minus([inx]);
            console.log(cbarr);
            loopShadow(cbarr, diffId);
            if (inx < 0) {
                inx = 4;
            }
            if (inx >= 0) {
                cbarr[inx].material.color.getHex();
                cbarr[inx].material.color.set(0xffff00);
            }
            inx--;
        }
    }, 1000);
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
    for (var i = 0; i < arr.length; i++) {
        console.log(cbarr[arr[i]]);
        cbarr[arr[i]].material.color.getHex();
        cbarr[arr[i]].material.color.set(0xffffff);
    }
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