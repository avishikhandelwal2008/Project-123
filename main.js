noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(500,430);
    canvas.position(650,150);
video = createCapture(VIDEO);
video.size(550,500);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded() {
    console.log("PoseNet model is initialised.");
}

function gotPoses(results) {
    console.log(results );
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose X value is " + noseX);
    console.log("Nose Y value is " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = Math.round(leftWristX - rightWristX);
    console.log(difference);
}

function draw() {
    background("#c1f5f5")
    fill("blue");
    stroke("black");
    square(noseX,noseY,difference);
    document.getElementById("size").innerHTML = "Width and Height of the square is " + difference;
}
