/*
* @Author: Marte
* @Date:   2018-06-09 11:20:07
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-09 11:20:11
*/

'use strict';
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextsibling);
    }
}