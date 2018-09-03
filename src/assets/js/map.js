function map_do(){
    initMap();//创建和初始化地图
    createSearch();
    createAutocomlete();
    $("#s_p_search_btn").click(function () {
        searchPlace($("#searchplace").val());
    });
     // map.addEventListener("click", function(e){//地图单击事件
     //     $(".jwd").val(e.point.lng + ", " + e.point.lat);
     // });
};
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
}
//创建地图函数：
function createMap(){
    var map = new BMap.Map("BaiduDitu");//在百度地图容器中创建一个地图
    map.centerAndZoom('深圳',11);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
    //经纬度搜索
    var localSearch = new BMap.LocalSearch(map);
    window.localSearch = localSearch;
}
//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}
function createSearch() {
    var map = window.map;
    var local = new BMap.LocalSearch(map,
        {
            renderOptions: { map: map, panel: "searchlist" }
        });
    window.local = local;
}
//搜索
function searchPlace(value) {
    window.local.search(value);

    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0);
        if(poi){
            $(".jwd").val(poi.point.lng + "," + poi.point.lat);
        }
        else{
            $(".jwd").val("未获取到经纬度");
        }

    });
    localSearch.search(value);

}
function createAutocomlete() {
    var map = window.map;
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
            "input": "searchplace",
            "location": map
        });
    ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        var addr =_value.business+ _value.province + _value.city + _value.district + _value.street + _value.streetNumber ;
        searchPlace(addr);
    });
}


function doLocate(jd, wd, place_title, place_detail) {//根据经纬度定位

    // 百度地图API功能

    var map = new BMap.Map("allmap");
    //设定地图的中心点和坐标并将地图显示在地图容器中
    // 创建Map实例

    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图

    //map.centerAndZoom(new BMap.Point(121.399696, 31.045601), 15);

    var point = new BMap.Point(jd, wd);
    var marker = new BMap.Marker(point);
    var gc = new BMap.Geocoder();
    var dzxz;
    gc.getLocation(point, function(rs){
    var addComp = rs.addressComponents;
    dzxz = "<p>地址：" + addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber + "号街。</p><p>详细地址："+place_detail+"</p>";
        var searchInfoWindow = null;
        searchInfoWindow = new BMapLib.SearchInfoWindow(map, dzxz, {
                title  : place_title,      //标题
                width  : 290,             //宽度
                height : 0,              //高度
                panel  : "panel",         //检索结果面板
                enableAutoPan : true,     //自动平移
                searchTypes   :[
                    // BMAPLIB_TAB_SEARCH,   //周边检索
                    // BMAPLIB_TAB_TO_HERE,  //到这里去
                    // BMAPLIB_TAB_FROM_HERE //从这里出发
                ]
            });
            searchInfoWindow.open(marker);
            
    });
    map.addOverlay(marker);


    map.centerAndZoom(point, 15);
    // 初始化地图,设置中心点坐标和地图级别。
}