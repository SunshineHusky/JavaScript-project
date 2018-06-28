/*
* @Author: Marte
* @Date:   2018-05-29 10:17:34
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-07 16:15:25
*/

'use strict';
function styleHeaderSibiling(tag,theclass){
    if(!document.getElementsByTagName) return false;
    var Header = document.getElementsByTagName(tag);
    for(var i = 0; i < Header.length; i++){
        var elem = getNextElement(Header[i].nextSibling);
        addclass(elem,theclass);
    }
}

function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

addLoadEvent(styleHeaderSibiling);