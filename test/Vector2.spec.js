"use strict";
exports.__esModule = true;
var Point2_1 = require("../lib/Point2");
function TestVector2() {
    var point = new Point2_1.Point2(0, 0);
    var radius = 2;
    console.log(point.RandomPointInsideAnnulus(2, 4));
}
TestVector2();
