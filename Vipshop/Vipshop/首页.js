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
    var indexwrap = document.querySelector( "#indexwrap" ); //查询并定义div元素
    if( t<210) { //判断
        dh1.className="dh1";
    }else if(t>251){
        dh1.className="dh2";
    }

    if(t<1500){
        indexwrap.className="index-nav-wrap";
    }else if(t>1500){
        indexwrap.className="index-nav-wrap2";
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
//轮播图
var fbcli = document.querySelectorAll('.fbc-list img');
var spans = document.querySelectorAll('.follow span');
var spanp = document.querySelectorAll('.follow2 span');
var onleft = document.querySelector("#onleft");
var onright = document.querySelector("#onright");
function showImage(index) {
    for (var j = 0; j < fbcli.length; j++) {
        spanp[j].index = j;
        spans[j].index = j;
        fbcli[j].index = j;
        fbcli[j].style.zIndex = 100 - j;
        fbcli[j].style.opacity =0;
        spans[j].style.background = "white";
        spanp[j].style.color="#d0d0d0";

    }
    //将传入参数下标值的图片透明度赋值为 1
    fbcli[index].style.opacity = 1;
    spans[index].style.background = "#DF1680";
    spanp[index].style.color="#333";
}
showImage(0);
var count = 1;
function imageMove() {
    if (count % 5 == 0) {
        count = 0;
    }
    showImage(count);
    count++;
}
var imageInitailMove = setInterval('imageMove()', 2000);
onleft.onclick=function(){
    clearInterval(imageInitailMove);
    if (count == 0) {
        count = 5;
    }
    count--;
    showImage(count);//调用函数count先自－
    imageInitailMove = setInterval('imageMove()', 2000);
};
onright.onclick = function() {
    clearInterval(imageInitailMove);
    imageMove();
    imageInitailMove = setInterval('imageMove()', 2000);
};
for (var j = 0; j<spanp.length; j++) {
    spanp[j].onmouseover = function() {
        clearInterval(imageInitailMove);
        count = event.target.index;
        showImage(count);
        imageInitailMove = setInterval('imageMove()', 2000);
    }
}
var indexni = document.querySelectorAll(".index-nav-item");
for(var y = 0 ;y <indexni.length ; y++){
    indexni[y].onclick = function(){
        for(var j = 0; j<indexni.length ;j++){
            indexni[j].style=" ";
        }
        this.style="background:#f10582;color: white";
    }
}
//顶部地址
var selp = document.querySelector("#selp");
var spanl = document.querySelectorAll(".sab-table span");
for(var o = 0 ;o <spanl.length ; o++){
    spanl[o].onclick = function(){
        for(var j = 0; j<spanl.length ;j++){
             spanl[j].style="";
        }
        this.style="background:#f10582;color: white";
        selp.innerHTML=this.innerHTML;

    }
}














var setIn;
setIn = setInterval("gg()",1000);
var sj=8;
var btn=document.querySelector("#btn");
function gg(){
    sj--;
   var down=document.querySelector("#down");
    var main=document.querySelector("#main");
    if(sj>0){
        down.innerHTML=sj;

    }else if(sj==0){
        main.style="display: none;";
    }
}
btn.onclick=function(){
    var main=document.querySelector("#main");
    main.style="display: none;"
};













