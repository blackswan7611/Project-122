x = 0;
y = 0;
draw_strawberry = "";
screen_width = 0;
screen_height = 0;
strawberry = "";
speak_data = "";
to_number = "";

function preload()
{
  strawberry = loadImage("Strawberry.jpg");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{
  console.log(event); 
  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number = Number(content);
  if (Number.isInteger(to_number))
{
  document.getElementById("status").innerHTML = "Started drawing strawberry ";
  draw_strawberry = "set";
}
else
{
  document.getElementById("status").innerHTML = "The system has not recognized the number";
}    
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 canvas = createCanvas(screen_width, screen_height-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_strawberry == "set")
  {
    for(var i = 1; i<= to_number; i++)
    {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      image(strawberry,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Strawberries drawn";
    speak_data = to_number + "Strawberries Drawn";
    speak();
    draw_strawberry = "";
    }
   
  }


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
