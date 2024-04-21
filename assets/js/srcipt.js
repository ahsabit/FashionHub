
var changeBtn = document.querySelector('.toggle-btn');
var hiddenNav = document.querySelector('.h-nav');
var text = document.querySelector('.copy-it');
var toolkit = document.querySelector('.toolkit');
var menu1 = document.querySelectorAll('.menu1 a');
var menu2 = document.querySelectorAll('.menu2 a');
var section = document.querySelectorAll('.section');

menu2.forEach(a => {
    a.addEventListener('click', function(){
        if (changeBtn.classList.contains('change')) {
            hiddenNav.style.height = "0";
        }else{
            hiddenNav.style.height = "200px";
        }
        myFunction(changeBtn);
    });
});

changeBtn.addEventListener('click', function(){
    if (changeBtn.classList.contains('change')) {
        hiddenNav.style.height = "0";
    }else{
        hiddenNav.style.height = "200px";
    }
    myFunction(this);
});

text.addEventListener('click', function(){
    copyText(this);
});

window.addEventListener('load', function(){
    document.querySelector('.menu1 a[href*=home]').classList.add('nav-active');
    document.querySelector('.menu2 a[href*=home]').classList.add('nav-active');
});

window.addEventListener("scroll", function () {
    if (changeBtn.classList.contains('change')) {
        hiddenNav.style.height = "0";
        myFunction(changeBtn);
    }
    section.forEach(function(sec){
         let top = scrollY;
         let offset = sec.offsetTop - 150;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height){
             menu1.forEach(link => {
                 link.classList.remove('nav-active');
                 document.querySelector('.menu1 a[href*='+ id +']').classList.add('nav-active');
             });
             menu2.forEach(link => {
                 link.classList.remove('nav-active');
                 document.querySelector('.menu2 a[href*='+ id +']').classList.add('nav-active');
             });
         }
    });
});

function myFunction(x) {
  x.classList.toggle("change");
}

function copyText(y) {
    let z = y.innerHTML;
     // Copy the text inside the text field
    navigator.clipboard.writeText(z);
    // Alert the copied text
    toolkit.innerHTML = "Email Copied!";
    setTimeout(() => {
        toolkit.innerHTML = null;
    }, 2000);
}