var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var swidth= screen.width;
    var sheight= screen.height;
    var new_width= swidth-70;
    var new_height= sheight-300;
    
    if(swidth<992){
    document.getElementById("myCanvas").width= new_width;
    document.getElementById("myCanvas").height= new_height;
    document.body.style.overflow = "hidden"
    }
    
   


    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
      console.log("inside my touchstart function");
      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width_of_line").value;
      last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
      last_position_of_y =e.touches[0].clientY-canvas.offsetTop;
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX- canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

function clear_canvas(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}