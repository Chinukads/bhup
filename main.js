img= "";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 500);
    canvas.center()

}
function draw(){
    image(img, 0, 0, 640, 500);
    fill("#FF0000");
    text("Doggy",45, 68 );
    noFill();
    stroke("#990000");
    rect(30, 90, 400, 300);
    fill("#FF0000");
    text("Meow Meow" ,400, 100);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 400, 300);

}