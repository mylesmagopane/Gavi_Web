// tabs link

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")
var tabIndexes = document.getElementsByClassName("navCont")


var typed = new Typed('#typed',{
    strings : ["Crafted for Confidence","Designed for Life","Genuine Leather" +"","Enduring Style","Timeless Quality","Companion for Life."],
    typeSpeed: 180,
    backSpeed : 180,
    loop : true}   
);     

function opentab (tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");                          
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");                          
    }
   event.currentTarget.classList.add("active-link");   
   document.getElementById(tabname).classList.add("active-tab"); 
}


function selectedIndex (){

    for(tabIndex of tabIndexes){
        tabIndex.classList.remove("active");                          
    }
    event.currentTarget.classList.add("active"); 
}




