function preload()
{
}

function setup()
{
    canvas = createCanvas(500,450);
    canvas.position(100,290);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color="";
}

function draw()
{
    image(video, 0,0,640,480);
    tint(tint_color);

}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}