/*
* @Author: Marte
* @Date:   2018-06-09 09:45:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-09 11:24:17
*/

'use strict';
function prepareSlideshow(){
    //确保浏览器支持DOM方法
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var sildeshow = document.createElement("div");
    sildeshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.jpg");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    sildeshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(sildeshow,list);
    //确保元素存在
    if(!document.getElementById("linklist")) return false;
    if(!document.getElementById("preview")) return false;
    //为图片应用样式
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    //取得列表所有链接
    var list = document.getElementById("linklist");
    var links = document.getElementsByTagName("a");
    //为onmouseover添加动画效果
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-200,0,10)
    }
    links[2].onmouseover = function(){
        moveElement("preview",-300,0,10)
    }
}

addLoadEvent(prepareSlideshow);