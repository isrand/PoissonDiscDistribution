"use strict";
exports.__esModule = true;
var Vector2_1 = require("./Vector2");
var Point2 = /** @class */ (function () {
    function Point2(/**First component of the point */ x, /**Second component of the point */ y) {
        this.x = x;
        this.y = y;
    }
    ;
    /**
     *Returns the distance between this point and the given one.
     */
    Point2.prototype.Distance = function (point) {
        var distanceVector = new Vector2_1.Vector2(point.x - this.x, point.y - this.y);
        return distanceVector.magnitude;
    };
    /**
    *Generates a random point inside of the radius provided, using this point as the origin of coordinates.
    */
    Point2.prototype.RandomPointInsideCircle = function (radius) {
        var a = Math.random() * 2 * Math.PI;
        var R = radius * Math.sqrt(Math.random());
        var x = this.x + R * Math.cos(a);
        var y = this.y + R * Math.sin(a);
        return new Point2(x, y);
    };
    /**
    * Checks whether or not a point is inside another's point circle, given by its radus and using the second point as the origin of coordinates.
    */
    Point2.IsPointInsideCircle = function (point, coordinatesOrigin, radius) {
        return point.Distance(coordinatesOrigin) <= radius;
    };
    Point2.prototype.RandomPointInsideAnnulus = function (minRadius, maxRadius) {
        var randomPoint = this.RandomPointInsideCircle(maxRadius);
        var isPointValid = Point2.IsPointInsideCircle(randomPoint, this, maxRadius) && !Point2.IsPointInsideCircle(randomPoint, this, minRadius);
        while (!isPointValid) {
            randomPoint = this.RandomPointInsideCircle(maxRadius);
            isPointValid = Point2.IsPointInsideCircle(randomPoint, this, maxRadius) && !Point2.IsPointInsideCircle(randomPoint, this, minRadius);
        }
        return randomPoint;
    };
    return Point2;
}());
exports.Point2 = Point2;
