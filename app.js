var myGamePiece;
var myObstacles = [];
var myScore;
var flappy = "https://www.pngitem.com/pimgs/b/184-1842507_flappy-bird-png.png";

function startGame(){
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width=600;
        this.canvas.hieght=400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[2])
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea,20)
    }, 
    clear : function(){
        this.context.clearReact(0,0,this.canvas.width,this.canvas.height);
    },
    stop : function(){
        clearInterval(this.interval);
    }
}

function moveup(){
    myGamePiece.speedY = -1;
}

function movedown(){
    myGamePiece.speedY = 1;
}

function moveright(){
    myGamePiece.speedX = 1;
}

function moveleft(){
    myGamePiece.speedX = -1;
}
function clermove(){
    myGamePiece.speedY = 0;
    myGamePiece.speedX = 0;
}