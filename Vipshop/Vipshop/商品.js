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
var imgz=document.querySelector("#imgz");
var zoomimg=document.querySelectorAll(".zoomimg");
for (var j = 0; j<zoomimg.length; j++) {
    zoomimg[j].onclick=function(){
        imgz.innerHTML = this.innerHTML;
    }
}

var imgq=document.querySelector("#imgq");
//鼠标移入事件
imgq.onmouseover = function() {
  imgq.style=" width: 1100px;height: 1390px;";
};
//鼠标不断移动时触发，实时更新放大镜得到的图片
//鼠标移出后
imgq.onmouseout = function() {
    imgq.style=" width: 420px;";
};

window.onscroll = function(){ //绑定scroll事件
    var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取滚动距离
    var Md = document.querySelector( "#Md" ); //查询并定义div元素
    var jg = document.querySelector( "#jg" );
    if( t<1300) {
        Md.className="M-detailTop";
        jg.style="display: none;";
    }else {
        Md.className+=" M-detailTopFixed";
        jg.style="display: black;";
    }
};




var interval = 100;
function ShowCountDown(year,month,day,divname)
{
    var now = new Date();
    var endDate = new Date(year, month-1, day);
    var leftTime=endDate.getTime()-now.getTime();
    var leftsecond = parseInt(leftTime/1000);
    var day1=Math.floor(leftsecond/(60*60*24));
    var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
    var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
    var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
    var cc = document.getElementById(divname);
    cc.innerHTML = "剩余:"+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
}
window.setInterval(function(){ShowCountDown(2017,8,20,'divdown1');}, interval);


var pipricex=document.querySelector("#pipricex");
var size1=document.querySelector("#size1");
var size2=document.querySelector("#size2");
var size3=document.querySelector("#size3");
var sizetext=document.querySelector("#sizetext");

size1.onclick=function(){
      if(size2.value==1){
          sizetext.style=" display: inline-block;";
          pipricex.style=" border: 1px solid #f10582 ; background: #fffaf3;";
      }else if(size2.value==2){
          size2.value=1;
      }
};
size3.onclick=function(){
    if(size2.value==1){
        size2.value=2;
    }else if (size2.value==2){
        sizetext.style=" display: inline-block;";
        sizetext.innerHTML="同尺码限购2件";
        pipricex.style=" border: 1px solid #f10582 ; background: #fffaf3;";
    }
};
function qc(){
    sizetext.style=" display:none;";
    pipricex.style=" border:  ; background: ;";
}

var setIn;
setIn = setInterval("qc()",2000);

var wrapleft=document.querySelector("#wrapleft");
var wrapright=document.querySelector("#wrapright");
var reco=document.querySelector("#reco");
var pageleft=document.querySelector("#pageleft");
var pageright=document.querySelector("#pageright");
var ss=document.querySelector("#ss");
var p=0;
wrapright.onclick=function(){
    p++;
    if(p<5){
        reco.style.left=(p*-1020)+'px';
        wrapright.style="cursor:pointer;";
        wrapleft.style="cursor:pointer;";
    }else if(p==5){
        reco.style.left=-4080 +'px';
        wrapright.style="cursor:not-allowed;";
        p=4;
    }
    ss.innerHTML=p+1;
};
pageright.onclick=function(){
    p++;
    if(p<5){
        reco.style.left=(p*-1020)+'px';
        pageright.style="cursor:pointer;";
        pageleft.style="cursor:pointer;";
    }else if(p==5){
        reco.style.left=-4080 +'px';
        pageright.style="cursor:not-allowed;";
        p=4;
    }
    ss.innerHTML=p+1;
};
wrapleft.onclick=function(){
    p--;
    if(p>=0){
        reco.style.left=(p*-1020)+'px';
        wrapleft.style="cursor:pointer;";
        wrapright.style="cursor:pointer;";
    }else if(p<0){
        p=0;
        wrapleft.style="cursor:not-allowed;";
    }
    ss.innerHTML=p+1;
};
pageleft.onclick=function(){
    p--;
    if(p>=0){
        reco.style.left=(p*-1020)+'px';
        pageleft.style="cursor:pointer;";
        pageright.style="cursor:pointer;";

    }else if(p<0){
        p=0;
        pageleft.style="cursor:not-allowed;";
    }
    ss.innerHTML=p+1;
};

var autop=document.querySelector("#autop");
var liitem=document.querySelectorAll(".li-item");
var auimg=document.querySelector("#auimg");
for(var o = 0 ;o <liitem.length ; o++){

    liitem[o].onclick = function(){
        for(var j = 0; j<liitem.length ;j++){
            liitem[j].style="";
        }
        this.style="background-position-y:-120px;";
    }
}


liitem[0].onclick=function(){
    autop.className="au-top-0";
    auimg.src="//shop.vipstatic.com/img/te/resource/au_img01.jpg?v=12017072701";
};
liitem[1].onclick=function(){
    autop.className="au-top-1";
    auimg.src="//shop.vipstatic.com/img/te/resource/au_img11.jpg?v=12017072701";
};
liitem[2].onclick=function(){
    autop.className="au-top-2";
};
liitem[3].onclick=function(){
    autop.className="au-top-3";
};














var leftimg=document.querySelector("#leftimg")
var rightimg=document.querySelector("#rightimg")
var listpanel=document.querySelector("#listpanel");

leftimg.onclick=function(){
    listpanel.style="left:-1px; "

};
rightimg.onclick=function(){
    listpanel.style=" left:-1000px;"

};














