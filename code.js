// tabs link

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

var typed = new Typed('#typed',{
    strings : ["Crafted for Confidence","Designed for Life","Genuine Leather" +"","Enduring Style","Timeless Quality","Leather that Grows with You."],
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



