/*
* @Author: Marte
* @Date:   2018-06-07 15:16:37
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-07 15:21:42
*/

'use strict';
function highlightrows(){
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i = 0; i < rows.length; i++){
        rows[i].onmouseover = function() {
            this.style.fontWeight = "bold";
           }
        rows[i].onmouseout = function(){
            this.style.fontWeight = "normal"
        }
    }
}

addLoadEvent(highlightrows);