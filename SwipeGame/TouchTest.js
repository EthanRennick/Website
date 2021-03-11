function is_touch_device()
{
    return 'ontouchstart' in window;
}   

// //code that handles text and paint tool at the same time. #multi classing
// function component(width, height, color, x, y, type) 
// {
//     this.type = type;
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;    
//     this.x = x;
//     this.y = y;    
//     this.update = function() 
//     {
//         ctx = myGameArea.context;
//         if (this.type == "text") 
//         {
//             ctx.font = this.width + " " + this.height;
//             ctx.fillStyle = color;
//             ctx.fillText(this.text, this.x, this.y);
//         } 
//         else
//         {
//             ctx.fillStyle = color;
//             ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }
//     this.draw = function() 
//     {
//         ctx = myGameArea.context;
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
//     this.newPos = function() 
//     {
//         this.x += this.speedX;
//         this.y += this.speedY;        
//     }
// }

// function onTouchStart(e)

// {

//     var touch = e.touches;
//     // Print out (x,y) co-ords of touch: touches[0].clientX contains
//     //document.write("x= " + touch[0].clientX + " and y= " + touch[0].clientY);

//     // the x position.

// }