function pipe()
{

  this.top = random(height/2);
  this.bottom = random(height/2);
  this.w = 20;
  this.speed =2;
  this.x = width;
  this.DoIWork = false;
  this.highliht = false;
/*while (height-this.top-this.bottom < 100 && height-this.top-this.bottom > 150 ) {
  this.top = random(height/2);
  this.bottom = random(height/2);
}*/
this.hit = function(Bird) {
  if (Bird.y < this.top || Bird.y > height-this.bottom) {
    if (Bird.x > this.x && Bird.x < this.x + this.w) {
      this.highliht = true;
      return true;

    }
  }else {
    this.highliht = false;
    return false;
  }

}
this.show = function ()
{
  //console.log(height-this.top-this.bottom);
  /*if (DoIWork == false) {
    if (height-this.top-this.bottom < 20) {
      this.top = random(height/2);
      this.bottom = random(height/2);
    }else {
      DoIWork = true;
    }
  }*/


    if (this.highliht == true) {
      fill(255,0,0);
    }else {
      fill(255);
    }

    rect(this.x,0,this.w,this.top);
    rect(this.x,height-this.bottom,this.w,this.bottom);
}
this.update = function()
{
  this.x -= this.speed;
}
this.offscreen = function()
{
  if (this.x < -this.w) {
    return true;

  }else {
    return false;
  }
}
}
