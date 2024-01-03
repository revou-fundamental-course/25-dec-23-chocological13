// javascript

// Area Calculation
function calculateArea() {
    var height = parseFloat(document.getElementById("inputHeight").value);
    var base = parseFloat(document.getElementById("inputBase").value);
    var unit = document.getElementById("inputAreaUnit").value;

    if (!isNaN(height) && !isNaN(base) && height > 0 && base >0) {
        var area = 0.5 * height * base;
        document.getElementById("resultArea").innerText = area.toFixed(2);
        document.getElementById("resultAreaUnit").innerText = " " + unit;
    }
    else {
        alert("Please enter valid input for area calculation.");
        return;
    }
    
}

function resetAreaFields() {
    document.getElementById("inputHeight").value = "";
    document.getElementById("inputBase").value = "";
    document.getElementById("inputAreaUnit").value = "";
    document.getElementById("resultArea").innerText = "";
    document.getElementById("resultAreaUnit").innerText = "";
}

// Perimeter Calculation
function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById("inputSideA").value);
    var sideB = parseFloat(document.getElementById("inputSideB").value);
    var sideC = parseFloat(document.getElementById("inputSideC").value);
    var unit = document.getElementById("inputPerimeterUnit").value;

    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC) && sideA > 0 && sideB > 0 && sideC > 0) {
        var perimeter = sideA + sideB + sideC;
        document.getElementById("resultPerimeter").innerText = perimeter.toFixed(2);
        document.getElementById("resultPerimeterUnit").innerText = " " + unit;
    }
    else {
        alert("Please enter valid input for perimeter calculation.");
        return;
    }
}

function resetPerimeterFields() {
    document.getElementById("inputSideA").value = "";
    document.getElementById("inputSideB").value = "";
    document.getElementById("inputSideC").value = "";
    document.getElementById("inputPerimeterUnit").value = "";
    document.getElementById("resultPerimeter").innerText = "";
    document.getElementById("resultPerimeterUnit").innerText = "";
}