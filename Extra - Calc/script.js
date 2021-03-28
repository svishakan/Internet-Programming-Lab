performMath = () => {
    let od1 = parseFloat(document.getElementById("od1").value.trim());
    let od2 = parseFloat(document.getElementById("od2").value.trim());
    let op = document.getElementById("op").value.trim();
    let res = 0;
        
    if(isNaN(od1) || isNaN(od2)){
        window.alert("Enter numbers only!");
        return;
    }

    switch(op){
        case '+':
            res = od1 + od2;
            break;
        case '-':
            res = od1 - od2;
            break;
        case '*':
            res = od1 * od2;
            break;
        case '/':
            res = od1 / od2;
            break;
        case '%':
            res = od1 % od2;
            break;
        case '**':
            res = od1 ** od2;
            break;
        default:
            res = "Invalid Operator";
    }

    if(res === "Invalid Operator"){
        window.alert("Invalid Operator Entered!");
        return;
    }

    res = res.toFixed(3);   //3 decimal places only

    document.getElementById("result").innerHTML = "Result: " + res;    
}

//Adding the event listener for click
let computeBtn = document.getElementById("computeBtn");
computeBtn.addEventListener("click", performMath);