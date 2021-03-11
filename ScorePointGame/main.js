/** 
 * This function will serve as an entry point for our program. 
 * 
 */
var mySquare;
var myScore;
var score;
var myEnemy;
var myEnemy2;
var platform;

function main() 
{  
    myGameArea.start();
    score=0;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256); 

    myGamePiece = new component(Math.floor(Math.random() *60), Math.floor(Math.random() *60), rgb(r,g,b), 250, 250);
    myGoal = new goal(Math.floor(Math.random() *51), Math.floor(Math.random() *51), rgb(r,g,b), Math.floor(Math.random() *400), Math.floor(Math.random() *400));
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myScore.text="Score: " + score;

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256); 
    myEnemy = new enemy(40, 40, rgb(r,g,b), Math.floor(Math.random() *360), 420);
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    myEnemy2 = new enemy2(40, 40, rgb(r,g,b), Math.floor(Math.random() *360), 50);
    platform = new platform(100, 10, rgb(r,g,b), Math.floor(Math.random() *360), 250);

} 

/** 

 * Helper function that returns a string of the form 'rgb(r,g,b)' where 

 * r,g and b are numeric values. 

 * @param {Number} r assumed numeric value for red. 

 * @param {Number} g assumed numeric value for green. 

 * @param {Number} b assumed numeric value for blue. 

* @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255. 
 */ 
  
var myGameArea = 
{
    canvas : document.createElement("canvas"),
    start : function() 
    {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(update, 25);
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
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

/** 

 * Helper function that clamps value between min and max and returns value. 

 * Example: clamp(10, 1, 3) will return 3 

 * @param {Integer} value integer value to be clamped. 

 * @param {Integer} min lower range value. 

 * @param {Integer} max upper range value. 

* @return {Integer} min if value is less than min, max if max is less than value, otherwise value. 

 */ 
function clamp(value, min, max) 
{ 
    if(max<min)
    { 
        var temp = min; 
        min = max; 
        max = temp; 
    } 
    return Math.max(min, Math.min(value, max)); 
} 

function update() 
{
    myGameArea.clear();

    //arrow keys
    if (myGameArea.key && myGameArea.key == 37) 
    {
        myGamePiece.speedX = -2; 
    }
    if (myGameArea.key && myGameArea.key == 39) 
    {
        myGamePiece.speedX = 2; 
    }
    if (myGameArea.key && myGameArea.key == 38) 
    {
        myGamePiece.speedY = -2; 
    }
    if (myGameArea.key && myGameArea.key == 40) 
    {
        myGamePiece.speedY = 2; 
    }

    //spacebar jump
    if (myGameArea.key && myGameArea.key == 32) 
    {
        myGamePiece.accelerate(-0.2); //player goes up
    }
    else
    {
        myGamePiece.accelerate(0.2);
    }

    if (myGamePiece.collision(myGoal))
    {
        score += 1;
        myScore.text="Score: " + score;
        myGoal.x=Math.floor(Math.random() *450);
        myGoal.y =Math.floor(Math.random() *450);
        myGamePiece.color = rgb(r,g,b);
    }
    myScore.update();
    platform.update();
    if(platform.collision(myGamePiece))
    {
        myGamePiece.speedX = 0;
        myGamePiece.gravitySpeed = 0;
        myGamePiece.y += myGamePiece.speedY + myGamePiece.gravitySpeed;
    }
 
    if (myEnemy.collision(myGamePiece) || myEnemy2.collision(myGamePiece))
    {
        myScore.text="You lose";
    }
    else
    {
        //if not collided together, update both of them
        myGamePiece.draw();
        myGamePiece.newPos();  
        myEnemy.update();
        myEnemy.newPos();
        myEnemy2.update();
        myEnemy2.newPos();
        myGoal.draw();

    }
}