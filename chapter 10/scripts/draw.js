/*
* @Author: Marte
* @Date:   2018-06-09 15:27:39
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-10 11:35:58
*/

'use strict';
function draw(){
    var canvas = document.getElementById("draw-in-me");
    if(canvas.getContext){
        //定义ctx为2D绘图
        var ctx = canvas.getContext('2d');
        //清除之前路径,开始绘图
        ctx.beginPath();
        //起点坐标
        ctx.moveTo(120.0,32.0);
        //三次贝塞尔曲线  控制点1(120,36.4) 控制点2(116.4,40) 结束点3(112,40)
        ctx.bezierCurveTo(120.0,36.4,116.4,40.0,112.0,40.0);
        //直线终点
        ctx.lineTo(8.0,40.0);
        ctx.bezierCurveTo(3.6,40.0,0.0,36.4,0.0,32.0);
        ctx.lineTo(0,8.0);
        ctx.bezierCurveTo(0.0,3.6,3.6,0.0,8.0,0.0);
        ctx.lineTo(112.0,0);
        ctx.bezierCurveTo(116.4,0.0,120.0,3.6,120.0,8.0);
        ctx.lineTo(120.0,32.0);
        //由当前点返回起点
        ctx.closePath();
        //填充颜色 默认黑色
        ctx.fill();
        //图形线宽
        ctx.lineWidth =2.0;
        //绘图命令
        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.stroke();

    }
}

window.onload = draw;