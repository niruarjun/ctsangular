var Rectangle = /** @class */ (function () {
    function Rectangle(l, h) {
        this.length = l;
        this.height = h;
    }
    Rectangle.prototype.getArea = function () {
        var area = Number(this.length) * Number(this.height);
        return area;
    };
    Rectangle.prototype.getParameter = function (v, h) {
        return 2 * (v + h);
    };
    return Rectangle;
}());
var obj = new Rectangle(22, 77);
obj.getArea();
var area = obj.getArea();
var para = obj.getParameter("sai", 88);
console.log(area);
console.log(para);
