var rect = require('./rectangle');

console.log(rect);

function solveRectangle(l,b){
    console.log("solving rectangle for l = " + l + " and b = " + b );

    rect(l,b,function(err,rectangle){
        if (err){
            console.log(err);
        }
        else{
            console.log("Perimeter = " + rectangle.perimeter(l,b) );
            console.log("Area = " + rectangle.area(l,b) );
        };

    }


        );





};

solveRectangle(1,2);
solveRectangle(0,1);
