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

