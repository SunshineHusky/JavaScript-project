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
