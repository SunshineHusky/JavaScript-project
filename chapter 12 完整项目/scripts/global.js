/*
* @Author: Marte
* @Date:   2018-06-13 11:55:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-13 11:56:37
*/

'use strict';
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload()
            func()
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextsibling);
    }
}

function addclass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName = element.className;
        newClassName += "";
        newClassName += "value";
        element.className = newClassName;
    }
}

function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for (var i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute("href");
        //检测当前URL与列表内URL是否相同
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
            //给页面添加id位当前className的小写
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", linktext);
        }
    }
}
//动画函数
function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil((ypos - final_y) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";//注意单引号位置
    elem.movement = setTimeout(repeat, interval);
}

function prepareSlideshow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("intro")) return false;
    var intro = document.getElementById("intro");
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var frame = document.createElement("img");
    frame.setAttribute("src", "images/frame.gif");
    frame.setAttribute("alt", "");
    frame.setAttribute("id", "frame");
    slideshow.appendChild(frame);
    var preview = document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("alt", "a glimpse of what await you");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);
    var links = document.getElementsByTagName("a");
    var destination;
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            destination = this.getAttribute("href");
            if (destination.indexOf("index.html") != -1) {
                moveElement("preview", 0, 0, 5);
            }
            if (destination.indexOf("about.html") != -1) {
                moveElement("preview", -150, 0, 5);
            }
            if (destination.indexOf("photos.html") != -1) {
                moveElement("preview", -300, 0, 5);
            }
            if (destination.indexOf("live.html") != -1) {
                moveElement("preview", -450, 0, 5);
            }
            if (destination.indexOf("contact.html") != -1) {
                moveElement("preview", -600, 0, 5);
            }
        }
    }

}
//判断菜单是否隐藏函数
function showSection(id) {
    var section = document.getElementsByTagName("section");
    for (var i = 0; i < section.length; i++) {
        if (section[i].getAttribute("id") != id) {
            section[i].style.display = "none";
        } else {
            section[i].style.display = "block";
        }
    }
}
//动作函数
function prepareInternalnav() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var article = document.getElementsByTagName("article");
    if (article.length == 0) return false;
    var navs = article[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var sectionID = links[i].getAttribute("href").split("#")[1];
        //如果sectionID不存在，则执行下一次循环
        if (!document.getElementById(sectionID)) continue;
        document.getElementById(sectionID).style.display = "none";
        links[i].destination = sectionID;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }

    }
}
//图片库函数
function showPic(whichpic) {
    //检测浏览器是否含ID元素
    if (!document.getElementById("placeholder")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    if (document.getElementById("description")) {
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;

        }
    }
    return true;
}

function prepareGallery() {
    //检测浏览器是否支持函数
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    //获取链接数组
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    //通过遍历数组方法检测onclick并且执行showPic函数
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return showPic(this) ? false : true;
        }
    }
}

function placeHolder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctxt = document.createTextNode("Choose a image.");
    description.appendChild(desctxt);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);

    /*最后一个元素时使用此代码
    var body= document.getElementsByTagName("body")[0];
    body.appendChild(placeholder);
    body.appendChild(description);*/


    /*l利用insertBefore属性插入到元素之前
    var gallery= document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(description,gallery);
    */

}
function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                addclass(rows[j], "odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].old = rows[i].className;
        rows[i].onmouseover = function () {
            addclass(this, "highlight");
        }
        rows[i].onmouseout = function () {
            this.className = this.old;
        }
    }
}



function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历abbr元素,并创建一个数组使简写与全称一一对应
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        //针对IE6 abbr统计bug语句
        if (current_abbr.childNodes.length < 0) continue;
        var definition = current_abbr.getAttribute("title");//全称
        var key = current_abbr.lastChild.nodeValue;//简写
        defs[key] = definition;//W3C元素的值为 World Wide Web Consortium
    }
    //创建列表
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
        if (dlist.childNodes.length < 0) return false;
    }
    if (dlist.childNodes.length < 1) return false;
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var article = document.getElementsByTagName("article");
    if (article.length == 0) return false;
    var container = article[0];
    container.appendChild(header);
    container.appendChild(dlist);
}

function focusLabels() {
    if (!document.getElementsByTagName) return false;
    var labels = document.getElementsByTagName("label");
    for (var i = 0; i < labels.length; i++) {
        if (!labels[i].getAttribute("for")) continue;
        labels[i].onclick = function () {
            var id = this.getAttribute("for");
            if (!document.getElementById(id)) return false;
            var element = document.getElementById(id);
            element.focus();//focus方法为元素设置焦点
        }
    }
}

