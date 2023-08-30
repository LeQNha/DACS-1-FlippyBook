const sidebar = document.querySelector(".filetr-sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const hide = document.querySelector(".sidebar-hide");

var slide = document.getElementById('filter-sidebar');
var coverDiv = document.getElementById('cover-div');
var i =0;

const btn = document.getElementById('toggle-btn');
// if(i == 0 ){
//   btn.onclick = function(){
//     slide.classList.add('wideout');
//   }
//   i= i+1;
// }else{
//   btn.onclick = function(){
//     slide.classList.remove('wideout');
//   }
//   i= i-1;
// }

function Wideout(){
  if( slide.style.left === "-300px"){
    // slide.style.display='none';
    slide.style.zIndex ="20";
    coverDiv.style.top = '0px';
    slide.style.left = "0px";
  }else{
    // slide.style.display='block';
    slide.style.zIndex ="15";
    coverDiv.style.top = '-800px';
    slide.style.left = "-300px";
  }

}

document.getElementById('toggle-btn').addEventListener('click',Wideout);
document.getElementById('sidebar-hide').addEventListener('click',Wideout);

// toggleBtn.addEventListener("click", () => { 
//   filter-sidebar.classList.toggle("show-sidebar");
// });


const loginBtn = document.querySelector('#dang-nhap');
loginBtn.addEventListener('click',() => {
 
});

document.getElementById('dang-nhap').addEventListener('click', LoginPopOut);
var loginForm = document.getElementById('login-form');
var signUpForm = document.getElementById('sign-up-form');
document.getElementById('dang-ky').addEventListener('click',SignUpPopOut);


function SignUpPopOut(){
  signUpForm.style.top ='100px';
  coverDiv.style.top = '0px';
  if(loginForm.style.top ==='140px'){
    loginForm.style.top = '-800px';
  }
}
function LoginPopOut(){
    loginForm.style.top='140px';
    coverDiv.style.top = '0px';
    if(signUpForm.style.top ==='100px'){
      signUpForm.style.top = '-800px';
    }
}
document.getElementById("close-login").addEventListener('click',CloseLogin);
function CloseLogin(){
   coverDiv.style.top = '-100%';
   loginForm.style.top = '-800px';
}
document.getElementById("close-sign-up").addEventListener('click',CloseSignUp);
function CloseSignUp(){
   coverDiv.style.top = '-100%';
   signUpForm.style.top = '-800px';
}
document.getElementById("switch-to-login").addEventListener('click',SwitchToLogin);
function SwitchToLogin(){
    signUpForm.style.top = '-800px';
    loginForm.style.top = '140px';
 
}
document.getElementById("switch-to-sign-up").addEventListener('click',SwitchToSignUp);
function SwitchToSignUp(){
    loginForm.style.top = '-800px';
    signUpForm.style.top = '100px';
 
}


/////////
const scrollUp = document.querySelector(".scroll-up");
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  var scroll = this.window.scrollY;
  if (scroll > 100) {
    scrollUp.style.left = '96%';
  } else {
    scrollUp.style.left = '100%';
  }
});


