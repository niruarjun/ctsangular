function draw(dimension1){
    console.log(dimension1);
    

}
draw({a:10,b:"sss"})
//using interface is better practice
interface dimension2{
    a:Number;
    b:String;
    c:Number;
}
function draw2(dimension2){
console.log(dimension2);

}
draw2({
    a:33,b:"33",c:333
})
function sum(a,b){
  var s=a+b;
  console.log(s);
  
}
sum(2,4)
