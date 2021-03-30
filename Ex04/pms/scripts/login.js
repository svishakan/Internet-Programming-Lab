function validateUser() {
    //To validate the login of the administrator

    var user = document.getElementById("uname").value;
    var pass = document.getElementById("pwd").value;

    if (user === "tomcat" && pass === "root") {
        document.getElementById("uname").value = "";
        document.getElementById("pwd").value = "";
        window.open("homepage.html", target="_self");
    }
    else {
        alert("Invalid credentials. Kindly check and try again.");
        document.getElementById("uname").value = "";
        document.getElementById("pwd").value = "";
        document.getElementById("uname").focus();
    }
}