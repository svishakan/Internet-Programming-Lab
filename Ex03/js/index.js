function nameFocus() {
    //On focus, change the text color
    document.getElementById("fname").style.color = "green";
}

function nameBlur() {
    //On blur, change the background color of the field
    document.getElementById("fname").style.backgroundColor = "azure";
}

function nameInvalid() {
    //On invalid, inform the user with alert

    var nameF = document.regform.fname.value;
    var nameL = document.regform.lname.value;
    var namePattern = new RegExp("^[a-zA-Z]+$");

    if (nameF == null || nameF == "") {
        window.alert("First Name cannot be left blank!");
    }

    else if (nameL == null || nameL == "") {
        window.alert("Last Name cannot be left blank!");
    }
}

function addrSelect() {
    //If text is selected, change its color
    document.getElementById("addr").style.color = "green";
}

function ageKeyPress() {
    //If key is pressed, change the text's font color & weight
    document.getElementById("age").style.color = "red";
    document.getElementById("age").style.fontWeight = "bold";
}

function maritalChange() {
    //If value is changed, alert the user
    var status = document.getElementById("marital").value;
    window.alert("Your marital status: " + status);
}

function phoneInvalid() {
    //If phone number is invalid, alert the user
    var num = document.getElementById("phone").value;

    if (isNaN(num)) {
        window.alert("Phone number can only consist of numbers!");
    }
}

//Drag and Drop
document.addEventListener("dragstart", function (dragEvent) {
    dragEvent.dataTransfer.setData('Text', dragEvent.target.innerHTML);
});

//Submission event
document.getElementById("regform").addEventListener("submit", function (submitEvent) {
    submitEvent.preventDefault();   //prevent default action

    //Get the values from the form
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;

    var genderList = document.getElementsByName("gender");

    for (i = 0; i < genderList.length; i++) {
        if (genderList[i].checked == true)
            var gender = genderList[i].value;
    }

    var maritalStatus = document.getElementById("marital").value;
    var addictions = document.getElementById("addict").value;
    var address = document.getElementById("addr").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    //Pass the parameters using the URL as queryParameters
    window.open(`submission.html?fname=${firstName}&lname=${lastName}&dob=${dob}&age=${age}&gdr=${gender}&mstat=${maritalStatus}&addn=${addictions}&addr=${address}&phn=${phone}&mail=${email}`);

    //Perform submit action (POST method)
    //Refreshes the registration page
    document.getElementById("regform").submit();
});

function playGame() {
    //Go to game page
    //window.location.href = "/game.html";
    window.open("game.html");
}

function exitPage() {
    //Exit the page
    window.close();
}

//Display time
var today = new Date();
var time = today.toLocaleTimeString();
document.getElementById("currentTime").innerHTML = time;