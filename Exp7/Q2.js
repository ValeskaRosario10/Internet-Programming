const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });
// Display options and get user input
console.log("Select the operation:\n 1) Write \n 2) Read \n 3) Access \n 4) Rename \n 5) Copy \n 6) Append \n 7) Exit");
var ch = parseInt(prompt("Enter your choice: "));
switch (ch) {
case 1:
//Create and write file.txt
fs.writeFile("file.txt","hello",function(err) {
    if(err)
    {
    return console.log(err);
    }
    console.log("write operation is performed successfully");
    }
    );
    break;
    case 2:
    //Reading file.txt
    var cont = fs.readFile("file.txt", "utf8",
    function(err, cont) {
    if(err) {
    return console.log(err);
    }
    console.log(cont)
    }
    );
    break;
    case 3:
    //Accessing file.txt
    fs.access("file.txt", fs.F_OK,
    function(err) {
    if(err) {
    return console.log(err);
    }
    console.log("Accessible");
    }
    );
    break;
    case 4:
    //Renaming file.txt to file1.txt
    fs.rename("file.txt", "file1.txt",
    function(err) {
    if(err) {
    return console.log(err);
    }
    console.log("renamed");
    }
    );
    break;
    case 5:
    //Copying file1.txt to file2.txt
    fs.copyFile("file1.txt", "file2.txt" ,
    
   
    function(err) {
    if(err) {
    return console.log(err);
    }
    console.log("Copied");
    }
    );
    break;
    case 6:
    //Appending file3.txt to file2.txt
    fs.appendFile("file3.txt", " my world",
    function(err) {
    if(err) {
    return console.log(err);
    }
    console.log("Appended");
    }
    );
    break;
    case 7:
    //Exiting the program
    console.log('Exiting Program');
    break;
    default:
    console.log('Invalid choice. Please try again.');}