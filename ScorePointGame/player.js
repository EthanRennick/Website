
function component(width, height, color, x, y, type) 
{
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.gravity = 0.05;
    this.gravitySpeed = 0;

    this.update = function() 
    {
        ctx = myGameArea.context;
        if (this.type == "text") 
        {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } 
        else
        {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.draw = function() 
    {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() 
    {
        this.x += this.speedX;
        this.gravitySpeed += this.gravity;
        this.speedX = 0;
        this.y += this.speedY + this.gravitySpeed;
        
        this.hitBottom(); //if player hits bottom of canvas
        this.hitSidesRight();
        this.hitSidesLeft();
        this.hitTop();
    }
    this.hitBottom = function() 
    {
        var rockbottom = myGameArea.canvas.height - this.height - 1;
        if (this.y > rockbottom) 
        {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.hitSidesRight = function() 
    {
        var sides = myGameArea.canvas.width - this.width;
        if (this.x > sides) 
        {
            this.x = sides;
        }
    }
    this.hitSidesLeft = function() 
    {
        var sides = 2;
        if (this.x < sides) 
        {
            this.x = sides;
        }
    }
    this.hitTop = function() 
    {
        var top = 0;
        if (this.y < top) 
        {
            this.y = top;
            this.gravity = 0.05;
            this.gravitySpeed = 0;
        
        }
    }
    this.accelerate  = function(n) 
    {
        this.gravity = n;
    }
    this.collision = function(otherobj) 
    {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var collision = true;
        if ((mybottom < othertop) ||
         (mytop > otherbottom) || 
         (myright < otherleft) || 
         (myleft > otherright)) 
        {
            collision = false;
        }
        return collision;
    }
}

function rgb(r, g, b) 
{ 
    return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')'; 
} 