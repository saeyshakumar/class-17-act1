class Box
  {
    constructor(x,y,w,h,vx,vy)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vx = vx;
      this.vy = vy;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move()
    {
      this.x = this.x+this.vx;
    }
move_up(){
  this.y=this.y+this.vy
}
bounce(){
  if(this.y<=0 || this.y>=height){
    this.vy=-this.vy
  }
}
bounce1(){
  if(this.x<=0 || this.x>=width){
    this.vx=-this.vx
  }
}
  }

  
