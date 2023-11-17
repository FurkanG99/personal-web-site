/*============================= typing animation============== */
var typed=new Typed(".typing",{
    strings:["Web Designer","Web Developer","Full-Stack Developer","Student :)"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var kapalimi=true;
document.getElementsByClassName("colorSelectDiv")[0].style.display = "none";

function colorPaletteShow(){

    if(document.getElementsByClassName("colorSelectDiv")[0].style.display == "none"){
        document.getElementsByClassName("colorSelectDiv")[0].style.display = "block";
    }
    else{
        document.getElementsByClassName("colorSelectDiv")[0].style.display = "none";
    } 
    
}
function closeColorSelect(){
    document.getElementsByClassName("colorSelectDiv")[0].style.display = "none";
}


/*========= Download Cv ========*/

document.getElementById('download-cv').addEventListener('click',function(){
    var cvFilePath = '/cv/Furkan-cv.docx';
    var link = document.createElement('a');
    link.href = cvFilePath;

    link.download = 'Furkan-cv.docx';
    document.body.appendChild(link);
    link.click();
    document.removeChild(link);
});


/*===== SİDE MENU =======*/ 

document.addEventListener('DOMContentLoaded', function () {
  
    setActivePage('home');

   
    var menuItems = document.querySelectorAll('.nav a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            
            event.preventDefault();

            
            var pageId = this.getAttribute('href').substring(1);
            setActivePage(pageId);
        });
    });
});

function setActivePage(pageId) {

    var menuItems = document.querySelectorAll('.nav a');
    menuItems.forEach(function (menuItem) {
        menuItem.classList.remove('active');
    });

   
    var activeMenuItem = document.querySelector('.nav a[href="#' + pageId + '"]');
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', function () {
  
    setActivePage('home');


    var menuItems = document.querySelectorAll('.nav a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
          
            event.preventDefault();

          
            var pageId = this.getAttribute('href').substring(1);

            
            setActivePage(pageId);

            
            scrollToSection(pageId);
        });
    });
});

function setActivePage(pageId) {
   
    var menuItems = document.querySelectorAll('.nav a');
    menuItems.forEach(function (menuItem) {
        menuItem.classList.remove('active');
    });

 
    var activeMenuItem = document.querySelector('.nav a[href="#' + pageId + '"]');
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}

function scrollToSection(pageId) {
 
    var targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/*  ===== Call =====*/
document.addEventListener('DOMContentLoaded', function () {
    var phoneNumberElement = document.getElementById('phoneNumber');

    phoneNumberElement.addEventListener('click', function () {
        // Telefon numarasını al ve arama işlemini başlat
        var phoneNumber = this.querySelector('a').getAttribute('href');
        callPhoneNumber(phoneNumber);
    });
});

function callPhoneNumber(phoneNumber) {
    // Telefon numarasını arama işlemi için yönlendir
    window.location.href = phoneNumber;
}