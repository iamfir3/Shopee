var modal=document.querySelector(".modal");
var signinBtn=document.querySelector(".signinBtn");
var signoutBtn=document.querySelector(".signoutBtn");
var signinContainer=document.querySelector(".auth-form-signin");
var signoutContainer=document.querySelector(".auth-form-signout");
var back=document.querySelector(".auth-form__controls-back");
var back2=document.querySelector(".auth-form__controls-back-2");
var todangnhap=document.querySelector(".auth-form__switch-btn-to-dangnhap");
var todangki=document.querySelector(".auth-form__switch-btn-to-dangki");
var overlay=document.querySelector(".overlay");
var likebtn=document.querySelector(".home-product-item__like");
signinBtn.onclick = function() {
    modal.classList.remove("close");
    modal.classList.add("open");
    signinContainer.classList.add("open");
}
signoutBtn.onclick = function() {
    modal.classList.remove("close");
    modal.classList.add("open");
    signoutContainer.classList.add("open");

}
back.onclick=function() {
    modal.classList.remove("open");
    signinContainer.classList.remove("open");
    signoutContainer.classList.remove("open");
}
back2.onclick=function() {
    modal.classList.remove("open");
    signinContainer.classList.remove("open");
    signoutContainer.classList.remove("open");
}
todangnhap.onclick=function() {
    signinContainer.classList.remove("open");
    signoutContainer.classList.add("open");
}
todangki.onclick=function() {
    signoutContainer.classList.remove("open");
    signinContainer.classList.add("open");
}
overlay.onclick=function() {
    modal.classList.remove("open");
    signinContainer.classList.remove("open");
    signoutContainer.classList.remove("open");
}
likebtn.onclick=function() {
    likebtn.classList.toggle("home-product-item__like--liked");
}

