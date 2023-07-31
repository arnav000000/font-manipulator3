rightwristx=0;
leftwristx=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
} 
function draw()
{
    background('#f3f7f2');
    document.getElementById("font_size").innerHTML="fontsize of the text = "+difference+"px";
    textSize(difference);
    fill("black");
    text('hi',50,400);
}
function modelloaded()
{
    console.log("poseNet is intialized");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("leftwristx= "+leftwristx+" , rightwristx= "+rightwristx+" , difference= "+difference);
    }
}