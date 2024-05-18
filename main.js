noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture (VIDEO)
    video.size(550, 500);
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!!!!')
}


function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX+ "noseY = " +noseY)

        leftristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(rightwristX - leftwristX)
        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + " difference = " + difference)
    }
}

function draw(){
    background('blue')

    document.getElementById("font_side").innerHTML = "Width and height of the text will be = " + difference + "px"
    fill('teal')
    stroke('orange')
    text("ayush", noseX, noseY)
    textSize(difference)
}

