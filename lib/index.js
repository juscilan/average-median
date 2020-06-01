"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ListIsEven = function ListIsEven(list) {
    return list.length % 2 === 0 ? true : false;
};

var sortListAsc = function sortListAsc() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return list.sort(function (a, b) {
        a - b;
    });
};

var calculate = function calculate() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


    var newList = sortListAsc(list);

    if (ListIsEven(newList)) {
        return (newList[newList.length / 2] + newList[newList.length / 2 - 1]) / 2;
    }

    return newList[(newList.length - 1) / 2];
};

exports.calculate = calculate;