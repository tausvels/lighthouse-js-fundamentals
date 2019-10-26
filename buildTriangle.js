function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle (maxwidth){
    
    var width = '';
    for (let i = 0; i <= maxwidth; i++){
        width += makeLine(i);
    }
    return width;
}

// test your code by uncommenting the following line
console.log(buildTriangle(5));