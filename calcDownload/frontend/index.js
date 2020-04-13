var speedMU;
var fileSizeMU;

function calculate() {
    let fileSize;
    let downloadSpeed;

    fileSize = parseFloat(document.getElementById("fileSize").value);
    downloadSpeed = parseFloat(document.getElementById("downloadSpeed").value);

    MeasureUnit[0] = document.getElementById("downloadSpeedDropdown").value;



}

function printResult() {
    document.getElementById("ETC").value = fileSize / downloadSpeed + " segundos";
}

function measure() {
    fileSizeMU = document.getElementById("fileSizeDropdown").value;
    speedMU = document.getElementById("downloadSpeedDropdown").value;

    
}