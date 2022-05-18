nose_x = 0;
nose_y = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/MGbBF6PJ/m.png');
}

function setup(){
    canvas = createCanvas( 300 , 300 );
    canvas.center();
    video = createCapture(VIDEO);
    video.size( 300 , 300 );
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video , 0 , 0, 300 , 300);
    image( mustache , nose_x , nose_y , 30 , 30);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 12;
        nose_y = results[0].pose.nose.y - 12;
        console.log("nose x = " + nose_x );
        console.log("nose y = " + nose_y );
        
    }
}

function take_snapshot(){
    save('myFilter.png');
}