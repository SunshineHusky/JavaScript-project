/*
* @Author: Marte
* @Date:   2018-05-28 19:13:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-28 19:52:33
*/

'use strict';
function displayAccessKeys(){
    if(!document.getElementsByTagName|| !document.createElement|| !document.createTextNode) return false;
    var links = document.getElementsByTagName("a");
    var akeys = new Array;
    for(var i = 0; i < links.length;i++){
        var current_link = links[i];
        if(!current_link.getAttribute("accesskey")) continue;
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
        }
        var list = document.createElement("ul");
        for(key in akeys){
            var text = akeys[key];
            var str = key + " : "+text;
            var item = document.createElement("li");
            var item_text = document.createTextNode(str);
            item.appendChild(item_text);
            list.appendChild(item);
    }
    var header = document.createElement("h3");
    var header_text = document.createTextNode("AccessKey");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);