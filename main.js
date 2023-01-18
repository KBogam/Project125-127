song = "";


function preload()
{
  song = loadSound("Short_Meditation_Music_-_3_Minute_R_(getmp3.pro).mp3");
}

function setup()
{
  canvas = createCanvas(600,500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotResult);
}

function modelLoaded()
{
  console.log("Pose net is initialised");
}

LeftWristX = 0;
LeftWristY = 0;

RightWristX = 0;
RightWristY = 0;

function gotResult(results)
{
    if(results.length>0)
    {
      LeftWristX = results[0].pose.leftWrist.x;
      LeftWristY = results[0].pose.leftWrist.y;

      RightWristX = results[0].pose.rightWrist.x;
      RightWristY = results[0].pose.rightWrist.y;

      console.log("LeftWristX is "+ LeftWristX + " LeftWristY is " + LeftWristY);
      console.log("RightWristX is "+ RightWristX + " RightWristY is " + RightWristY);
    }
}

function draw()
{
  image(video,0,0,600,500);
  

  
} 

function play()
{
   song.play();
   song.setVolume(1);
   song.rate(1);
}