var a;
var b;
var c;
c = "string";
c = 2;
var d;
var e; //we can intialize array in bothways
e = [1, "string", 121.3];
var f = [12, 33, 3,];
console.log(c);
console.log(e);
console.log(f);
var firstname = "paul";
firstname = "sai";
//we can override the firstname while declaring with let or var
//overriding is not possible while using const
var lastname = "watson";
var color;
(function (color) {
    color[color["green"] = 0] = "green";
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
console.log(color.red);
