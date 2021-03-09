//Display time
var today = new Date();
var time = today.toLocaleTimeString();
document.getElementById("currentTime").innerHTML = time;

//Display the appropriate patient details from the localStorage

//Get the URL from the window
const urlParams = new URLSearchParams(window.location.search);

//Filter the parameters and display it in the table
document.getElementById("fnamecell").innerHTML = urlParams.get("fname");
document.getElementById("lnamecell").innerHTML = urlParams.get("lname");
document.getElementById("dobcell").innerHTML = urlParams.get("dob");
document.getElementById("agecell").innerHTML = urlParams.get("age");
document.getElementById("gendercell").innerHTML = urlParams.get("gdr");
document.getElementById("maritalcell").innerHTML = urlParams.get("mstat");
document.getElementById("addictscell").innerHTML = urlParams.get("addn");
document.getElementById("addrcell").innerHTML = urlParams.get("addr");
document.getElementById("phonecell").innerHTML = urlParams.get("phn");
document.getElementById("emailcell").innerHTML = urlParams.get("mail");