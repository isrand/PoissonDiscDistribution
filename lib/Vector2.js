"use strict";
exports.__esModule = true;
var Vector2 = /** @class */ (function () {
    function Vector2(/**First component of the vector */ x, /**Second component of the vector */ y) {
        this.x = x;
        this.y = y;
        this.magnitude = this.Magnitude();
        this.sqMagnitude = Math.pow(this.Magnitude(), 2);
    }
    Vector2.prototype.Magnitude = function () {
        return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    };
    /**
     *Associated unit vector (this vector's each component / this vector's magnitude)
     */
    Vector2.prototype.UnitVector = function () {
        var magnitude = this.magnitude;
        var newX = this.x / magnitude;
        var newY = this.y / magnitude;
        var newVector2 = new Vector2(newX, newY);
        return newVector2;
    };
    return Vector2;
}());
exports.Vector2 = Vector2;
