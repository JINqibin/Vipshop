/**
 * Created by Administrator on 2017/8/11.
 */
var yhname=document.querySelector("#yhname");
var yhk=document.querySelector("#yhk");
var mmk=document.querySelector("#mmk");
var mmpwd=document.querySelector("#mmpwd");
yhname.onblur=function (){
    var  yhname1=document.getElementById("yhname1");
    if (yhname.value==""){
        yhname1.innerHTML="请输入用户名";
        yhk.style=" border: 1px solid #f10381;border-radius:3px ;"
    }else {
        yhname1.innerHTML="";
        yhk.style.border="";
    }
};


mmpwd.onblur=function (){
    var  mmpwdd=document.querySelector("#mmpwdd");
    if (mmpwd.value==""){
        mmpwdd.innerHTML="请输入密码";
        mmk.style=" border: 1px solid #f10381;border-radius:3px ;";
    }else {
        mmpwdd.innerHTML="";
        mmk.style.border="";
    }
};
var title3=document.querySelector(".title3");
var qqq=0;
function abc(){
    ++qqq;
    if(qqq==1){
        title3.className="title3_1";
    }else {
        title3.className="title3";
        qqq=0;
    }
}
function a(){
    var  yhname1=document.getElementById("yhname1");
    var  mmpwdd=document.querySelector("#mmpwdd");
    if (yhname.value!=""&&mmpwd.value!=""){
        open("首页.html");
    }

}
