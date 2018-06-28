
function displayAbbreviations(){
    if(!document.getElementsByTagName|| !document.createElement|| !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历abbr元素,并创建一个数组使简写与全称一一对应
    for(var i = 0; i < abbreviations.length; i++){
        var current_abbr = abbreviations[i];
        //针对IE6 abbr统计bug语句
        if(current_abbr.childNodes.length < 0) continue;
        var definition = current_abbr.getAttribute("title");//全称
        var key = current_abbr.lastChild.nodeValue;//简写
        defs[key] = definition;//W3C元素的值为 World Wide Web Consortium
    }
    //创建列表
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
        if(dlist.childNodes.length < 0) return false;
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

    addLoadEvent(displayAbbreviations);