function setup(){
    video=createCapture(VIDEO);
    video.size(530,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background('#87CEEB');
}

function modelLoaded(){
    console.log("PoseNet Model has been Started.")
}

function gotposes(results){
    if(results.length > 0)
    {
      console.log(results);
    }
}

