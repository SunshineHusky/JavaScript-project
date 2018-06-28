/*
* @Author: Marte
* @Date:   2018-06-07 15:52:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-07 16:12:03
*/

'use strict';
function addclass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        var newClassName = element.className;
        newClassName+="";
        newClassName+="value";
        element.className = newClassName;
    }
}
addLoadEvent(addclass);