canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images = ["First_Photo.jpg", "Second_photo.jpg", "3.jpg", "mars.jpg"];
random_num = Math.floor(Math.random()*4);
console.log("Hippity Boi, " + random_num + " I choose you");
rover_width = 100;
rover_height = 90;
background_image = nasa_mars_images[random_num];

rover_image = "rover.png";
rover_x = 10;
rover_y = 10

//onload background in html (helps to load images)
function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = background_image;

    roverImageTag = new Image();
    roverImageTag.onload = uploadRover;
    roverImageTag.src = rover_image
}
function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverImageTag,rover_x,rover_y,rover_width,rover_height);
}
//keypresses
window.addEventListener("keydown", detect_key_down);

function detect_key_down(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == '87'){
        up();
        console.log('up');
    }
    if(keypress == '65'){
        left();
        console.log('left');
    }
    if(keypress == '83'){
        down();
        console.log('down');
    }
    if(keypress == '68'){
        right();
        console.log('right');
    }
}
function up(){
    if(rover_y >= 0){
        rover_y -= 10;
        uploadBackground();
        uploadRover();
        console.log("Up = " + rover_y + "-" + rover_x);
    }

}
function down(){
    if(rover_y <= 500){
        rover_y += 10;
        uploadBackground();
        uploadRover();
        console.log("Down = " + rover_y + "-" + rover_x);
    }

}
function left(){
    if(rover_x >= 0){
        rover_x -= 10;
        uploadBackground();
        uploadRover();
        console.log("Left = " + rover_y + "-" + rover_x);
    }

}
function right(){
    if(rover_x <= 700){
        rover_x += 10;
        uploadBackground();
        uploadRover();
        console.log("Right = " + rover_y + "-" + rover_x);
    }

}