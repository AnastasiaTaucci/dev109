// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 1; i <= pHeight; i++) {
        rLine += "<p>";
        //Create each line on the Rhombus
        for (j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = pHeight; i > 0; i--) {
        rLine += "<p>";
        //Create each line on the Rhombus
        for (j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }
        rLine += "</p>";
        //console.log(rLine);

    }

    document.getElementById("downRight").innerHTML = rLine;
}


function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 1; i <= pHeight; i++) {
        rLine += "<p>";
        // add white space on the left
        for (k = pHeight - i; k > 0; k--) {
            rLine += "<span style='color: white'>*</span>";
        }
        //Create each line on the Rhombus
        for (j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("upLeft").innerHTML = rLine;
}


function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = pHeight; i > 0; i--) {
        rLine += "<p>";
        // add white space on the left
        for (k = 0; k < pHeight - i; k++) {
            rLine += "<span style='color: white'>*</span>";
            console.log(rLine);
        }
        //Create each line on the Rhombus
        for (j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

        }
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("downLeft").innerHTML = rLine;
}


    document.getElementById("down").innerHTML = rLine;
}
