function redirect(path)
{
        window.location.href = path;
};
var div = document.getElementById("div1");

function crearMatriz()
{
        var size = parseInt(document.getElementById("tableSize").value);
        var table = document.getElementById("table1");
        for (let i = 0; i < size; i++){
                var row = table.insertRow();
                for (let j = 0; j < size; j++){
                        var cell = row.insertCell();
                        if (i === j){
                                cell.innerHTML = "1";
                        }
                        else {
                                cell.innerHTML = "0";
                        }

                }
        }
};
function colorChange(number) {
        if (number < 0)
        {
                document.getElementById("parrafo").style.color = "#FF0000";
        }
        else
        {
                document.getElementById("parrafo").style.color = "#000000";
        }
}
function sumar(){
        var value1 = parseInt(document.getElementById("value1").value);
        var value2 = parseInt(document.getElementById("value2").value);
        var result = value1 + value2;
        document.getElementById("parrafo").innerText = "El resultado de la suma es: " +  result;
        colorChange(result);
}
function restar(){
        var value1 = parseInt(document.getElementById("value1").value);
        var value2 = parseInt(document.getElementById("value2").value);
        var result = value1 - value2;
        document.getElementById("parrafo").innerText = "El resultado de la resta es: " +  result;
        colorChange(result);
}
function multiplicar(){
        var value1 = parseInt(document.getElementById("value1").value);
        var value2 = parseInt(document.getElementById("value2").value);
        var result = value1 * value2;
        document.getElementById("parrafo").innerText = "El resultado de la multiplicación es: " +  result;
        colorChange(result);
}
function dividir(){
        var value1 = parseInt(document.getElementById("value1").value);
        var value2 = parseInt(document.getElementById("value2").value);
        var result = value1 / value2;
        document.getElementById("parrafo").innerText = "El resultado de la división es: " +  result;
        colorChange(result);
}