class Employee{
    public  firstname:String;
   public  lastname:String;
     salary:Number;
    gender :String
    email:String
    constructor(f:String,l:String,s:Number,g:String,e:String)
    {   this.firstname=f;
        this.lastname=l;
        this.gender=g;
        this.email=e;
        this.salary=s;
    }
    
   // constructor(
  //public  firstname:String,
   //public  lastname:String,
    // salary:Number,
    //gender :String,
    //email:String){}


getFullname(){
    console.log(this.firstname+"--"+this.lastname)
}
}


var t=new Employee("sai","niranjan",555,"male","ewe@");
t.getFullname();