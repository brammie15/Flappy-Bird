var Bird;
var pipes =[];
function setup() {
  // put setup code here
  createCanvas(400,600);
  Bird = new bird();
  pipes.push(new pipe());
}

function draw() {
  // put drawing code here
  background(0);
  Bird.show();
  Bird.update();
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].hit(Bird)) {
      console.log("DEAD");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i,1);
    }
  }

  if (frameCount % 100 ==0) {
    pipes.push(new pipe());
  }
}

function keyPressed()
{
  if (key == ' ') {
    Bird.up();
  }
}
