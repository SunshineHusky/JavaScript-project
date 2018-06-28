/*
* @Author: Marte
* @Date:   2018-05-28 18:30:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-28 19:05:53
*/

'use strict';
 function displayCitaions(){
    if(!document.getElementsByTagName|| !document.createElement|| !document.createTextNode ) return false;
    var quotes = document.getElementsByTagName("blockquote");
    for(var i = 0; i < quotes.length; i++){
        if(!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quotesChildren = quotes[i].getElementsByTagName("*");
        var elem = quotesChildren[quotesChildren.length -1];
    }
    var link = document.createElement("a");
    var link_text = document.createTextNode("source");
    link.appendChild(link_text);
    link.setAttribute("href",url);
    var superscript = document.createElement("p");
    superscript.appendChild(link);
    elem.appendChild(superscript);
 }

 addLoadEvent(displayCitaions);