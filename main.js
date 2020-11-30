Song1="";
Song2="";

function preload()
{
Song1= loadSound("Song1.mp3");
Song2= loadSound("Song2.mp3");  
}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();
video.createCapture(VIDEO);
video.hide();   
}

function draw()
{
image(video, 0, 0, 600, 500);    
}


