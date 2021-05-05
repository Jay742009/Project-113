function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO)
    video.hide();

}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 40, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(580, 50, 80)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(570, 90, 20, 300);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(580, 420, 80)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(80, 410, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 420, 80)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(40, 90, 20, 290);

}

function takesnapshot() {
    save('yourpic.jpeg');
}