var itemsSymbol = document.getElementsByClassName("btnSymbol");
var countItemsSymbol = itemsSymbol.length;
var itemsNumbers = document.getElementsByClassName("btnNumber");
var countItemsNumbers = itemsNumbers.length;
var txtNumber = document.getElementById("txtNumbers");

var number1 = 0;
var number2 = 0;
var symbol = "";
var result = 0;

for (var i = 0; i < countItemsSymbol; i++){
    itemsSymbol[i].addEventListener("click", function ()
    {
        pressSymbol(this.value);
    });
}

for (var i = 0; i < countItemsNumbers; i++){
    itemsNumbers[i].addEventListener("click", function ()    
    {        
        pressNumber(this.value);
    });
}

function pressSymbol(symbolParam)
{
    if (symbolParam == "AC"){
        number1 = 0;
        number2 = 0;
        symbol = "";
        result = 0;
        txtNumber.value = "";
    }
    else if (number1 != 0 && number2 != 0 && symbol != ""){
        operacion(symbolParam);
    } 
    else if (number1 != 0 && number2 == 0 && symbol != "")
    {
        symbol = symbolParam;
    }
    else if (number1 != 0 && number2 == 0 && symbol == "")
    {
        symbol = symbolParam;
    } else {
        console.log("incorrect function");
    }   
}

function pressNumber(numberParam)
{
    if (number1 == 0) 
    {           
        txtNumber.value = numberParam;
        number1 = numberParam;
    }
    else if (number1 != 0 && symbol == "") 
    {
        txtNumber.value = txtNumber.value + "" + numberParam;
        number1 = txtNumber.value;
    }
    else if (number1 != 0 && number2 != 0 && symbol != "") 
    {
        txtNumber.value = txtNumber.value + "" + numberParam;
        number2 = txtNumber.value;
    }
    else if (number1 != 0 && symbol != "") 
    {
        txtNumber.value = numberParam;
        number2 = numberParam;
    }    
}

function operacion (symbolParam){

    var number1Numeric = parseInt(number1);
    var number2Numeric = parseInt(number2);

    switch(symbol)
    {
        case "+":            
            result = number1Numeric + number2Numeric;
            break;
        case "-":
            result = number1Numeric - number2Numeric;
            break;
        case "X":
            result = number1Numeric * number2Numeric;
            break;
        case "/":
            result = number1Numeric / number2Numeric;
            break;
        case "%":
            result = number1Numeric % number2Numeric;
            break;
        case "+/-":            
            result = number1Numeric + number2Numeric;
            break;       
    }    

    if (symbolParam != "="){
        txtNumber.value = result;
        number1 = result;
        number2 = 0;
    } else {
        txtNumber.value = result;
        number1 = result;        
    }    
}