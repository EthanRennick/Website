var lastTouchX = -1.0;
var lastTouchY = -1.0;

var touchPoint = 
{
    x: -1.0,
    y:-1.0
}

var touchTime = null;

var time1;
var time2;
var time3;

var touchTimer;

var length;

//main
function main() 
{
    document.addEventListener('touchstart', function(e) {e.preventDefault();}, {passive: false});

    initCanvas();
    console.log(getCanvas()); 
    getCanvas().addEventListener('touchstart', () => this.onTouchStart(event));
    getCanvas().addEventListener('touchmove', () => this.onTouchMove(event));
    getCanvas().addEventListener('touchend', () => this.onTouchEnd(event));

    touchTimer = getCanvas().getContext("2d");
    touchTimer.font = "14px Arial";
    touchTimer.fillText("touch me", 10, 20);
    touchTimer.fillStyle = "black";


    //are we on  touch device
    console.log(is_touch_device());
}

function initCanvas() 
{ 
    // Use the document object to create a new element canvas. 
    var canvas = document.createElement("canvas"); 
    // Assign the canvas an id so we can reference it elsewhere. 
    canvas.id = 'mycanvas'; 
    canvas.width = 900;//480;
    canvas.height = 400;
    // We want this to be a 2D canvas. 
    var ctx = canvas.getContext("2d"); 

    // Adds the canvas element to the document. 

    document.body.appendChild(canvas); 
} 

function getCanvas() 
{
    return document.getElementById('mycanvas');
}

//touch move
function onTouchMove(event) 
{
    var changedTouches = event.changedTouches; //get the touches

    //check if last touch was not -1.0 (((null)))
    if(lastTouchX!==1.0)
    {
        var ctx = getCanvas().getContext('2d');

        ctx.beginPath();
        ctx.moveTo(lastTouchX, lastTouchY); //the previous touch

        //draws a line to current pos
        ctx.lineTo(changedTouches[0].clientX, changedTouches[0].clientY);
        
        ctx.stroke();
    }

    //updates the last touch variables
    lastTouchX = changedTouches[0].clientX;
    lastTouchY = changedTouches[0].clientY;
}

//touch start
function onTouchStart(event) 
{
    clearCanvas(); //new swipe, new start

    touchPoint = event.changedTouches; //get the touches

    touchPoint.x = touchPoint[0].clientX;
    touchPoint.y = touchPoint[0].clientY;
    //document.write(touchPoint.x, touchPoint.y)
    //starting point
    time1 = new Date();
}

//touch start
function onTouchEnd(event) 
{
    time2 = new Date();

    var changedTouches = event.changedTouches; //get the finishing touches
    lastTouchX = changedTouches[0].clientX;
    lastTouchY = changedTouches[0].clientY;
    time3 = time2 - time1;

    //length of line = sqrt of (x2 - x1) squared + (y2 - y1) squared)
    length = Math.sqrt(((lastTouchX - touchPoint.x) * (lastTouchX - touchPoint.x)) + ((lastTouchY - touchPoint.y) * (lastTouchY -touchPoint.y)));
    if(time3 > 20)
    {
        if(length > 20)
        {
            touchTimer.fillText("Swipe detected at: " + time1 + " which lasts: " + time3 + "ms of length: " + length, 10, 50);

            touchTimer.font = getCanvas().width + " " + getCanvas().height;
            touchTimer.fillStyle = "black";
        }
    }


    lastTouchX = 1.0;
    lastTouchY = 1.0;
}

function clearCanvas()
{
    const context = getCanvas().getContext('2d');
    context.clearRect(0, 0, getCanvas().width, getCanvas().height);
}
