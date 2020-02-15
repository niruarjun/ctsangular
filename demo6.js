var Employee = /** @class */ (function () {
    function Employee(f, l, s, g, e) {
        this.firstname = f;
        this.lastname = l;
        this.gender = g;
        this.email = e;
        this.salary = s;
    }
    // constructor(
    //public  firstname:String,
    //public  lastname:String,
    // salary:Number,
    //gender :String,
    //email:String){}
    Employee.prototype.getFullname = function () {
        console.log(this.firstname + "--" + this.lastname);
    };
    return Employee;
}());
var t = new Employee("sai", "niranjan", 555, "male", "ewe@");
t.getFullname();
