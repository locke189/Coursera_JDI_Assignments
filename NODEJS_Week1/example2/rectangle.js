
// LEGACY CODE
// var rect = {
//     perimeter: function(x,y){
//         return (2*(x+y));
//     },
//     area: function(x,y){
//         return (x*y);
//     }
// };

// exports.perimeter = rect.perimeter;
// exports.area = rect.area;

module.exports = function(x,y,callback){
    try{
        if ( x<= 0 || y <= 0){
            throw new Error("Sorry bro... I can't work like this!");
        }
        else {
            callback(null, {
                perimeter: function(x,y){
                   return (2*(x+y));
               },
                area: function(x,y){
                   return (x*y);
               }
           });
        }
    }
    catch (error) {
        callback(error,null);
    }
};

