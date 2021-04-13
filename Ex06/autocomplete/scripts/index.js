filterCountries = () => {
    //filter the countries based on name

    let input = document.getElementById("country-input");
    let value = input.value.trim().toUpperCase();

    let xhttp = new XMLHttpRequest();
    let url = `FetchServlet?queryString=${value}`;
    
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            autoComplete(value, this);
        }
    };

    xhttp.open('GET', url, true);
    xhttp.send();
}

autoComplete = (value, xml) => {
    //populate the datalist's options by parsing the XML document response

    let i = 0;
    let xmlDoc = xml.responseXML;
    console.log(xmlDoc);
    
    let root = document.getElementsByTagName("datalist");
    root = root[0];
    removeAllChildNodes(root);  //remove all option nodes from the datalist

    let x = xmlDoc.getElementsByTagName("country");

    //displaying the number of records found
    let info = document.getElementById("info");
    info.innerHTML = "";    //clear the existing content
    
    if(value != ""){
        //display if queryString isn't an empty string
        info.innerHTML = `Found ${x.length} record(s) that match ${value}`;
    }
    
    for(i = 0; i < x.length; i++){
        //set the option nodes with its values for the datalist
        let item = x[i].childNodes[0].nodeValue;
        let optionNode = document.createElement("option");
        optionNode.setAttribute("value", item);
        root.appendChild(optionNode);
    }
}

removeAllChildNodes = (parent) => {
    //to remove all existing child nodes of an HTML element

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}