
/*
方法一
window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p> I inserted <em>this</em> content.";
}
*/

/*
创建元素与文本,链接原有元素
window.onload = function(){
var testdiv = document.getElementById("testdiv");
var para = document.createElement("p");
var txt = document.createTextNode("Hello world");
para.appendChild(txt);
testdiv.appendChild(para);
}
*/

//DOM插入元素方法 等同于方法一
window.onload = function(){
    //创建元素节点em
    var em = document.createElement("em");
    //创建文本节点my
    var txt3 = document.createTextNode(" my");
    em.appendChild(txt3);
    //创建元素节点para
    var para = document.createElement("p");
    //创建文本节点This
    var txt1 = document.createTextNode("This is");
    //创建文本节点Content
    var txt2 = document.createTextNode("content.");

    para.appendChild(txt1);
    para.appendChild(em);
    para.appendChild(txt2);
          //HTML母属性
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}