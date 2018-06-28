/*
* @Author: Marte
* @Date:   2018-06-11 11:25:48
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-11 15:42:49
*/

'use strict';
function convertToGs(img){
    //定义原始图片地址
    img.color = img.src;
    //定义灰度图片地址
    img.grayscale = createGSCanvas(img);
    //创建事件鼠标移动至图片上为彩色图片
    img.onmouseover = function(){
        this.src = this.color;
    }
    //创建事件鼠标移出图片为灰色图片
    img.onmouseout = function(){
        this.src = this.grayscale;
    }
    img.onmouseout();
}

function createGSCanvas(img){
    //创建cavas元素,canvas元素宽度和高度与原始图片尺寸一致
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    //定义2D绘图
    var ctx = canvas.getContext("2d");
    //将原始图片放入canvas画布中,定位为(0,0)
    ctx.drawImage(img,0,0);
    //获取canvas区图像像素数据,(sx,sy,sw,sh),sx,sy为左上角坐标,sw,sh为图像宽高,返回ImageDate对象.
    var c = ctx.getImageData(0,0,img.width,img.height);
    //遍历每个像素数据,取灰度
    for(i=0;i<c.height;i++){
        for(j=0;j<c.width;j++){
            //x为数组下标,每个像素点存有四个数据,(R,G,B,A) 第一个数组[0,1,2,3] 第二个数组[4,5,6,7]
            var x = (i*4)*c.height+(j*4);// i=0 j=0 x=0(第一行第一个元素); i=0,j=1,x=4(第一行第二个元素)
            //r=g=b=(r+g+b)/3
            var r = c.data[x];
            var g = c.data[x+1];
            var b = c.data[x+2];
            c.data[x] = c.data[x+1] = c.data[x+2] = (r+g+b)/3;//转灰度算法
        }
    }
    //context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
    ctx.putImageData(c,0,0,0,0,c.width,c.height);
    //返回图片的URL
    return canvas.toDataURL();
}
//加载函数
window.onload = function(){
    convertToGs(document.getElementById("avatar"));
}
