//const marca = document.getElementById("marca").value; //pego info.
            
function calcularMargem(){
    const valorFipe = document.getElementById("valorFipe").value;
    const valorInvest = document.getElementById("valorInvest").value;
    const valorMargen = document.getElementById("valorMargen").value;

    var result = ((valorFipe -valorInvest)/valorFipe)*100;
    console.log(result)
    var margem = Math.floor(result);

    document.getElementById("margem").innerHTML = margem;
}

//document.getElementById("texto").innerHTML = texto; //printo a info