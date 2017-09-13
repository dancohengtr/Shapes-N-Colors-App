window.onload = function(){
    theme.play();
    newColorSetup();
    newShapeSetup();
    
    
  canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.4;
    
  canvasContainer = document.getElementById("canvas-container");    
  canvasContainer.width = window.innerWidth;
  canvasContainer.height = window.innerHeight * 0.4;
    
  clickable = false;
  console.log('clickable = ' + clickable);
    
  setInterval(settingsChange, 10);
  draw();   
}


var color_choices = new Array();
color_choices[0] = ['Red'],
color_choices[1] = ['Green'],
color_choices[2] = ['Blue'],
color_choices[3] = ['Yellow'],
color_choices[4] = ['Purple'],
color_choices[5] = ['Orange'],
color_choices[6] = ['Pink'],
color_choices[7] = ['Brown'],
color_choices[8] = ['Gray'],
color_choices[9] = ['Black'],
color_choices[10] = ['White'];

var shape_choices = new Array();
shape_choices[0] = ['Circle'],
shape_choices[1] = ['Triangle'],
shape_choices[2] = ['Rectangle'],
shape_choices[3] = ['Square'];


var random_shape = 'nothing';
var random_color = 'nothing';
var random_number = 0;
var score = 0;


/*document.getElementById('s_answer_1').onclick = function(){return false;}
document.getElementById('s_answer_2').onclick = function(){return false;}
document.getElementById('s_answer_3').onclick = function(){return false;}
document.getElementById('s_answer_4').onclick = function(){return false;}*/


/*document.getElementById('c_answer_1').onclick = function(){return false;}
document.getElementById('c_answer_2').onclick = function(){return false;}
document.getElementById('c_answer_3').onclick = function(){return false;}
document.getElementById('c_answer_4').onclick = function(){return false;} 
document.getElementById('c_answer_5').onclick = function(){return false;}
document.getElementById('c_answer_6').onclick = function(){return false;}
document.getElementById('c_answer_7').onclick = function(){return false;}
document.getElementById('c_answer_8').onclick = function(){return false;}
document.getElementById('c_answer_9').onclick = function(){return false;}
document.getElementById('c_answer_10').onclick = function(){return false;}
document.getElementById('c_answer_11').onclick = function(){return false;}*/