function resetFeilds(whichform) {
    //if (Modernizr.input.placeholder) return;
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.type == "submit") continue;//跳过submit标签循环
        var check = element.placeholder || element.getAttribute('placeholder');
        if (!check) continue;//跳过不含placeholder属性标签循环
        element.onfocus = function () {
            var text = this.placeholder || this.getAttribute('placeholder');
            if (this.value == text) {
                this.className = '';
                this.value = "";
            }
        }
        element.onblur = function () {
            if (this.value == "") {
                this.className = 'placeholder';
                this.value = this.placeholder || this.getAttribute('placeholder')
            }
        }
        element.onblur();
    }
}

function prepareForm() {
    for (var i = 0; i < document.forms.length; i++) {
        var thisform = document.forms[i];
        resetFeilds(thisform);
        thisform.onsubumit = function () {
            if (!validateForm(this)) return false;//未填写表单返回false 不执行submit
            var article = document.getElementsByTagName('article')[0];
            if (submitFormWithAjax(this, article)) return false;
            return true;
        }
    }
}
//填写验证函数
function isFilled(field) {
    if (field.value.replace(' ', '').length == 0) return false;
    var placeholder = field.placeholder || field.getAttribute("placeholder");
    return (filed.value != placeholder);
}
//邮件格式验证
function isEmail(field) {
    return (filed.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

function validateForm(whichform) {
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.required == 'required') {
            if (!isFilled(element)) {
                alert("Please fill in the " + element.name + "field.");
                return false;
            }
        }
        if (element.type == "email") {
            if (!isEmail(element)) {
                alert("The " + element.name + "filed must be a valid email address");
                return false;
            }
        }
    }
    return true;
}
//针对老版本浏览器创建的XMLHttpRequest()对象
function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
            catch (e) { }
            return false;
        }
    return new XMLHttpRequest();
}

function displayAjaxLoading(element) {
    while (element.hasChildNode()) {
        element.removeChild(element.lastChild);
    }
    var content = document.createElement("img");
    content.setAttribute("src", "example.gif");
    content.setAttribute("alt", "Loding.............");
    element.appendChild(content);
}

function submitFormWithAjax(whichform, thetarget) {
    var request = getHTTPObject();//XHR对象
    if (!request) { return false; }
    displayAjaxLoading(thetarget);
    var dataParts = [];//创建一个空数组
    var element;
    for (var i = 0; i < whichform.element.length; i++) {
        element = whichform.element[i];
        dataParts[i] = element.name + '=' + encodeURIComponent(element.value);//创建URL表单[message=value&name=value2&name2=value3&name3]
    }
    var data = dataParts.join('&');
    request.open('POST', whichform.getAttribute("action"), true);//XHR.open("get","example.php,fasle") 将表单值通过post方法发送至submit.html
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//表示请求中含有URL表单，使用post方法必须
    //发送请求准备完毕
    request.onreadystatechange = function () {
        /*
    0：未初始化。new完后;
    1：已打开。对象已经创建并初始化，但还未调用send方法
    2：已发送。已经调用send 方法，但该对象正在等待状态码和头的返回；
    3：正在接收。已经接收了部分数据，但还不能使用该对象的属性和方法，因为状态和响应头不完整；
    4：已加载。所有数据接收完毕 
        */
        if (request.readyState == 4) {
            //XMLHttpRequest.status==200为成功的请求，XMLHttpRequest.status==0 为失败的请求
            if (request.status == 200 || request.status == 0) {
                //通过正则表达式匹配<article></article>中的内容
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if (matches.length > 0) {
                    thetarget.innerHTML = matches[1];
                } else {
                    thetarget.innerHTML = '<p> Oops,there was an error.Sorry.</p>'
                }
            } else {
                thetarget.innerHTML = '<p>' + request.statusText + '</p>';
            }
        }
    };
    request.send(data);//发送请求
    return true;
}

addLoadEvent(prepareForm);
addLoadEvent(focusLabels);
addLoadEvent(stripeTables);
addLoadEvent(displayAbbreviations);
addLoadEvent(highlightRows);
addLoadEvent(prepareGallery);
addLoadEvent(placeHolder);
addLoadEvent(prepareInternalnav);
addLoadEvent(prepareSlideshow);
addLoadEvent(highlightPage);
addLoadEvent(addclass);