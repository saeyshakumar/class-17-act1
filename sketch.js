
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(60,80,60,45,3,-2)
}

function draw() 
{
  background(220);
box1.show()
box1.move()
box1.move_up()
box1.bounce()
box1.bounce1()
}

