var rect = require('./rectangle')

console.log(rect);

function solveRectangle(l,b){
    console.log("solving rectangle for l = " + l + " and b = " + b );

    if (l > 0 && b > 0) {
        console.log("Perimeter = " + rect.perimeter(l,b) );
        console.log("Area = " + rect.area(l,b));

    }
    else {
        console.log("Impossible to solve rectangle! did you mess something up?");
    };

    console.log("***End of Program***")

};

solveRectangle(1,2);
solveRectangle(0,1);
