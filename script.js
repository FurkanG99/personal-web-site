
/*============================= typing animation============== */
let yazi=new Typed(".typing",{
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

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav a");
  
    function changeActiveSection() {
      const scrollPosition = window.scrollY;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; 
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            if (navLink.getAttribute("href") === `#${sectionId}`) {
              navLink.classList.add("active");
            }
          });
        }
      });
    }
  
    // Add scroll event listener
    window.addEventListener("scroll", changeActiveSection);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".popup-link");
  
    popupLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const imageUrl = this.getAttribute("href");
        openPopup(imageUrl);
      });
    });
  
    function openPopup(imageUrl) {
      // Example: You can create a simple modal or use a library like Fancybox
      alert("Open popup for " + imageUrl);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".popup-link");
  
    popupLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const popupId = this.getAttribute("id");
        openPopup(popupId);
      });
    });
  
    function openPopup(popupId) {
      const popup = document.getElementById(popupId);
      popup.style.display = "flex";
    }
  
    // Function to close the popup
    window.closePopup = function (popupId) {
      const popup = document.getElementById(popupId);
      popup.style.display = "none";
    };
  });
  