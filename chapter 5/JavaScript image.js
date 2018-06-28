//页面加载完成后立刻执行此函数
//写法一:window.onload = prepareGallery;
//写法二:创建addLoadEvent函数,创先预加载函数队列

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

addLoadEvent(prepareGallery);
addLoadEvent(placeHolder);

//点击事件函数
function prepareGallery(){
            //检测浏览器是否支持函数
            if(!document.getElementsByTagName) {
                return false;
            }
            if(!document.getElementById) {
                return false;
            }
            if(!document.getElementById("imagegallery")){
                return false;
            }
            //获取链接数组
            var gallery = document.getElementById("imagegallery");
            var links = gallery.getElementsByTagName("a");
            //通过遍历数组方法检测onclick并且执行showPic函数
            for (var i = 0; i < links.length; i++){
                links[i].onclick = function(){
                    showPic(this);
                    return showPic(this) ? false : true;
                }
            }
}


//更换图片描述函数
function showPic(whichpic){
            //检测浏览器是否含ID元素
            if(!document.getElementById("placeholder")){
                return false;
            }
            var source = whichpic.getAttribute("href");
            var placeholder = document.getElementById("placeholder");
            if(placeholder.nodeName != "IMG") return false;
            placeholder.setAttribute("src",source);
            var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";
            if(document.getElementById("description")){
                var description = document.getElementById("description");
                if(description.firstChild.nodeType == 3){
                         description.firstChild.nodeValue = text;

                }
             }
            return true;
        }


//创建placeholder元素

function placeHolder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder= document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description= document.createElement("p");
    description.setAttribute("id","description");
    var desctxt= document.createTextNode("Choose a image.");
    description.appendChild(desctxt);
    var gallery= document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);

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

//编写insertAfter函数
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextsibling);
    }
}