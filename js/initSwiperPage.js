var log = console.log.bind(console);
/**
 * 数组取差集;
 */
Array.prototype.minus = function (arr) {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 1;
    }
    for (var j = 0; j < this.length; j++) {
        if (!obj[this[j]])
        {
            obj[this[j]] = 1;
            result.push(this[j]);
        }
    }
    return result;
};
/*所有模块名称,动态生成配置框*/
var settingName = ['业务统计','贸易结构','风险防控','行业分析','第五模块','第六模块','第七模块'];
$("#favoriteBox>article").remove();
settingName.forEach(function(obj,inx){
    $("#favoriteBox").append(`<article data-thisindex = ${inx+1}>
                <label>${obj}：</label>
                <input type="number" min='1' oninput="if(value.length>1)value=value.slice(0,1)" max=${settingName.length}>
            </article>`)
});
/*如果localStorage中没有配置，默认模块全部显示*/
var moduleSetting = localStorage.getItem('moduleArr');
if(!moduleSetting){
    var pageArr = [1, 2, 3, 4, 5, 6, 7];
}else{
    var pageArr = JSON.parse(moduleSetting);
}
/*将需要显示的模块与全部模块，放在一起取差集，得到不需要显示的模块*/
var allArr = [1,2,3,4,5,6,7];
var minusArr = allArr.minus(pageArr);
log(pageArr)
/*页面可滑动*/
var pageArrLength = pageArr.length;
var position = [0,16.95,66.6,83.6,101.6,118.6,135];
/*设置需要显示的模块的位置*/
pageArr.forEach(function(obj,inx){
    $(".rev_"+obj).css('left',position[inx]+"%")
});
/*讲未配置的模块隐藏*/
minusArr.forEach(function(obj,inx){
    $(".rev_"+obj).css("display","none");
});
/*向后滑动*/
$("#slider-panels-next").on("click", function () {
    //向右滑动时，如果已经是最后一个，禁止再次向右滑动（客户要求轮播是线形而非环形）
    if($(".Con_"+pageArr[pageArrLength-4]).css("left")=="0px"){
        return
    }
    var last;
    for(var i = pageArrLength;i >0;i--){
        if(i == pageArrLength){
            last = $(".rev_"+ pageArr[i-1]).css("left");
        }
        var after = $(".rev_"+pageArr[i-1]).css("left");
        $(".rev_"+ pageArr[i]).css("left",after);
    }
    $(".rev_"+ pageArr[0]).css("left",last);
});
/*向前滑动*/
$("#slider-panels-previous").on("click", function () {
    //向左滑动时，如果已经是第一个，禁止再次向左滑动（客户要求轮播是线形而非环形）
    if($(".Con_"+pageArr[0]).css("left")=="0px"){
        return;
    }
    var first;
    for(var i = 0;i < pageArrLength ;i++){
        if(i == 0){
            first = $(".rev_"+ pageArr[i]).css("left");
        }
        var before = $(".rev_"+pageArr[i+1]).css("left");
        $(".rev_"+ pageArr[i] ).css("left",before);
    }
    $(".rev_"+ pageArr[pageArrLength-1]).css("left",first);
});
/*配置按钮绑定事件*/
$("#settingSpan").unbind('click').on("click",function(e){
    e.stopPropagation();
    document.getElementById("supplyMenu").style.display = "block";
    document.getElementById("supplyMenu").style.left = e.clientX+"px";
    document.getElementById("supplyMenu").style.top = e.clientY+"px";
});
/*点击页面其他位置，配置框消失*/
document.onclick = function (e) {
    if ($("#supplyMenu").length > 0 && !$(e.target).isChildAndSelfOf("#supplyMenu")) {
        document.getElementById("supplyMenu").style.display = "none";
    }
};
/*配置框确认按钮绑定事件*/
$("#favoriteSubmit").on("click",function(){
    var userSetting = [];
    $("#favoriteBox").find("input").not('[type = button]').each(function(inx,obj){
        if($(this).val()){
            userSetting.push({
                'index':$(this).parents("article").data("thisindex"),
                'value':$(this).val()
            })
        };
        userSetting.sort(sortObj)
    });
    var saveModule = [];
    userSetting.forEach(function(obj,inx){
        saveModule.push(obj.index)
    });
    localStorage.setItem('moduleArr', JSON.stringify(saveModule));
    location.reload();
});
/**
 * jq追加判断点击是不是本身或者子元素的方法;
 */
jQuery.fn.isChildAndSelfOf = function (b) {
    return (this.closest(b).length > 0);
};
/**
 * 数组对象排序;
 */
function sortObj(a,b){
    return a.value-b.value
}
