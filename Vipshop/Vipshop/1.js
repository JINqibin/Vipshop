/**
 * Created by Administrator on 2017/8/13.
 */
 var head_ul_li1=document.querySelector("#head_ul_li1");
var imgshang=document.querySelector("#imgshang");
var headgd=document.querySelector("#headgd");
head_ul_li1.onmousemove=function a(){
    imgshang.src="image/2.png";
    headgd.style="display:black;";
};
head_ul_li1.onmouseout=function a(){
    imgshang.src="image/QQ图片20170813135854.png";
    headgd.style="display:none;";
};
//导航条
window.onscroll = function(){ //绑定scroll事件
    var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取滚动距离
    var dh1 = document.querySelector( "#dh1" ); //查询并定义div元素
    if( t<210) { //判断
        dh1.className="dh1";
    }else if(t>211&&t<230){
        dh1.className="dh3";
    }else if(t>231){
        dh1.className="dh2";
    }
};









var dh_right_1_b=document.querySelector("#dh_right_1_b");
var dh_right_1=document.querySelector("#dh_right_1");
var dh_right_li1=document.querySelector("#dh_right_li1");
dh_right_1_b.onclick=function b(){
    dh_right_1.style="  left: 0px;";
};
dh_right_li1.onmousemove=function c(){
    dh_right_1.style="left: -300px;";
};
dh_right_li1.onmouseout=function d(){
    dh_right_1.style="left:0px;";
};
var dh_right_2_b=document.querySelector("#dh_right_2_b");
var dh_right_li2=document.querySelector("#dh_right_li2");
var dh_right_2=document.querySelector("#dh_right_2");
var i=0;
dh_right_li2.onclick=function e(){
    i++;
    if(i==1){
        dh_right_2.style="left: -300px;";

    }else if(i==2){
        dh_right_2.style="left: 0px;";
        i=0;
    }
};
function nav1(){
    scrollTo(0,0);
}
var selareabtn=document.querySelector("#selareabtn");
var selareabox=document.querySelector("#selareabox");
selareabtn.onmousemove=function sel(){
    selareabox.style="display:black";
    selareabtn.style="border-left:solid 1px #d0d0d0 ; border-right:solid 1px #d0d0d0 ;background-color: #fff;";
};
selareabtn.onmouseout=function sel(){
    selareabox.style="display:none";
    selareabtn.style="";
};
selareabox.onmousemove=function sel(){
    selareabox.style="display:black";
    selareabtn.style="border-left:solid 1px #d0d0d0 ; border-right:solid 1px #d0d0d0 ;background-color: #fff;";
};
selareabox.onmouseout=function sel(){
    selareabox.style="display:none";
    selareabtn.style="";
};
var wpmyli1=document.querySelector("#wpmyli1");
var wpmydl=document.querySelector("#wpmydl");
wpmyli1.onmousemove=function wpm(){
    wpmydl.style="display:black";
    wpmyli1.style="border-left:solid 1px #d0d0d0 ; border-right:solid 1px #d0d0d0 ; background-color: #fff;";
};
wpmyli1.onmouseout=function wpm(){
    wpmydl.style="display:none";
    wpmyli1.style="";
};
wpmydl.onmousemove=function wpm(){
    wpmydl.style="display:black";
    wpmyli1.style="border-left:solid 1px #d0d0d0 ; border-right:solid 1px #d0d0d0 ; background-color: #fff;";
};
wpmydl.onmouseout=function wpm(){
    wpmydl.style="display:none";
    wpmyli1.style="";
};
var signin_text=document.querySelector("#signin_text");
var signin_unSigned=document.querySelector("#signin_unSigned");
signin_text.onmousemove=function wps(){
    signin_unSigned.className="signin_unSigned2";
};
signin_unSigned.onmousemove=function wps(){
    signin_unSigned.className="signin_unSigned2";
};
signin_text.onmouseout=function wps(){
    signin_unSigned.className="signin_unSigned1";
};
signin_unSigned.onmouseout=function wps(){
    signin_unSigned.className="signin_unSigned1";
};
var wpphone=document.querySelector("#wpphone");
var phoneTip=document.querySelector("#phoneTip");
wpphone.onmousemove=function phone(){
    phoneTip.style="dispaly;black";
};


var left1=document.querySelector("#left1");
var right1=document.querySelector("#right1");
var goodsul=document.querySelector("#goodsul");
var t=1;
right1.onclick=function(){
    t++;
    goodsul.style.marginLeft=(t*-207)+'px';
    if(t>8){
        goodsul.style.marginLeft='-'+1656+'px';
        t=8;
    }

};
goodsul.onmouseover=function(){
    clearInterval(setIn);
};
goodsul.onmouseout=function(){
    setIn = setInterval("img1()",1000);
};
function img1(){
    t++;
    goodsul.style.marginLeft=(t*-207)+'px';
    if(t>8){
        t=-1;
    }
}
left1.onclick=function(){
    t--;
    goodsul.style.marginLeft=(t*-207)+'px';
    if(t==0){
        goodsul.style.marginLeft=0;
        t=1;
    }
};
var setIn;
setIn = setInterval("img1()",2300);

