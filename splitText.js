import { Bounce } from "gsap";
import  TweenLite  from "gsap/gsap-core";
import  TweenMax  from "gsap/gsap-core";
import SplitText from "gsap/src/SplitText";

const  TimelineLite  = require("gsap/gsap-core");

// //! GSAP Animations



// let mySplitText = new SplitText("quote", {type:"words,chars"});
// TweenLite.set("quote",{perspective:400});
// TweenMax.staggerFrom(mySplitText.chars, 0.8,{opacity:0, scale:0,y:80, rotationX:180, transformOrigin:"0% 50% -50",ease:Back.easeOut},0.01, allDone);
// function allDone(){
//     mySplitText.revert();
// }

let tl = new TimelineLite,
    mySplitText = new SplitText(".splitTexttt", {type:"words, lines, chars"});
        words = mySplitText.chars
        tl.staggerFrom(lines, 1, {opacity:0, x:80, ease: Power4.easeOut}, 0.4);
        document.getElementById("animate").onclick = function(){
            tl.restart();
        }