var rect = {
    perimeter: function(x,y){
        return (2*(x+y));
    },
    area: function(x,y){
        return (x*y);
    }
};

exports.perimeter = rect.perimeter;
exports.area = rect.area;

