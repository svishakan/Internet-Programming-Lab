let fs = require("fs");

//Open a file

fs.open("Contents.txt", "r+", (error, fd) => {
    if (error) {
        console.log("File Doesn't Exist: Contents.txt");
    } else{
        console.log("File Opened: Contents.txt");
    }

    //Read a File

    fs.readFile("Contents.txt", (error, data) => {
        if (error) {
            return console.error(error);
        }
        data = data.toString();
        console.log(`\nInitial File Read:\n${data}`);

        //Truncate the file

        fs.truncate("Contents.txt", 73, (error, data) => {
            if (error) {
                return console.error(error);
            }

            //Read the file

            fs.readFile("Contents.txt", (error, data) => {
                data = data.toString();
                console.log(`\nFile Read After Truncate:\n${data}`);

                //Close the file

                fs.close(fd, (error) => {
                    if (error) console.error(error);
                    else console.log("\nFile Closed: Contents.txt");
                });
            });
        });
    });
});
