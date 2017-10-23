/**
 * Created by Administrator on 2017/8/11.
 */
var sjshuru=document.querySelector("#sjshuru");
var mmshuru=document.querySelector("#mmshuru");
var i=0;
var j=0;
var sjhts=document.querySelector("#sjhts");
var pass1=document.querySelector("#pass1");
var indicator1=document.getElementById("indicator1");
var ind1=document.getElementById("ind1");
var ind2=document.getElementById("ind2");
var ind3=document.getElementById("ind3");
var mmshuru_1=document.querySelector("#mmshuru_1");
var pass1_1=document.querySelector("#pass1_1");



//手机
function a(){
    ++i;
    sjshuru.style.background="";
    sjshuru.style.borderColor="";
    var asd =/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if(i==1){
        sjhts.innerHTML="&ensp;请输入您的11位手机号码";
        sjhts.className="sjhts2";
    }else if(i>1&&sjshuru.value==""){
        sjhts.innerHTML="手机号不能为空";
        sjhts.className="sjhts3";
        b();
    }else{
        if(asd.test(sjshuru.value)){
            c();
            sjhts.className="";
            sjhts.innerHTML="";
            sjshuru.style.background="";
            sjshuru.style.borderColor="";
        }else {
            sjhts.innerHTML="请输入正确的手机号";
            sjhts.className="sjhts3";
            b();
        }
    }
};

function b(){
    sjshuru.style.background="#FFE6E7";
    sjshuru.style.borderColor="#f10381";
};

//密码
function c(){
    sjhts.className="";
    sjhts.innerHTML="";
    j++;
    mmshuru.style.background="";
    mmshuru.style.borderColor="";
    if(j==1){
        pass1.innerHTML="密码由6-20位字母，数字和符号组合,密码必须2种以上区分大小写";
        pass1.className="pass1";
    }else if(j>1&&mmshuru.value==""){
        pass1.innerHTML="密码不能为空";
        pass1.className="pass2";
        indicator1.innerHTML="弱";

    }else if(mmshuru.value.length<=6){
        pass1.innerHTML="密码长度不能小于6位";
        pass1.className="pass2";
        indicator1.innerHTML="弱";
    }
    else if(mmshuru.value.length>10){
        pass1.innerHTML="";
        pass1.className="";
        indicator1.className="indicator2";
        indicator1.innerHTML="强";
        ind1.className="ind4";
        ind2.className="ind4";
        ind3.className="ind4";
    }else {
        pass1.innerHTML="密码过于简单有被盗号的风险";
        pass1.className="pass2";
        indicator1.innerHTML="中";
        ind1.className="ind3";
        ind2.className="ind3";
        ind3.className="ind2";
    }
};
mmshuru.onblur=function d(){
    pass1.className="";
    pass1.innerHTML="";
    mmshuru.style.background="#FFE6E7";
    mmshuru.style.borderColor="#f10381";
};
mmshuru.onchange=function e(){
             indicator1.className="indicator2";
             ind1.className="ind3";
             ind2.className="ind2";
             ind3.className="ind2";
};

function aa(){
    pass1_1.className="";
    pass1_1.innerHTML="";
    mmshuru_1.style.background="#FFE6E7";
    mmshuru_1.style.borderColor="#f10381";
};
mmshuru_1.onclick=function aq(){
    if(mmshuru_1.value==""){
        pass1_1.innerHTML="请再次输入密码";
        pass1_1.className="pass1_1";
        aa();
    }else if(mmshuru_1.value!=mmshuru.value){
        pass1_1.innerHTML="两次的密码不一致请重试";
        pass1_1.className="pass1_1";
        aa();
    }else if(mmshuru_1.value==mmshuru.value){
        pass1_1.className="";
        pass1_1.innerHTML="";
        mmshuru_1.style.background="";
        mmshuru_1.style.borderColor="";
        mmshuru.style.background="";
        mmshuru.style.borderColor="";
    }
};

//验证码
var dxhuoqv1=document.querySelector("#dxhuoqv1");
var dxyzm=document.querySelector("#dxyzm");
dxhuoqv1.onclick=function a(){
    dxhuoqv1.style.background="";
    dxhuoqv1.style.borderColor="";
    if(dxhuoqv1.value==""){
        dxyzm.innerHTML="请输入6位数字手机验证码";
        dxyzm.className="pass1_1";
    }else {

    }
};
dxhuoqv1.onblur=function b(){
    dxyzm.className="";
    dxyzm.innerHTML="";
    dxhuoqv1.style.background="#FFE6E7";
    dxhuoqv1.style.borderColor="#f10381";
};

var rrr=0;
function qqq111(){
    var qqqq=document.querySelector("#qqqq");
    var wwww=document.querySelector("#wwww");
    var zhucefansi=document.querySelector("#zhucefansi");
     rrr++;
    if(rrr==1){
        wwww.style="display:block;";
        qqqq.style=" display: none;";
        zhucefansi.innerHTML="通过手机注册 >>";
    }else if(rrr==2) {qqqq.style=" display:black;";
        wwww.style=" display: none;";
        zhucefansi.innerHTML="通过邮箱注册 >>";
        rrr=0;
    }
}






