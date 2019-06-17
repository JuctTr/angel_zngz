var map = new BMap.Map("container");
map.centerAndZoom(new BMap.Point(113.38, 23.135), 17);
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
map.addControl(new BMap.NavigationControl()); //PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方
map.addControl(new BMap.ScaleControl()); //	默认位于地图左下方，显示地图的比例关系
map.addControl(new BMap.OverviewMapControl()); //默认位于地图右下方，是一个可折叠的缩略地图
map.addControl(new BMap.MapTypeControl()); //地图类型,默认位于地图右上方
map.setCurrentCity("广州"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
// 1、定义一个自定义控件的构造函数并继承Control
// 定义一个控件类，即function    
function ZoomControl() {
    // 设置默认停靠位置和偏移量  
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset = new BMap.Size(100, 10);
}
// 通过JavaScript的prototype属性继承于BMap.Control   
ZoomControl.prototype = new BMap.Control();

// 自定义控件必须实现initialize方法，并且将控件的DOM元素返回   
// 在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中   
ZoomControl.prototype.initialize = function (map) {
    // 2、初始化自定义控件
    // 创建一个DOM元素   
    var div = document.createElement("div");
    // 添加文字说明    
    div.appendChild(document.createTextNode("放大2级"));
    // 设置样式    
    div.style.cursor = "pointer";
    div.style.border = "1px solid gray";
    div.style.backgroundColor = "white";
    div.style.borderRadius = "5px";
    div.style.boxShadow = "0 5px 4px red";
    // 绑定事件，点击一次放大两级    
    div.onclick = function (e) {
        map.zoomTo(map.getZoom() + 2);
    }
    // 添加DOM元素到地图中   
    map.getContainer().appendChild(div);
    // 将DOM元素返回  
    return div;
}

// 创建控件实例    
var myZoomCtrl = new ZoomControl();
// 添加到地图当中    
map.addControl(myZoomCtrl);


//封装一个代替getElementById()的方法
// function byId(id) {
//     return typeof (id) === "string" ? document.getElementById(id) : id;
// }
// 用经纬度设置地图中心点
// function theLocation() {
//     if (byId("longitude").value != "" && byId("latitude").value != "") {
//         map.clearOverlays();
//         var new_point = new BMap.Point(byId("longitude").value, byId("latitude").value);
//         var marker = new BMap.Marker(new_point); // 创建标注
//         map.addOverlay(marker); // 将标注添加到地图中
//         map.panTo(new_point);
//     }
// }