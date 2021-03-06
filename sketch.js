function setup() {
  createCanvas(displayWidth,displayWidth);
  background (0,0,0)
  stroke(0,0,0)
  frameRate(2)
}
function draw (){
  translate((windowPane+shift/2),(windowPane+shift/2));
  var windowPane=10;
  var width= windowWidth-2*windowPane
  var height=windowWidth-2*windowPane
  var shift =10;
  var space =1;
  var num=10; + random (-shift, shift)
 
    var sideLen=width/num;
   for(var y=0; y<displayWidth; y=y + sideLen){
   for( var x =0; x<displayWidth; x=x +sideLen){
     fill (random(200,150), random (20,15), random(0,100));
     quad (x+space+ random (-shift, shift), y + space + random (-shift, shift), x+ sideLen - space+ random (-shift, shift), y + space + random(-shift, shift), x+ sideLen- space+ random(-shift, shift), y + sideLen-space+ random (-shift, shift), x+ space + random (-shift, shift), y + sideLen- space+ random (-shift, shift));
   }
   }

}