//SHAPE QUESTION CODE//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function makeShapeAnswers(){
    
    //set choices
    document.getElementById('s_answer_1').innerHTML = shape_choices[0];
    document.getElementById('s_answer_2').innerHTML = shape_choices[1]; 
    document.getElementById('s_answer_3').innerHTML = shape_choices[2];
    document.getElementById('s_answer_4').innerHTML = shape_choices[3]; 
    
    //set clickability and return
    document.getElementById('s_answer_1').onclick = function(){checkShapeAnswer('Circle');}
    document.getElementById('s_answer_2').onclick = function(){checkShapeAnswer('Triangle');}
    document.getElementById('s_answer_3').onclick = function(){checkShapeAnswer('Rectangle');}
    document.getElementById('s_answer_4').onclick = function(){checkShapeAnswer('Square');}
    
}
function createRandomShape(){
    
    random_number = Math.floor(Math.random() * shape_choices.length);
    random_shape = shape_choices[random_number];
    
    
    if(random_shape == 'Circle'){
        
        document.getElementById('svg-question-s').innerHTML = "<circle cx='150' cy='100' r='80' stroke='black' stroke-width='3' fill='#4CAF50'/>";
    
    }else if(random_shape == 'Triangle'){
        
        document.getElementById('svg-question-s').innerHTML = "<polygon points='30,170 270,170 150,30' style='fill:#4CAF50;stroke:black;stroke-width:3'/>";
            
    }else if(random_shape == 'Rectangle'){
        
        document.getElementById('svg-question-s').innerHTML = "<rect width='250' height='150' x='25' y='25' style='fill:#4CAF50;stroke-width:3;stroke:rgb(0,0,0)'/>"
    
    }else if(random_shape == 'Square'){
        
        document.getElementById('svg-question-s').innerHTML = "<rect width='150' height='150' x='75' y='25' style='fill:#4CAF50;stroke-width:3;stroke:rgb(0,0,0)'/>"
    
    }
        
}
function newShapeSetup(){
    document.getElementById('shape-head-text').innerHTML = "What Shape is this?";
    createRandomShape();
    makeShapeAnswers();
}
function checkShapeAnswer(your_answer){
    
    //make buttons return nothing if clicked while checking
    document.getElementById('s_answer_1').onclick = function(){return false;}
    document.getElementById('s_answer_2').onclick = function(){return false;}
    document.getElementById('s_answer_3').onclick = function(){return false;}
    document.getElementById('s_answer_4').onclick = function(){return false;}
    
    if(your_answer == random_shape){
        
        document.getElementById('shape-head-text').innerHTML = "Correct!";
        score++;
        window.setTimeout(newShapeSetup, 4000);
        
    }else{
        document.getElementById('shape-head-text').innerHTML = "Incorrect...";
        window.setTimeout(newShapeSetup, 4000);
        
    }
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//COLOR QUESTION CODE//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function makeColorAnswers(){
    
    //set choices
    document.getElementById('c_answer_1').innerHTML = color_choices[0];
    document.getElementById('c_answer_2').innerHTML = color_choices[1]; 
    document.getElementById('c_answer_3').innerHTML = color_choices[2];
    document.getElementById('c_answer_4').innerHTML = color_choices[3]; 
    document.getElementById('c_answer_5').innerHTML = color_choices[4];
    document.getElementById('c_answer_6').innerHTML = color_choices[5]; 
    document.getElementById('c_answer_7').innerHTML = color_choices[6];
    document.getElementById('c_answer_8').innerHTML = color_choices[7]; 
    document.getElementById('c_answer_9').innerHTML = color_choices[8];
    document.getElementById('c_answer_10').innerHTML = color_choices[9]; 
    document.getElementById('c_answer_11').innerHTML = color_choices[10];
    
    //set clickability and return
    document.getElementById('c_answer_1').onclick = function(){checkColorAnswer('Red');}
    document.getElementById('c_answer_2').onclick = function(){checkColorAnswer('Green');}
    document.getElementById('c_answer_3').onclick = function(){checkColorAnswer('Blue');}
    document.getElementById('c_answer_4').onclick = function(){checkColorAnswer('Yellow');}
    document.getElementById('c_answer_5').onclick = function(){checkColorAnswer('Purple');}
    document.getElementById('c_answer_6').onclick = function(){checkColorAnswer('Orange');}
    document.getElementById('c_answer_7').onclick = function(){checkColorAnswer('Pink');}
    document.getElementById('c_answer_8').onclick = function(){checkColorAnswer('Brown');}
    document.getElementById('c_answer_9').onclick = function(){checkColorAnswer('Gray');}
    document.getElementById('c_answer_10').onclick = function(){checkColorAnswer('Black');}
    document.getElementById('c_answer_11').onclick = function(){checkColorAnswer('White');}
}
function createRandomColor(){
    
    random_number = Math.floor(Math.random() * color_choices.length);
    random_color = color_choices[random_number];
    console.log(random_color);
    
    document.getElementById('svg-question-c').innerHTML = "<circle id='color_fill' cx='150' cy='100' r='80' stroke='black' stroke-width='3'/>";
    document.getElementById('color_fill').style.fill = random_color;
        
}
function newColorSetup(){
    
    document.getElementById('color-head-text').innerHTML = "What Color is this?";
    createRandomColor();
    makeColorAnswers();
}

