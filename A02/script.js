var mark, studentName, grade, i = 1;
var table = document.getElementById("report");

while(i < 6){
    studentName = prompt("Please enter Student " + i + "'s name.");
    mark = prompt("Please enter Student " + i + "'s mark.");
    mark = parseInt(mark);
    i++;

    if(mark > 90){
        grade = "A";
    }
    else if(mark > 80){
        grade = "B";
    }
    else if(mark > 70){
        grade = "C";
    }
    else if(mark > 60){
        grade = "D";
    }
    else if(mark > 50){
        grade = "E";
    }
    else{
        grade = "F";
    }

    //To insert a table row and cells into the row
    //and populate the table with the values obtained
    var row = table.insertRow(i - 1);
    var cellName = row.insertCell(0);
    var cellMark = row.insertCell(1);
    var cellGrade = row.insertCell(2);

    cellName.innerHTML = studentName;
    cellMark.innerHTML = mark;
    cellGrade.innerHTML = grade;
}