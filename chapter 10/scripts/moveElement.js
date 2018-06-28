/*
* @Author: Marte
* @Date:   2018-06-08 09:56:27
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-09 11:08:55
*/

'use strict';
function moveElement(elementID,final_x,final_y,interval){
    //检测DOM元素是否存在
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    //获取DOM元素
    var elem = document.getElementById(elementID);
    //清除上一次移动属性值
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    //获取元素初始位置
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    //判断移动或者终止
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if(xpos > final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if(ypos < final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if(ypos > final_y){
        dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}