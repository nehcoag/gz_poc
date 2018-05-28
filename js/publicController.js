var log = console.log.bind(console);
/*控制根节点字体大小*/
// document.documentElement.style.fontSize =document.documentElement.clientWidth/1366*10 +"px";
/*固定屏幕比例为32:9*/
sizeScreen(32,9);
/*右上角显示系统时间*/
showCurrentTime("currentTime");
/**
 * 设置屏幕显示比例,并且背景图兼容当前比例;
 * @param ratioWidth:宽占的比例;ratioHeight:高占的比例;
 * @returns {*}
 */
function sizeScreen(ratioWidth, ratioHeight) {
    var docHeight = document.documentElement.clientHeight;
    // var docWidth = document.documentElement.clientWidth;
    var docWidth = docHeight / ratioHeight * ratioWidth;
    document.getElementsByTagName('body')[0].style.width = docWidth + "px";
    document.getElementsByTagName('body')[0].style.backgroundSize = docWidth + 'px ' + docHeight + "px";
}
/**
 * 页面实时显示当前时间;
 * @param dom:所显示的DOM节点的ID值;
 * @returns {*}
 */
function showCurrentTime(dom) {
    var now = new Date();
    // 获取到时间的详细数值
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var h = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    // 拼一个显示用的字符串
    var str = y + "-" + adjustTime(m) + "-" + adjustTime(d);
    str += "&nbsp;&nbsp;" + adjustTime(h) + ":" + adjustTime(min) + ":" + adjustTime(sec);
    // 显示到页面上
    var span = document.getElementById(dom);
    span.innerHTML = str;
    setTimeout(function () {
        showCurrentTime("currentTime")
    }, 1000);
}
/**
 * 设置时间格式,如果小于10,在数值前面补一个零;
 * @param v:需要格式化的数值;
 * @returns 'v';
 */
function adjustTime(v) {
    if (v < 10) {
        return "0" + v;
    }
    return "" + v;
};
/**
 * 在echarts中设置字体大小;
 * @param v:需要格式化的数值;
 * @returns 'v';
 */
function setFontzie(size){
    return parseInt(document.documentElement.clientWidth/1366*size);
}