function Pill(x, type) {

  this.origin = x;

  this.pos = createVector(x, 0);
  this.dis = 1 + random(3) ; // serpentine distance

  this.type = type;
  this.captured = false;

  this.r = 50;
}

Pill.prototype.draw = function() {

  if (this.type == true) {
    fill("#00FFFF")
  }else {
    fill("#FF4444")
  }

  stroke(255);
  strokeWeight(3);
  ellipse(this.pos.x, this.pos.y, this.r);
};

Pill.prototype.update = function() {

  this.pos.y += speed;

  this.pos.x = sin(this.pos.y * 0.01) * (width / this.dis) + this.origin;
}

Pill.prototype.capturedBy = function(x, y) {

  var d = dist(x, y, this.pos.x, this.pos.y);

  return (d < this.r);
};
