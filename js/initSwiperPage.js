var log = console.log.bind(console);
/*js动态生成模块，以便放到不同的位置中去*/
var module_1 = `<div class="swpItem swpItem_1">
                <!--滑动内容-->
                <aside class="swpCon swpCon_1">
                    <!--第一模块标题-->
                    <div class="titleDiv">
                        <span>业务统计</span>
                    </div>
                    <!--日历翻页效果-->
                    <article class="ledDiv">
                        <aside class="ledContain">
                            <div>
                                <span>累计报关单数(票)</span>
                                <span class="counter">78359</span>
                            </div>
                            <div>
                                <span>累计货值(万美元)</span>
                                <span class="counter">223245</span>
                            </div>
                            <div>
                                <span>累计税款(万元)</span>
                                <span class="counter">47245</span>
                            </div>
                            <div>
                                <span>当日报关单数(票)</span>
                                <span class="counter">2824</span>
                            </div>
                            <div>
                                <span>当日货值(万美元)</span>
                                <span class="counter">47965</span>
                            </div>
                            <div>
                                <span>当日税款(万元)</span>
                                <span class="counter">20071</span>
                            </div>
                        </aside>
                    </article>
                    <!--模块一中部柱形图-->
                    <article class="swpEBox swpCon_1EMid">
                        <p>量值税(年月)</p>
                        <div id="swp_1MidE">

                        </div>
                    </article>
                    <!--模块一底部柱形图-->
                    <article class="swpEBox swpCon_1EBtm">
                        <p>量值税(章节)</p>
                        <div id="swp_1BtmE">

                        </div>
                    </article>
                </aside>
            </div>`;
var module_2 = `<div class="swpItem swpItem_2">
                <aside class="swpCon swpCon_2">
                    <!--第二模块标题-->
                    <div class="titleDiv">
                        <span>贸易结构</span>
                    </div>
                    <!--三个3D饼状图-->
                    <article class="pieThreeDiv">
                        <article class="pieThreeContain">
                            <!--饼图的标题，highChart会覆盖标签，所以要写到图表的外层-->
                            <aside class="pieTitleBox">
                                <li>报关单位</li>
                                <li>货值</li>
                                <li>税款</li>
                            </aside>
                            <!--饼图图表容器-->
                            <div id="pieEct_1"></div>
                            <div id="pieEct_2"></div>
                            <div id="pieEct_3"></div>
                        </article>
                    </article>
                    <!--模块二中部环形图-->
                    <article class="swpEBox">
                        <p>通关模式</p>
                        <!--环形图表容器-->
                        <div class="annularThreeContain">
                            <div id="annularEct_1"></div>
                            <div id="annularEct_2"></div>
                            <div id="annularEct_3"></div>
                        </div>
                    </article>
                    <!--模块二底部柱形图-->
                    <article class="swpEBox">
                        <p>运输方式</p>
                        <div class="radiusThreeContain">
                            <div id="radiusEct_1"></div>
                            <div id="radiusEct_2"></div>
                            <div id="radiusEct_3"></div>
                        </div>
                    </article>
                </aside>
            </div>`;
var module_3 = `<div class="swpItem swpItem_3">
                <!--第三模块标题-->
                <div class="titleDiv">
                    <span>风险防控</span>
                </div>
                <!--第三模块组合图-->
                <article class="foldEBox paramContain">
                    <p>参数</p>
                    <div id="swp_3TopE"></div>
                </article>
                <!--第三模块折线图-->
                <article class="foldEBox directiveContain">
                    <p>指令</p>
                    <div id="swp_3MidE"></div>
                </article>
                <!--第三模块标签页-->
                <article class="foldEBox tabContain">
                    <p>模型</p>
                    <div class="tabDiv">
                        <ul class="tabUl tabUlLeft">
                            <li>税收风险只能子万山上看见当升科技</li>
                            <li>税收风险只能子万山上看见当升科技</li>
                            <li>税收风险只能子万山上看见当升科技</li>
                            <li>税收风险只能子万山上看见当升科技</li>
                        </ul>
                        <ul class="tabUl tabUlRight">
                            <li>税收风险只能子万山上看见当升科技</li>
                            <li>税收风险只能子万山上看见当升科技</li>
                            <li>税收风险只能子万山上看见当升科技</li>
                            <li>税收风险只能子万山上看见当升科技</li>
                            <li>税收风险只能子万山上看见当升科技</li>
                        </ul>
                    </div>
                </article>
            </div>`;
var module_4 = `<div class="swpItem swpItem_4">
                <aside class="swpCon swpCon_4">
                    <!--第四模块标题-->
                    <div class="titleDiv">
                        <span>行业分析</span>
                    </div>
                    <!--第四模块六个折线图-->
                    <section class="foldSixContain">
                        <article class="foldSix">
                            <p>矿产品</p>
                            <div id="swp_4E_1"></div>
                        </article>
                        <article class="foldSix">
                            <p>化工品</p>
                            <div id="swp_4E_2"></div>
                        </article>
                        <article class="foldSix">
                            <p>塑料 橡胶及其制品</p>
                            <div id="swp_4E_3"></div>
                        </article>
                        <article class="foldSix">
                            <p>石料 陶瓷 玻璃及其制品</p>
                            <div id="swp_4E_4"></div>
                        </article>
                        <article class="foldSix">
                            <p>珍珠 宝石 贵金属及其制品</p>
                            <div id="swp_4E_5"></div>
                        </article>
                        <article class="foldSix">
                            <p>贱金属及其制品</p>
                            <div id="swp_4E_6"></div>
                        </article>
                    </section>
                </aside>
            </div>`;
var module_5 = ` <div class="swpItem ">
                <aside class="swpCon ">
                    <div class="titleDiv">
                        <span>第五模块</span>
                    </div>
                </aside>
            </div>`;
var module_6 = ` <div class="swpItem ">
                <aside class="swpCon ">
                    <div class="titleDiv">
                        <span>第六模块</span>
                    </div>
                </aside>
            </div>`;
/*所有模块名称,动态生成配置框*/
var settingName = ['业务统计','贸易结构','风险防控','行业分析','第五模块','第六模块'];
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
    var pageArr = [1, 2, 3, 4, 5, 6];
}else{
    var pageArr = JSON.parse(moduleSetting);
}
log(pageArr)
/*页面上rev的数量，即最多放几个，如果这里要更改的话，index.html里要对应几个类名为rev的节点*/
/*将模块放到轮播块中*/
pageArr.forEach(function (obj, inx) {
    $(".Con_" + inx).append(eval("module_" + obj));
});
/*页面可滑动*/
var all = pageArr.length;
$("#slider-panels-previous").on("click", function () {
    var last;
    for (var i = (all - 1); i > 0; i--) {
        if (i == (all - 1)) {
            last = $(".Con_" + i).css("left");
        }
        var after = $(".Con_" + (i - 1)).css("left");
        $(".Con_" + i).css("left", after);
    }
    $(".Con_" + 0).css("left", last);
});
$("#slider-panels-next").on("click", function () {
    var first;
    $(".Con").hide();
    for (var i = 0; i < all; i++) {
        if (i == 0) {
            first = $(".Con_" + i).css("left");
        }
        var before = $(".Con_" + (i + 1)).css("left");
        $(".Con_" + i).css("left", before);
    }
    $(".Con_" + (all - 1)).css("left", first);
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