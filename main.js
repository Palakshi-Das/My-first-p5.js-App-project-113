function preload(){
    img = loadImage('https://previews.123rf.com/images/fierysnake/fierysnake1901/fierysnake190100005/114309349-learning-to-code-colorful-hand-drawn-lettering-on-monitor-with-elements-children-coding-design-conce.jpg')
}

function setup(){
    canvas = createCanvas (650 , 500);
    canvas.position(300, 200);
}

function draw(){
    image(img , 120 , 100 , 400 , 300);
    fill(128 , 0 , 0);
    stroke(128 , 0 , 0);
    circle(600 , 50 , 70);
    circle(50 , 50 , 70);
    circle(600 , 450 , 70);
    circle(50 , 450 , 70);
    
    fill(0 , 128 , 0);
    stroke(0 , 128 , 0);
    rect(85 , 40 , 480 , 20);
    rect(85 , 440 , 480 , 20);
    rect(40 , 85 , 20 , 330);
    rect(590 , 85 , 20 , 330);
}

function take_snapshot(){
    save("Coding.png");
}