function checkColorAnswer(your_answer){
    
    //make buttons return nothing if clicked while checking
    document.getElementById('c_answer_1').onclick = function(){return false;}
    document.getElementById('c_answer_2').onclick = function(){return false;}
    document.getElementById('c_answer_3').onclick = function(){return false;}
    document.getElementById('c_answer_4').onclick = function(){return false;}
    document.getElementById('c_answer_5').onclick = function(){return false;}
    document.getElementById('c_answer_6').onclick = function(){return false;}
    document.getElementById('c_answer_7').onclick = function(){return false;}
    document.getElementById('c_answer_8').onclick = function(){return false;}
    document.getElementById('c_answer_9').onclick = function(){return false;}
    document.getElementById('c_answer_10').onclick = function(){return false;}
    document.getElementById('c_answer_11').onclick = function(){return false;}

    if(your_answer == random_color){
        
        document.getElementById('color-head-text').innerHTML = "Correct!";
        score++;
        console.log(score); 
        window.setTimeout(newColorSetup, 3000);
        
    }else{
        document.getElementById('color-head-text').innerHTML = "Incorrect...";
        console.log(score);
        window.setTimeout(newColorSetup, 3000);
        
    }
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////CANVAS///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var canvas = 'undefined';
var context = 'undefined';
var canvasContainer = 'undefined';
var clickable;
var mouseX;
var mouseY;
var currentColor;
var currentShape;
var currentSize;
var color_radios = document.getElementsByName('color');
var shape_radios = document.getElementsByName('shape');
var size_radios = document.getElementsByName('size');


function trueClickability(){
    clickable = true;
    console.log('clickable = ' + clickable);
}

function falseClickability(){
    clickable = false;
    console.log('clickable = ' + clickable);
}


function draw(){
    
    context.fillStyle = "white";
    context.fillRect(0,0,canvas.width, canvas.height);
   
        
    
    /*if(currentShape == "Circle"){
        presetCircle();
    }*/
    
}

window.addEventListener("click", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    var rect = canvas.getBoundingClientRect();
    
    if(clickable == true && currentShape == "Circle"){
        context.save();
        context.beginPath();
        context.arc(mouseX - rect.left, mouseY - rect.top, currentSize, 0, 2*Math.PI);
        context.fillStyle = currentColor;
        context.fill();
        context.stroke();
    }else if(clickable == true && currentShape == "Triangle"){
        context.save();
        context.beginPath();
        context.moveTo((mouseX - rect.left) - currentSize/1, (mouseY - rect.top) + currentSize/1);
        context.lineTo((mouseX - rect.left) + currentSize/1, (mouseY - rect.top) + currentSize/1);
        context.lineTo((mouseX - rect.left), (mouseY - rect.top) - currentSize/2);
        context.closePath();
        //context.lineTo(mouseX - currentSize/1, mouseY + currentSize/1);
        context.fillStyle = currentColor;
        context.fill();
        context.closePath();
        context.stroke();
        
    }else if(clickable == true && currentShape == "Square"){
        context.save();
        context.fillStyle = currentColor;
        context.fillRect((mouseX - rect.left) - currentSize, (mouseY - rect.top) - currentSize, 2 * currentSize, 2 * currentSize);
        context.strokeRect((mouseX - rect.left) - currentSize, (mouseY - rect.top) - currentSize, 2 * currentSize, 2 * currentSize);
    }
    else if(clickable == true && currentShape == "Rectangle"){
        context.save();
        context.fillStyle = currentColor;
        context.fillRect((mouseX - rect.left) - 2 * currentSize, (mouseY - rect.top) - currentSize, 4 * currentSize, 2 * currentSize);
        context.strokeRect((mouseX - rect.left) - 2 * currentSize, (mouseY - rect.top) - currentSize, 4 * currentSize, 2 * currentSize);
    }else{
        console.log('clickable = ' + clickable)
    }
});



function settingsChange(){
    
    for (var i = 0, length = color_radios.length; i < length; i++) {
    if (color_radios[i].checked) {
        document.getElementById('triangle-fill').style.fill = color_radios[i].value;
        document.getElementById('circle-fill').style.fill = color_radios[i].value;
        document.getElementById('square-fill').style.fill = color_radios[i].value;
        document.getElementById('rect-fill').style.fill = color_radios[i].value;
      break;
    }
  }
  for (var j = 0, length = color_radios.length; j < length; j++) {
    if (color_radios[j].checked) {
        currentColor = color_radios[j].value;
      break;
    }
  }
  for (var k = 0, length = shape_radios.length; k < length; k++) {
    if (shape_radios[k].checked) {
        currentShape = shape_radios[k].value;
      break;
    }
  }
  for (var l = 0, length = size_radios.length; l < length; l++) {
    if (size_radios[l].checked) {
        currentSize = size_radios[l].value;
      break;
    }
  }    
}

////AUDIO///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var theme = new Howl({
  src: ['./sounds/main_theme.mp3'],
  loop: true,
  volume: 0.5   
});

var bloop = new Howl({
  src: ['./sounds/Bloop_1.mp3'],
  volume: 0.5   
});

var clicky = new Howl({
  src: ['./sounds/Click.mp3'],
  volume: 0.5  
});




function checkTheme(){
    if(document.getElementById('theme_music').checked){
        theme.play();
    }else{
        theme.pause();
    }
}

function checkClicks(){
    if(document.getElementById('click_sounds').checked){
        clicky.volume(0.5);
        bloop.volume(0.5);
    }else{
        clicky.volume(0.0);
        bloop.volume(0.0);
    }
}



