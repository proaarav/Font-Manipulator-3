difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#5196e3");
    textSize(difference);
    fill("darkblue") ;
    text("Aarav Biyani",50,100);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
        difference = floor(results[0].pose.leftWrist.x - results[0].pose.rightWrist.x);
    }
}