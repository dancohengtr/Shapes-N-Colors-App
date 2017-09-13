var canvas = 'undefined';
var context = 'undefined';

window.onload = function(){
    
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.4;
  draw();    
}


function draw(){
    
    context.fillStyle = "white";
    context.fillRect(0,0,canvas.width, canvas.height);
    
    context.strokeStyle = "#4CAF50";
    context.lineWidth = 10;
    context.strokeRect(0,0,canvas.width, canvas.height);
    
    
}

