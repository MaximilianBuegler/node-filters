"use strict";

var filters = {};

module.exports = function (arr, wl) {
    function average(arr) {
        var acc = [];
        var i,j;
        for (j = 0; j < arr[0].length; j++) {
            acc[j]=0;
        }
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                acc[j] += arr[i][j];
            }
        }
        for (j = 0; j < arr[0].length; j++) {
            acc[j]/=arr.length;
        }
        return acc;
    }

    wl = wl || 3;

    var w = [];
    var f = [];
    for (var i = 0; i < arr.length; i++) 
    {
        if (w.length >= wl)
            w.shift();

        w.push(arr[i]);

        f.push(average(w));
    }

    return f;
};

