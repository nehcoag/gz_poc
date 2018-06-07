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
    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {
    };
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('../models/');
    mtlLoader.load('Pyramid.mtl', function (materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('../models/');
        objLoader.load('Pyramid.obj', function (object) {
            console.log(object);
            var cbarr=object.children.slice(0,5);
            object.position.y = -350;
            scene.add(object);
            /*动画转圈效果*/
            (function anime() {
                object.rotation.y += 0.005;//所有网格定位
                renderer.render(scene, camera);
                return requestAnimationFrame(anime);
            })();
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
        }, onProgress, onError);

    });

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
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children[3].children);
        if (intersects.length) {
            // console.log(intersects[0]);
            var ndom_intersected = intersects[0].object.name;
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