$(document).ready(function() {
    
            //function that defines allows right arrow to do something when pushed down
    var lArrowPressed = false
            
    var rArrowPressed = false
   
    var rArrow = 39
    
    var lArrow = 37
    
    $("body").keydown(function(event) {
        if (event.keyCode == lArrow) {
            lArrowPressed = true;
            alert('left');
        };
    })
    
    $("body").keydown(function(event) {
    
    if (event.keyCode == rArrow) {
        
        rArrowPressed = true;
        alert('right');
    
    };
})
            //Function that connects the right arrow to the div
            
    var divPosition = 10;
    
    var move = function() {
        
        if(rArrowPressed && lArrowPressed) {
            
        divPosition = divPosition + 1;
        
        rArrowPressed = false;
        lArrowPressed = false;
  
        $("#avatar").css("left", divPosition);
  
        }
    }
    setInterval(move, 5);
    
    //Function that targets left arrow key
    
    $("body").keyup(function(event){
        if (event.keyCode == rArrow) {
        
        $("body").css("background-color", "red");
        }
        else { $("body").css("background-color", "white");
             prompt("No Jamie");
        }
})
  
    

    //ava.animate({"left":"+=100"}, 500, "linear");
    });
    


