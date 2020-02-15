class Rectangle{
    private length:Number;
    private height:Number;
    constructor(l,h){
        this.length=l;
        this.height=h;
    }
    getArea():Number{
        let area=Number(this.length)*Number(this.height)
        return area;
    }
    getParameter(v,h)
    {
       return 2*(v+h);

    
    }
}    var 
     obj=new Rectangle(22,77)
    obj.getArea();
    
    var area=obj.getArea();
    var para=obj.getParameter("sai",88);
     console.log(area);
     console.log(para)
     
    
