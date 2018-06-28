/*
* @Author: Marte
* @Date:   2018-05-21 17:18:16
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-21 17:18:26
*/

'use strict';
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload()
            func()
        }
    }
}