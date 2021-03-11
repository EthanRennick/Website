
var myGamePiece;
var touchTimer;

//time pieces
var time1;
var time2;
var time3;

//touches 
var touchEnding;
var touchLength;
var touchStarting;

var touchStartX;
var touchStartY;
var touchEndX;
var touchEndY;


function main() 
{
    document.addEventListener('touchstart', function(e) {e.preventDefault();}, {passive: false});
    touchTimer = new component("14px", "Consolas", "black", 10, 40, "text");
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}

var myGameArea = 
{
    canvas : document.createElement("canvas"),
    start : function() 
    {
        this.canvas.width = 900;//480;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 5);
        window.addEventListener('touchmove', function (e) 
        {
            myGameArea.x = e.touches[0].screenX;
            myGameArea.y = e.touches[0].screenY;
        })
        window.addEventListener('touchstart', function (e) 
        {
            myGameArea.clear();
            touchStarting = e.touches;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;

            time1 = new Date();
        })
        window.addEventListener('touchend', function (e) 
        {
            touchEnding = e.touches;
            time2 = new Date();
            time3 = time2 - time1;
            myGameArea.clear();
           
        })
        window.addEventListener('keydown', function (e) 
        {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) 
        {
            myGameArea.key = false;
        })
    }, 
    clear : function()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function updateGameArea() 
{
    //if i press space, clear screen
    if (myGameArea.key && myGameArea.key == 32) 
    {
        myGameArea.clear();
    }

    //if touch is being detected
    if (myGameArea.x && myGameArea.y) 
    {
        myGamePiece.x = myGameArea.x;
        myGamePiece.y = myGameArea.y;    

    }


    //length of line = sqrt of (x2 - x1) squared + (y2 - y1) squared)
    //touchEnding = ((touchEnding[0].clientX -touchStarting[0].clientX) * (touchEnding[0].clientX - touchStarting[0].clientX)) + ((touchEnding[0].clientY - touchStarting[0].clientY) * (touchEnding[0].clientY - touchStarting[0].clientY));
    touchTimer.text= "Swipe detected at: " + time1 + " which lasts: " + time3 + " length: " + touchEnding;
    touchTimer.update();   
    myGamePiece.update();
}


