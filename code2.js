// side menue bar

var sidemenue = document.getElementById("sidemenue");

        var bars = document.getElementById("bars");

        function openmenue(){
            sidemenue.style.right = "0"
              bars.style.display = "none" 
        }

        function closemenue(){
             sidemenue.style.right = "-250px"
            bars.style.display = "unset"          
        }

   